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
    signup();
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
    <>
    <div className='signin h-screen flex items-center justify-center'>
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative bg-cyan mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
          Sign up
        </h3>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="relative h-11 w-full min-w-[200px]">
          <input type='text' 
          className='bg-gray w-full p-3 rounded-lg' 
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input type='email' 
          className='bg-gray w-full p-3 rounded-lg' 
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input type='password' 
          className='bg-gray w-full p-3 rounded-lg' 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={handleSignup}
          data-ripple-light="true"
          type="button"
          className="block w-full select-none rounded-lg bg-cyan to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Sign Up
        </button>
        
      </div>
    </div>
  </div>
  </>
  );
};

export default SignupForm;
