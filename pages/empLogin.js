// import React, { useState } from 'react'
// import { useRouter } from 'next/router';

// function empLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };


// const handleLogin = (e) => {
//     e.preventDefault();

    
//     const registeredEmployeeData = JSON.parse(localStorage.getItem('registeredEmployee'));

    
//     if (registeredEmployeeData && registeredEmployeeData.email === email && registeredEmployeeData.password === password) {
      
//       router.push('/empDashboard'); 
//     } else {
//       alert('Invalid email or password. Please try again.');
//     }
//   };


//   return (
//     <div>
//       <center> <h1>welcome to employee Login-portal</h1> 

//       <div>
//       <form onSubmit={handleLogin}>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email" id="email" value={email}         
//           onChange={handleEmailChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password" id="password" value={password}          
//           onChange={handlePasswordChange}
//           required
//         />
//       </div>

//       <button type="submit">Login</button>
//     </form>
//     </div>
//     </center>
//     </div>
//   )
// }

// export default empLogin



import React, { useState } from 'react';
import { useRouter } from 'next/router';

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

    const storedEmployees = JSON.parse(localStorage.getItem('registeredEmployees')) || [];
    const employee = storedEmployees.find(emp => emp.email.toLowerCase() === email.toLowerCase());

    if (employee && employee.password === password) {
      // Clear input fields
      setEmail('');
      setPassword('');
      router.push('/empDashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
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


