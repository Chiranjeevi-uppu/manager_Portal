
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';


function empSearch() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee data from localStorage
    const storedEmployees = JSON.parse(localStorage.getItem('registeredEmployees')) || [];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
   
    if (searchTerm === '') {
        setFilteredEmployees([]); // Show no employees when search term is empty
      } else {
    const results = employees.filter(employee =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setFilteredEmployees(results);
      }
  }, [searchTerm, employees]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleViewProfile = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee when "view profile" is clicked
  };


  return (
    <div style={{ padding: '20px' }}>
      <center>
 
        <div style={{ width: '30%' , position:'relative' , left:40 , top:20  }}>
          
          <input
            id="search"
            type="text"
            placeholder="Enter employee's name"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' , borderRadius:20 , background:'#d6e7f1' }}
          />          
        </div>
{/* 
        <div>
        <button onClick={clearSearch} style={{ marginLeft: '10px', padding: '5px' }}>Clear</button>
        </div> */}
      <div >
        <ul style={{ marginTop: '50px', listStyleType: 'none' }}>
          {filteredEmployees.map((employee, index) => (

            <li key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>

            <div style={{display:'flex', gap:20}}>
            <div >
              <strong>Name:</strong> {employee.firstName} {employee.lastName}
            </div>
            <div >
              <strong>Email:</strong> {employee.email}
            </div>
            <div>
            <strong>Phone:</strong> {employee.phoneNumber}
            </div>
            <div  >
            <a href='#'  onClick={() => handleViewProfile(employee)}  style={{ textDecoration: 'none' }}>view profile</a>
            </div>
            </div>
          </li>
          ))}
        </ul>
        {selectedEmployee && (

        <div className='profile' style={{display:'flex' , background:'#d6e7f1' , height:'40vh' , width:'90%' , borderRadius:10}}>
          <h3 style={{position:'relative' , bottom:10 , whiteSpace:'nowrap' , left:20}}>Employee profile</h3>
          
          <div style={{position:'relative' , background:'orange' , height:'30%' , width:'8%' , top:70 , right:100 , borderRadius:"50%"}}>
            D.P
          </div>
          
          <div style={{position:'relative', height:'45%' , width:'80%' , top:50 , right:80 , }}>
            
            <h3 style={{position:'relative' , right:'43%' , bottom:30 }}> {selectedEmployee.firstName} {selectedEmployee.lastName}</h3>            
            <div style={{display:'flex' , gap:20}}>

              <div style={{ height:70 , width:170 , position:'relative' , left:10 , bottom:35 , borderRadius:10}}>
                  role : <br /><br /> 
                  <strong>  React developer </strong>               
              </div>

              <div style={{  height:70 , width:'30%' , position:'relative' , left:10 , bottom:35 , borderRadius:10}}>
                  phone : <br /><br />
                  <strong> {selectedEmployee.phoneNumber}</strong>
              </div>

              <div style={{ height:70 , width:'35%' , position:'relative' , left:10 , bottom:35 , borderRadius:10}}>
                  email :<br /><br />
                  <strong> {selectedEmployee.email} </strong>
              </div>

            </div>

          </div>
          
          

        </div>
         )}
      </div>
      </center>
    </div>
  );
}

export default empSearch;

{/* <a href='#' onClick={() => handleViewProfile(employee)} style={{ textDecoration: 'none' }}>view profile</a> */}