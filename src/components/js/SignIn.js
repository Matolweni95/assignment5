import React, { useState, useEffect } from 'react';
import { supabase } from './supabase'
import '../css/SignIn.css';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      // Fetch hashed password from your users table
      const { data: users, error } = await supabase
        .from('users')
        .select('password, email, name, user_id')
        .eq('email', email)
        .single();

        console.log (users)

      if (error) {
        console.error('Database error:', error.message);
      } else {
        const storedPassword = users.password; 
        const storedEmail = users.email;
        const storedUser = users.name;
        const storedid = users.user_id;
       
        if (storedPassword === password && storedEmail === email) {
          alert('User authenticated');
          localStorage.setItem('userData', JSON.stringify({ username: storedUser, userID: storedid }));
          navigate('/dashboard');
       
        } else {
          alert('Authentication failed');
        }
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem('userData'); 
    if (userData) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className='login'>
      <div className='login-card'>
      <div className='signin-subheading'>
        <h3>Welcome Back</h3>
      </div>
      <input
        type="email"
        className='login-text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className='login-text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Sign In</button>
      </div>
    </div>
  );
};

export default SigninForm;
