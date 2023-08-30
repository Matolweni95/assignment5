import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signout() {
    const navigate = useNavigate();

    const handleSignout = () => {
        localStorage.removeItem('userData');
        navigate('/');
      };

  return (
    <div>
        <button onClick={handleSignout}>Signout</button>
    </div>
  )
}

export default Signout