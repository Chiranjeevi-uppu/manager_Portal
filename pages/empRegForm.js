// import React ,{useState}from 'react'
// import { useRouter } from 'next/router'

// function empRegForm() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const router = useRouter();

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const input = e.target.value;
//     // Validate phone number to accept only digits and limit to 10 characters
//     if (/^\d{0,10}$/.test(input)) {
//       setPhoneNumber(input);
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match. Please try again.');
//       return;
//     }

//     const employeeData = {
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         password
//       };
//       localStorage.setItem('registeredEmployee', JSON.stringify(employeeData));

//       //Send Email via API

//       try {
//         const res = await fetch('/api/sendEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: email,
//             subject: 'Welcome to the Company',
//             text: `Hello ${firstName},\n\nThank you for registering.\n\nBest Regards,\nYour Company`,
//           }),
//         });
  
//         if (res.ok) {
//           alert('Registration successful and email sent!');
//         } else {
//           alert('Registration successful but failed to send email.');
//         }
//       } catch (error) {
//         alert('An error occurred while sending the email.');
//       }
  

    
//     router.push('/empLogin');
//   };

//   return (
//     <div >
//       <center>
//         <h1>Employee Registration Form</h1>
//         <div style={{display:'flex'}}>
//         <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" value={firstName}
//          onChange={handleFirstNameChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" value={lastName}
//          onChange={handleLastNameChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email}
//         onChange={handleEmailChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input type="tel" id="phoneNumber" value={phoneNumber}
//          onChange={handlePhoneNumberChange}
//           maxLength="10"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} 
//           onChange={handlePasswordChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" value={confirmPassword}
//          onChange={handleConfirmPasswordChange}
//           required
//         />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//         </div>
//       </center>
//     </div>
//   )
// }

// export default empRegForm


import { useState } from 'react';
import { useRouter } from 'next/router';
import { relative } from 'path';

const EmpRegForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,10}$/.test(input)) {
      setPhoneNumber(input);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    const storedEmployees = JSON.parse(localStorage.getItem('registeredEmployees')) || [];

    // Add new employee to the list
    const newEmployee = { firstName, lastName, email, phoneNumber, password };
    storedEmployees.push(newEmployee);

    // Store updated list back in local storage
    localStorage.setItem('registeredEmployees', JSON.stringify(storedEmployees));

    // Send email via API route
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          subject: 'Welcome to the JRCS',
          text: `Hello ${firstName} ${lastName},
          \n\nYour login-credentials are \nemail : ${email}\n password: ${password}.
          \n\nBest Regards,\nJRCS
          \n\nClick here to login: http://localhost:3000/empLogin`,
        }),
      });

      const responseData = await res.json();
      console.log('Email API response:', responseData);

      if (res.ok) {
        alert('Registration successful and email sent!');
      } else {
        alert(`Registration successful but failed to send email: ${responseData.error}`);
      }
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
      alert('An error occurred while sending the email.');
    }

    // Redirect to login page or main dashboard
    router.push('/empLogin');
  };



  return (
    <div style={{ marginTop:80 }} >
    <form onSubmit={handleSubmit}>
      <center>
        <strong> provide the required fields which are given below </strong>

        {/* //1st div */}
      <div style={{position:'relative' , display:'flex' , top:30 , gap:100 , justifyContent:'center'}}>
        {/* <label htmlFor="firstName">First Name:</label> */}
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          required
          placeholder='enter your first name'
          style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem' , borderRadius:20 }}
        />

         {/* <label htmlFor="lastName">Last Name:</label> */}
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder='enter your Last name'
          required
          style={{width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem' , borderRadius:20 }}
        />
 
      </div>
                 {/* 2nd div */}
      <div style={{position:'relative' , top:50 , display:'flex' ,justifyContent:'center', gap:100}}>
      {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder='enter your Email'
          required
          style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius:20 }}
        />

        {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          maxLength="10"
          placeholder='enter your number'
          required
          style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius:20 }}
        />
      </div>
                  
                  {/* 3rd div */}
      <div style={{display:'flex', gap:20 ,position:'relative' , top:70 , gap:100 , justifyContent:'center'}}>
      {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder='enter your password'
          required
          style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius:20 }}
        />

        {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
        <input
          type="password"
          id="confirmPassword"          
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder='confirm password'
          required
          style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius:20 }}
        />
      </div>
      
      <div>
        
      </div>

      <div style={{position:'relative',top:100 , width:60 ,justifyContent:'center'}}>
      <button type="submit">Register</button>
      </div> 

      </center>
      
    </form>
     {/* <a href='/manDashboard/empSearch'><h1>click here to nav</h1></a> */}

    </div>
  );
};

export default EmpRegForm;


