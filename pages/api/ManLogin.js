// pages/api/login.js

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       try {
//         const { username, password } = req.body;
  
//         const response = await fetch('http://localhost:5283/api/Home/Manager_Login/', { // Replace with your .NET API endpoint
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, password }),
//         });
  
//         if (!response.ok) {
//           throw new Error('Failed to authenticate');
//         }
  
//         const data = await response.json();
//         res.status(200).json(data);
//       } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
//     } else {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  

// pages/api/login.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }
  
    const { email, password } = req.body;
  
    // Add your actual authentication logic here
    // This is a mock response for demonstration
    if (email === 'chiru3@gmail.com' && password === 'Chiru@123') {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  }
  