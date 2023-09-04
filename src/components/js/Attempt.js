import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import '../css/Attempt.css';
import { useLocation } from 'react-router-dom';
import { supabase } from './supabase';

function Attempt() {

    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const location = useLocation();
    const { questionnaire } = location.state;
    const id = questionnaire.questionnaire_id
    console.log(id)
    localStorage.setItem('questionnaireID', JSON.stringify({ ID: id}));


    useEffect (() => {
        async function fetchQuestion (){
            try {
                const {data, error} = await supabase
                .from('questions')
                .select('*')
                .eq('questionnaire_id', id)
                if(error){
                    console.log('error fetching data:', error.message)
                  } else {
                    setQuestions(data)
                    console.log(questions)
                  }
                } catch (error) {
                    alert('failed to fetch')
                  
            }
        }

        fetchQuestion()
    }, []) 

    const handleRadioChange = (questionId, value) => {
        setResponses({
            ...responses,
            [questionId]: {
                id : questionId,
                res: value
            },
        });
        
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const mappedResponses = Object.values(responses);
        console.log(mappedResponses);

        const inserData = async() => {
        const questionnaireData = localStorage.getItem('questionnaireID');
        const questionData = JSON.parse(questionnaireData);
        const questionaaire_id = questionData.ID;

        const userID = localStorage.getItem('userData');
        const Data = JSON.parse(userID);
        const setID = Data.userID;
            
        const { data, error } =  await supabase
            .from('responses')
            .insert(mappedResponses.map(({ id, res, question, user }) => ({
                question_id: id,
                response: res,
                questionnaire_id: questionaaire_id,
                user_id: setID
            }))

            
        );

        if (!error) {
            localStorage.removeItem('questionnaireID')
            window.location.href = "/"
        }else {
            alert('Sorry there was a problem inserting data')
        }
    }

        inserData()
    };

  return (
    
    <div>   
        <Navbar />
        <Sidenav>
        <form onSubmit={handleSubmit}>
            <table>
            <thead>
                <tr>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {questions.map((item, index) => (
                <tr key={index}>
                    <td>{item.question}</td>
                    <td>
                        <div className="radio-button-container">
                            <div className="radio-button">
                                <input
                                    type="radio"
                                    required
                                    className="radio-button__input"
                                    id={`radio-${item.question_id}-agree`}
                                    name={`question-${item.question_id}`} 
                                    value="Agree"
                                    onChange={() => handleRadioChange(item.question_id, 'Agree')}
                                />
                                <label className="radio-button__label" htmlFor={`radio-${item.question_id}-agree`}>
                                    <span className="radio-button__custom"></span>
                                    Agree
                                </label>
                            </div>
                            <div className="radio-button">
                                <input
                                    type="radio"
                                    required
                                    className="radio-button__input"
                                    id={`radio-${item.question_id}-neutral`}
                                    name={`question-${item.question_id}`} 
                                    value="Neutral"
                                    onChange={() => handleRadioChange(item.question_id, 'Neutral')}
                                />
                                <label className="radio-button__label" htmlFor={`radio-${item.question_id}-neutral`}>
                                    <span className="radio-button__custom"></span>
                                    Neutral
                                </label>
                            </div>
                            <div className="radio-button">
                                <input
                                    type="radio"
                                    required
                                    className="radio-button__input"
                                    id={`radio-${item.question_id}-disagree`}
                                    name={`question-${item.question_id}`} 
                                    value="Disagree"
                                    onChange={() => handleRadioChange(item.question_id, 'Disagree')}
                                />
                                <label className="radio-button__label" htmlFor={`radio-${item.question_id}-disagree`}>
                                    <span className="radio-button__custom"></span>
                                    Disagree
                                </label>
                            </div>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
            </table>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </Sidenav>
    </div>
  )
}

export default Attempt