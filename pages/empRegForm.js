
                                 //NEW CODE
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EmpRegForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
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

    const data = {
      firstname:firstname,
      lastname:lastname,
      email:email,
      phone:phone,
      password:password
    };
 const url='http://localhost:5103/api/Home/CreateEmployee'
 axios.post(url,data).then((result)=>{
  alert(result.data); 
  router.push('/empLogin')
 }).catch((error)=>{
  alert(error);
 })
   
  };

  return (
    <div style={{ marginTop: 80 }}>
      <form onSubmit={handleSubmit}>
        <center>
          <strong>Provide the required fields which are given below</strong>
          <div style={{ position: 'relative', display: 'flex', top: 30, gap: 100, justifyContent: 'center' }}>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={handleFirstNameChange}
              required
              placeholder='Enter your first name'
              style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius: 20 }}
            />
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={handleLastNameChange}
              placeholder='Enter your last name'
              required
              style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius: 20 }}
            />
          </div>
          <div style={{ position: 'relative', top: 50, display: 'flex', justifyContent: 'center', gap: 100 }}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder='Enter your email'
              required
              style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius: 20 }}
            />
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneNumberChange}
              maxLength="10"
              placeholder='Enter your phone number'
              required
              style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius: 20 }}
            />
          </div>
          <div style={{ display: 'flex', gap: 20, position: 'relative', top: 70, gap: 100, justifyContent: 'center' }}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder='Enter your password'
              required
              style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius: 20 }}
            />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder='Confirm password'
              required
              style={{ width: '25%', height: '2rem', padding: '0.5rem', fontSize: '1rem', borderRadius: 20 }}
            />
          </div>
          <div style={{ position: 'relative', top: 100, width: 60, justifyContent: 'center' }}>
            <button type="submit">Register</button>
          </div>
        </center>
      </form>
    </div>
  );
};

export default EmpRegForm;










