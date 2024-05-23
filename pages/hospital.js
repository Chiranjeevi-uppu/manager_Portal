import React, { useState } from 'react'
import { useRouter } from 'next/router';

function home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push ('/ManDashboard')


    // Perform login logic here (e.g., call an authentication API)
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields
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

      <button type="submit">Login</button>
    </form>
    </div>
    </center>
    </div>
  )
}

export default home
