import React, { useEffect, useState}  from 'react'
import Card from './Card';
import Navbar from './Navbar';
import Button from './Button';
import Sidenav from './Sidenav';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

const Home = (prop) => {

  const navigate = useNavigate();
  const [questionnaire, setQuestionnaire] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem('userData'); 
    if (!userData) {
      navigate('/signin');
    }
  }, []);

  useEffect(() => {

    async function fetchQuestionnaire() {
      try {
        const { data, error } = await supabase.from('questionnaire').select('*');
        if (error) {
          console.error('Error fetching questionnaire data:', error.message);
        } else {
          setQuestionnaire(data);
        }
      } catch (error) {
        console.error('Error fetching questionnaire data:', error.message);
      }
    }

    fetchQuestionnaire();
  }, []);

    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const username = user.username;

    return (
      <div className='card'>
        <Navbar />
        <Sidenav username={username}>
          <Card />
        </Sidenav>
      </div>
    );
};

export default Home;
