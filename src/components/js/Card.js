import React, { useState, useEffect } from 'react';
import '../css/Card.css';
import Button from './Button';
import { supabase } from './supabase'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const [questionnaires, setQuestionnaires] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestionnaires() {
      try {
        const { data, error } = await supabase.from('questionnaire').select('*');
        if (error) {
          console.error('Error fetching questionnaires:', error.message);
        } else {
          setQuestionnaires(data);
        }
      } catch (error) {
        console.error('Error fetching questionnaires:', error.message);
      }
    }

    fetchQuestionnaires();
  }, []);

  return (
    <div className='holder'>
      {questionnaires.length > 0 ? (
        questionnaires.map((questionnaire, index) => (
          <div key={index} className='card_container'>
            <div className='cards'>
              <h1>{questionnaire.title}</h1>
              <h3>Description:</h3>
              <p>{questionnaire.description}</p>
              <button onClick={() => navigate('/attempt', {state: {questionnaire:questionnaire}})}>
                Attempt
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className='nodata-text'>
            <h1>No questionnaires available.</h1>
        </div>
      )}
    </div>
  );
};

export default Card;
