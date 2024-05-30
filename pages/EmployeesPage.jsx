// pages/EmployeesPage.js

import React, { useState, useEffect } from 'react';

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from API
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/api/empsearch');
        if (!response.ok) {
          throw new Error('Failed to fetch data from API');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>Name:</strong> {employee.first_name} {employee.last_name}<br />
            <strong>Email:</strong> {employee.email}<br />
            <strong>Phone:</strong> {employee.phone}<br />
          </li>
        ))}
      </ul>
      api page
    </div>
  );
}

export default EmployeesPage;
