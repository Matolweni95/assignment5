import React, { useEffect, useState } from 'react';
import Sidenav from './Sidenav';
import Navbar from './Navbar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../css/Analytics.css';
import { supabase } from './supabase'

ChartJS.register({
    ArcElement,
    Tooltip,
    Legend
});

function Analytics() {

    const user = localStorage.getItem('userData');
    const userdata = JSON.parse(user)
    const username = userdata.username;
    const user_ID = userdata.userID;

    const [responseData, setResponseData] = useState({
        agree: 0,
        dis: 0,
        neut: 0
      });
    
      useEffect(() => {
        async function count() {
          try {
            const { data: agreeData, error: agreeError } = await supabase
              .from('responses')
              .select('*')
              .eq('response', 'Agree')
              .eq('user_id', user_ID);
    
            const { data: disData, error: disError } = await supabase
              .from('responses')
              .select('*')
              .eq('response', 'Disagree')
              .eq('user_id', user_ID);
    
            const { data: neutData, error: neutError } = await supabase
              .from('responses')
              .select('*')
              .eq('response', 'Neutral')
              .eq('user_id', user_ID);
    
            if (agreeError || disError || neutError) {
              console.error('Error counting responses:', agreeError || disError || neutError);
            } else {
              setResponseData({
                agree: agreeData.length,
                dis: disData.length,
                neut: neutData.length
              });
            }
          } catch (error) {
            console.error('Error:', error.message);
          }
        }
    
        count();
      }, []);
    
      const data = {
        labels: ['Agree', 'Disagree', 'Neutral'],
        datasets: [{
          data: [responseData.agree, responseData.dis, responseData.neut],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    const option = {
        
    }
    
  return (
    <div className='analytics-holder'>
        <Navbar />
        <Sidenav username = {username}>
            <div className='analytics'>
                <div className='cards-holder'>
                    <div className='analytic-cards'>
                        <h1>Agree</h1>
                        <h1>{responseData.agree}</h1>
                    </div>
                    <div className='analytic-cards'>
                        <h1>Disagree</h1>
                        <h1>{responseData.dis}</h1>
                    </div>
                    <div className='analytic-cards'>
                        <h1>Neutral</h1>
                        <h1>{responseData.neut}</h1>
                    </div>
                </div>
                <div className='chart-card'>
                    <Doughnut className='role'
                    data={data}
                    options={option}
                    >
                    </Doughnut>
                </div>
            </div>
        </ Sidenav>
    </div>
  )
}

export default Analytics