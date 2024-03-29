import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabase';



const Editcard = () => {

const navigate = useNavigate();

const [questionnaire, setQuestionnaires] = useState([]);
const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
      async function fetchQuestionnaires() {
        try {
          const { data, error } = await supabase
          .from('questionnaire')
          .select('*')
          .eq('user_id', userData.userID);
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

    const handleDelete = async (id) => {
        try {
            const { data, error } = await supabase
            .from('questionnaire')
            .delete()
            .match({'questionnaire_id':id})
            window.location.reload()
    
        } catch (error) {
            console.log('fail');
        }

    }
  
    return (
        <div>
        {questionnaire.length > 0 ? (
            questionnaire.map((questionnaire, index) => (
                <div key={index} className='questionnaires mt-12'>
                <div className='questionnair_card flex flex-col bg-gray p-4 md:flex-row gap-10 text-left w-full rounded-lg'>
                <h2>{questionnaire.title}</h2>
                <h3>{questionnaire.description}</h3>
                <div className='crud'>
                        <a onClick={() => handleDelete(questionnaire.questionnaire_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
                                    <g clipPath="url(#clip0_3_288)">
                                        <path d="M0.410713 3.125H5.75L7.475 0.9375C7.70454 0.646415 8.00219 0.410158 8.34437 0.247436C8.68655 0.0847151 9.06386 0 9.44643 0L13.5536 0C13.9361 0 14.3135 0.0847151 14.6556 0.247436C14.9978 0.410158 15.2955 0.646415 15.525 0.9375L17.25 3.125H22.5893C22.6982 3.125 22.8027 3.16616 22.8797 3.23941C22.9567 3.31267 23 3.41202 23 3.51562V4.29688C23 4.40048 22.9567 4.49983 22.8797 4.57309C22.8027 4.64635 22.6982 4.6875 22.5893 4.6875H21.619L19.9145 22.8662C19.8594 23.4491 19.577 23.9912 19.1229 24.3861C18.6688 24.7809 18.0758 24.9999 17.4605 25H5.53951C4.92422 24.9999 4.33122 24.7809 3.8771 24.3861C3.42299 23.9912 3.14061 23.4491 3.08549 22.8662L1.38103 4.6875H0.410713C0.301785 4.6875 0.197319 4.64635 0.120295 4.57309C0.0432701 4.49983 0 4.40048 0 4.29688V3.51562C0 3.41202 0.0432701 3.31267 0.120295 3.23941C0.197319 3.16616 0.301785 3.125 0.410713 3.125ZM14.2107 1.875C14.1339 1.77825 14.0347 1.6997 13.9207 1.64549C13.8067 1.59128 13.681 1.56288 13.5536 1.5625H9.44643C9.31898 1.56288 9.19334 1.59128 9.07934 1.64549C8.96535 1.6997 8.86607 1.77825 8.78929 1.875L7.80357 3.125H15.1964L14.2107 1.875ZM4.72321 22.7246C4.74012 22.9193 4.83352 23.1007 4.9848 23.2329C5.13607 23.365 5.33413 23.438 5.53951 23.4375H17.4605C17.6659 23.438 17.8639 23.365 18.0152 23.2329C18.1665 23.1007 18.2599 22.9193 18.2768 22.7246L19.971 4.6875H3.02902L4.72321 22.7246Z" fill="#164B60"/>
                                    </g>
                                <defs>
                                    <clipPath id="clip0_3_288">
                                        <rect width="23" height="25" fill="white" transform="matrix(-1 0 0 1 23 0)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        ))
    ): (
        <div className='nodata-text'>
            <h1>No questionnaires available.</h1>
        </div>
    )}
    </div>
    );
};

export default Editcard;
