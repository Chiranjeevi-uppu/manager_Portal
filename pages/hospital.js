import React, { useState } from 'react'
import { useRouter } from 'next/router';

function home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/ManLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to authenticate');
        // console.log("login failed");
      }

      const data = await response.json();

      // Assuming the response contains a success flag or token
      if (data.success) {
        router.push('/ManDashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    }
    setEmail('');
    setPassword('');
  };


  return (
    <div>
      <center> <h1>welcome to Manager Login-portal</h1> 

      <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email" id="email" value={email}         
          onChange={handleEmailChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password" id="password" value={password}          
          onChange={handlePasswordChange}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
    </div>
    </center>
    </div>
  )
}

export default home
