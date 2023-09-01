import React, { useState } from 'react';
import { supabase } from './supabase';

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
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => signup()}>Signup</button>
       
      </form>

      
    </div>
  );
};

export default SignupForm;
