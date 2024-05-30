// pages/api/employees.js

export default async function handler(req, res) {
    try {
      // Fetch employee data from your .NET API
      const response = await fetch('http://localhost:5103/api/Home/GetManager'); // Replace with your .NET API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data from .NET API');
      }
      const data = await response.json();
  
      // Send the fetched data as a response
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching employee data from .NET API:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  