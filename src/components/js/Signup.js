import React, { useState } from 'react';
import { supabase } from './supabase';
import '../css/signup.css';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', { username, password, email });
  };

  async function signup () {
   
      const { data , error } = await supabase
      .from('users')
      .insert({
        name: username,
        email: email,
        password: password
      })

    if (!error){
      alert('successfully signed up');
      window.location.href = "/"
    } else {
      alert('error signing user up')
    }
  }

  return (
    <div className='signup'>
      <div className='signupform-container'>
      <form onSubmit={handleSignup}>
      <h2>Signup</h2>
        <input
          type="text"
          className='signup-text'
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className='signup-text'
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className='signup-text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => signup()}>Signup</button>
        <Link to = "/">
          <button className='back'>Back to Login</button>
       </Link>
      </form>
      </div>  
    </div>
  );
};

export default SignupForm;
