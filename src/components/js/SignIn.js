import React, { useState, useEffect } from 'react';
import { supabase } from './supabase'

import { Link, useNavigate } from 'react-router-dom';


const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      
      const { data: users, error } = await supabase
        .from('users')
        .select('password, email, name, user_id')
        .eq('email', email)
        .single();

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
  <div className='signin h-screen flex items-center justify-center'>
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative bg-cyan mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
          Sign In
        </h3>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="relative h-11 w-full min-w-[200px]">
          <input type='text' 
          className='bg-gray w-full p-3 rounded-lg' 
          placeholder='Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input type='text' 
          className='bg-gray w-full p-3 rounded-lg' 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={handleSignin}
          data-ripple-light="true"
          type="button"
          className="block w-full select-none rounded-lg bg-cyan to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Sign In
        </button>
        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          Don't have an account?
          <Link to = "/signup">
          <span className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased">
            Sign up
          </span>
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default SigninForm;



{/* <div className='login'>
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
      <p>or</p>
      <Link to = "/signup">
        <button>Sign Up</button>
      </Link>
      </div>
    </div> */}

