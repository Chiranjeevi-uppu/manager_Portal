// //NewOne 

// import React from 'react'
// import Link from 'next/link'
// import { useState, useEffect } from 'react';

// function ManDashboard() {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredEmployees, setFilteredEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employee data from localStorage
//     const storedEmployees = JSON.parse(localStorage.getItem('registeredEmployees')) || [];
//     setEmployees(storedEmployees);
//   }, []);

//   useEffect(() => {
//     // Filter employees based on search term
//     const results = employees.filter(employee =>
//       employee.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredEmployees(results);
//   }, [searchTerm, employees]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <center>
//         <h1>Welcome to Manager Dashboard</h1>

//         <Link href='/empRegForm' style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
//           Employee Registration Form
//         </Link>

//         <div style={{ marginTop: '20px' }}>
//           <label htmlFor="search">Search by Email:</label>
//           <input
//             id="search"
//             type="text"
//             placeholder="Enter email"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             style={{ marginLeft: '10px', padding: '5px' }}
//           />
//           <button onClick={clearSearch} style={{ marginLeft: '10px', padding: '5px' }}>Clear</button>
//         </div>

//         <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
//           {filteredEmployees.map((employee, index) => (
//             <li key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
//               <strong>Name:</strong> {employee.firstName} {employee.lastName}<br />
//               <strong>Email:</strong> {employee.email}<br />
//               <strong>Phone:</strong> {employee.phoneNumber}
//               <a href='#'>view Status</a>
//             </li>
//           ))}
//         </ul>
//       </center>
//     </div>
//   );
// }

// export default ManDashboard;

import React , {useState} from 'react'
import { Stack } from '@mui/material';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Logout from '../components/Logout'; 
import AppBar from '../components/AppBar';
import Content from './content';

function ManDashboard() {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };
  return (
    <div style={{ display:'flex' , flexDirection:'column' }}> 

      <div style={{background:' #58b9d7' , height:'15vh'}}>
                      
        <div style={{position:'absolute' , right:20 , top:33 , display:'flex', gap:25}}>
          <Avatar  />
          <Logout />
        </div>

        <center> <h1>manager Dashboard</h1> </center>
      </div>

      <div style={{ display:'flex' }}>
        <div style={{background:'#d6e7f1' , height:'85vh'}}>
          
          <AppBar handleLinkClick={handleLinkClick} />
        </div>

        <div style={{background:'#e5eaf3', width:'100%' ,height :'85vh'}}>
           <Content selectedContent={selectedContent} />
        </div>
      
      </div>
    </div>
  )
}

export default ManDashboard
