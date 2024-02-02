export default async function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;
  
      // Process the form data and send it to your email
      const nodemailer = require('nodemailer');
  
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.APP_PASSWORD,
        },
      });
  
      const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: 'New Message from Portfolio',
        text: JSON.stringify(formData),
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
  }