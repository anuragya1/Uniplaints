import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
const port = 3001;
import { Login } from './login.js';
import { Form } from './formData.js';
import { Signin } from './Signin.js';

app.use(cors());
app.use(express.json());
(async () => {
  const conn = await mongoose.connect('mongodb+srv://anuragyadav3160:Gojomadara123@uniplaintsdata.r2bylgx.mongodb.net/');
  if (conn)
    console.log("database connected")
  else
    console.log('erro while connecting to database');
})();

app.get('/', async (req, res) => {
  res.send("hello world");
})
app.post('/submit-form', async (req, res) => {

  const { name, phoneNo, email, age, description } = req.body;
  const saveFormData = new Form({ name: name, phoneNo: phoneNo, email: email, Age: age, description: description, isDone: false });
  saveFormData.save();
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'r2600821@gmail.com',
      pass: 'llvlgryirojjmkws'
    },
  });

  const mailOptions = {
    from: 'r2600821@gmail.com',
    to: `anurag1086.be22@chitkarauniversity.edu.in`,
    subject: 'Call of Duty',
    text: `Name: ${name}\nPhone Number :${phoneNo}\nEmail: ${email}\nAge: ${age}\nDescription: ${description}`,
  };
  const transporter2 = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'r2600821@gmail.com',
      pass: 'llvlgryirojjmkws'
    },
  });
  const mailtoUser = {
    from: 'r2600821@gmail.com',
    to: `${email}`,
    subject: 'Uniplaint-Problem received!',
    text: `Dear User,
  
  We have received your complaint and assigned TempLoyee from our team to assist you further in resolving it. TempLoyee will reach out to you shortly.
  
  For your reference, here are TempLoyee's contact details:
  - Email: [TempLoyeeEmail@Uniplaits.com](mailto:TempLoyeeEmail@Uniplaints.com)
  - WhatsApp: [TempLoyeeWhatsAppNumber](https://wa.me/1234567890)
  
  Thank you for bringing this to our attention. We appreciate your patience as we work to address your concerns.
  
  Best regards,
  Uniplaints`
  };
  ;
  try {
    const info = await transporter2.sendMail(mailtoUser);
    console.log('Email sent to user: ' + info.response);
    console.log('mail sent to user ');
  } catch (error) {
    console.error('Error sending email  to user:', error);
    
  }
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send(error);
  }
});
app.post('/sign', async (req, res) => {
  console.log("sign in active");
   console.log(req.body);
  try {
     
    const { user, email, password } = req.body;
    const signD = new Signin({ userName: user, email: email, password: password});
    await signD.save();
    res.status(201).send({ message: "data saved successfully" });
  } catch (err) {
    res.status(500).send({ message: "error saving data to the database" });
  }
  
});


app.post('/login', async(req, res) => {
  const { UserId, password } = req.body;

  const checkUser = await Signin.findOne({ userName:UserId, password:password});
       if(checkUser)
    res.status(206).send('user Confirmed')
  else
  res.status(400).send('user not present please sign In');
  console.log("received info:", UserId, password);
});
app.post('/viewComplaints', async (req, res) => {
  console.log("viewcomplaints active");
  
  const { userName, passwrd } = req.body;
  console.log(userName, passwrd)
  if (!userName || !passwrd) {
    return res.status(409).json({ success: false, error: 'Invalid request. Missing user credentials' });
  }

  try {
    const formData = await Form.findOne({ name: userName});
    if (formData) {
      res.status(209).json(formData);
    } else {
      res.status(402).json({ success: false, error: 'You have not submitted any form yet' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch data' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
