
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function empLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim()); // Trim input value
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim()); // Trim input value
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {     
      email:email,    
      password:password
    };
 const url='http://localhost:5103/api/Home/employee_login'
 axios.post(url,data).then((result)=>{
  alert(result.data); 
  router.push('/empDashboard')
 }).catch((error)=>{
  alert(error);
 })   

  };

  return (
    <div>
      <center>
        <h1>Welcome to Employee Login Portal</h1>

        <div>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </center>
    </div>
  );
}

export default empLogin;


