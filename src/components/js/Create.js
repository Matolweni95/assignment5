import React, { useState } from 'react';
import '../css/Create.css';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import { supabase } from './supabase';



function Create() {
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState([]);
  const [heading, setHeading] = useState('');
  const [desc, setDesc] = useState('');

  const handleFormSubmit = (newText) => {
    setDataList([...dataList, { id: Date.now(), text: newText }]);
  };

  const handleEdit = (id) => {
    const updatedDataList = dataList.map(item =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setDataList(updatedDataList);
  };

  const handleEditChange = (id, editedData) => {
    const updatedDataList = dataList.map(item =>
      item.id === id ? { ...item, text: editedData } : item
    );
    setDataList(updatedDataList);
  };

  const handleDelete = (id) => {
    const updatedDataList = dataList.filter(item => item.id !== id);
    setDataList(updatedDataList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(inputData);
    setInputData('');
 
  };

  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData);
  const username = user.username;
  const id = user.userID
        
    

  async function insertDataIntoDatabase() {
    try {
      
      const { data: insertData, error: insertError } = await supabase.from('questionnaire').insert({
        user_id: id,
        title: heading,
        description: desc
      });
  
      if (insertError) {
        console.error('Error inserting into questionnaire:', insertError);
        return;
      }
  
      const { data: fetchedQuestionnaire, error: fetchError } = await supabase
        .from('questionnaire')
        .select('questionnaire_id')
        .order('questionnaire_id', { ascending: false })
        .limit(1);
  
      if (fetchError) {
        console.error('Error fetching questionnaire data:', fetchError);
        return;
      }
  
      const insertedQuestionnaireID = fetchedQuestionnaire[0].questionnaire_id;
      console.log(insertedQuestionnaireID);

      const dataToInsert = dataList.map(item => ({
        questionnaire_id: insertedQuestionnaireID,
        question: item.text
      }));
      
      const { data: questionInsertData, error: questionInsertError } = await supabase.from('questions').insert(dataToInsert);
  
      window.location.href = "/dashboard";
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  }
      
  return (
    <div>
      <Navbar />
      <Sidenav username = {username}>
        <div>
          <div className='form-container bg-custom p-4 rounded-lg mt-10'>
            <h1>Create Questionnaire</h1>
            <form onSubmit={handleSubmit}>
              <div className='form-description'>
                <label>Heading</label>
                <input className='input heading rounded' 
                value={heading}
                required
                onChange={(e) => setHeading(e.target.value)}
                type='text' />
                <label>Description</label>
                <textarea rows={3} className='input rounded' 
                value={desc}
                required
                onChange={(e) => setDesc(e.target.value)}
                type='text' />
              </div>
              <input
                type="text"
                className='input rounded'
                placeholder='Add question'
                required
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <button type="submit">Add</button>
            </form>
          </div>
          {dataList.map(item => (
            <div className='result bg-custom p-4 rounded-lg' key={item.id}>
              <input
                type="text"
                className='view rounded'
                value={item.text}
                readOnly={!item.isEditing}
                onChange={(e) => handleEditChange(item.id, e.target.value)}
              />
              <button onClick={() => handleEdit(item.id)}>
                {item.isEditing ? 'OK' : 'Edit'}
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
          <div className='btn'>
            <button onClick={() => insertDataIntoDatabase()}>Submit</button>
          </div>
        </div>
      </Sidenav>
    </div>
  );
}

export default Create;
