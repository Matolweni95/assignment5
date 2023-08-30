import React, { useState, useEffect } from 'react';
import '../css/Edit.css';
import { supabase } from './supabase';

const Edit  = () => {

  const [ fetchedData, setData] = useState([]);
  useEffect (() => {
    async function fetchData(){
      try {
        const { data, error } = await supabase
        .from('questionnaire')
        .select('*')

        if(error){
          console.log('error fetching data:', error.message)
        } else {
          setData(data)
        }
      } catch (error) {
        
      }

    }
    fetchData();
  }, [])

    return (
      <div>
        <h1>Edit Questionnaire</h1>
      {fetchedData.map((item, index) => (
    <div key={index} className='edit'>
        <div className='questions'>
            {item.text && Array.isArray(item.text) ? (
                item.text.map((textItem, textIndex) => (
                    <div key={textIndex} className='text-item'>
                        <input value={textItem.text} />
                        <div className='edit-btn'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No text available.</p>
            )}
        </div>
    </div>
))}

      </div>
    );
}

export default Edit;
