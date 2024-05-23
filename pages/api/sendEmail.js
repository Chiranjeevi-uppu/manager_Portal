
// pages/api/sendEmail.js
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, text } = req.body;

    const msg = {
      to: email,
      from: 'chiru1122331@outlook.com', // Use your SendGrid verified sender
      subject: subject,
      text: text,
      // html: `
      //     <p>Hello ${firstName} ${lastName},</p>
      //     <p>Your login credentials are:</p>
      //     <p>Email: ${email}</p>
      //     <p>Password: ${password}</p>
      //     <p>Best Regards,<br>JRCS</p>
      //     <h4><a href="http://localhost:3000/empLogin">Click here to login</a></h4>
        // `,
      
    };

    try {
      await sendgrid.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
