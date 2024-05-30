// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { firstname, lastname,email, phone, password} = req.body;
  
//       // Validate input
//       if (!firstname || !lastname || !email || !phone || !password ) {
//         return res.status(400).json({ error: 'All fields are required' });
//       }
  
//       try {
//         // Assuming you have a function to save employee data to your backend
//         const response = await fetch('http://localhost:5103/api/Home/CreateEmployee', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             firstname,
//             lastname,
//             email,
//             phone,
//             password
            
//           })
//         });
  
//         const data = await response.json();
//         if (response.ok) {
//           res.status(200).json({ message: 'Employee registered successfully' });
//         } else {
//           res.status(response.status).json({ error: data.error || 'Failed to register employee' });
//         }
//       } catch (error) {
//         console.error('Error registering employee:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
//     } else {
//       // Handle any other HTTP methods
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  