import express from 'express';
import nodemailer from 'nodemailer';
import { Login } from './schemas/login.js';
import { Form } from './schemas/formData.js';
import { Signin } from './schemas/Signin.js';
import { feedback } from './schemas/feedback.js';
import multer from 'multer';
import mongoose from 'mongoose';
(async () => {
  const conn = await mongoose.connect('mongodb+srv://anuragyadav3160:Gojomadara123@uniplaintsdata.r2bylgx.mongodb.net/');
  if (conn)
    console.log("database connected")
  else
    console.log('error while connecting to database');
})();
const router=express.Router();
const upload=multer({storage:multer.memoryStorage()});
router.get('/', async (req, res) => {
    res.send("hello world");
  })
  router.post('/submit-form', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {
      userId,
      password,
      name,
      address,
      phoneNo,
      email,
      age,
      complaintType,
      electricityIssue,
      waterIssue,
      contaminationLevel,
      roadIssue,
      location,
      severity,
      healthIssue,
      symptoms,
      medicalHistory,
      medications,
      allergies,
      issue,
      wasteType,
      wasteDescription,
      dateNoticed,
      recurring,
    } = req.body;
  
  
    const newComplaint = new Form({
      userId,
      password,
      name,
      email,
      address,
      age,
      phoneNo,
      complaintType,
      electricityIssue,
      waterIssue,
      contaminationLevel,
      waterImage: req.file?.buffer,
      roadIssue,
      location,
      severity,
      roadImage: req.file?.buffer, 
      healthIssue,
      symptoms,
      medicalHistory,
      medications,
      allergies,
      issue,
      wasteType,
      wasteDescription,
      dateNoticed,
      recurring,
      isDone:false,
      isObjected:false
    });
  
    try {
     
      const savedComplaint = await newComplaint.save();
      console.log('Complaint saved:', savedComplaint);
  
     
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'r2600821@gmail.com',
          pass: 'llvlgryirojjmkws',
        },
      });
  
      const mailOptions = {
        from: 'r2600821@gmail.com',
        to: 'exeunip4uniplaints@gmail.com',
        subject: 'New Complaint Received',
        text: `
          Name: ${name}\n
          Address: ${address}\n
          Phone Number: ${phoneNo}\n
          Email: ${email}\n
          Age: ${age}\n
          Complaint Type: ${complaintType}\n
          ${
            complaintType === 'Electricity'
              ? `Electricity Issue: ${electricityIssue}`
              : ''
          }
      
          ${
            complaintType === 'Water'
              ? `
          Water Issue: ${waterIssue}
          Contamination Level: ${contaminationLevel}
          Water Image: Attached
          `
              : ''
          }
      
          ${
            complaintType === 'Roads'
              ? `
          Road Issue: ${roadIssue}
          Location: ${location}
          Severity: ${severity}
          Road Image: Attached
          `
              : ''
          }
      
          ${
            complaintType === 'Healthcare'
              ? `
          Health Issue: ${healthIssue}
          Symptoms: ${symptoms}
          Medical History: ${medicalHistory}
          Current Medications: ${medications}
          Allergies: ${allergies}
          `
              : ''
          }
      
          ${
            complaintType === 'Waste Management'
              ? `
          Issue: ${issue}
          Waste Type: ${wasteType}
          Description: ${wasteDescription}
          Date Noticed: ${dateNoticed}
          Recurring Problem: ${recurring}
          `
              : ''
          }
        `,
      };
  
      const mailToUser = {
        from: 'r2600821@gmail.com',
        to: `${email}`,
        subject: 'Uniplaint-Problem received!',
        text: `
          Dear User,
  
          We have received your complaint and assigned a temporary employee from our team to assist you further in resolving it. The temporary employee will reach out to you shortly. For your reference, here are their contact details:
  
          - Email: [TempLoyeeEmail@Uniplaits.com](mailto:TempLoyeeEmail@Uniplaints.com)
          - WhatsApp: [TempLoyeeWhatsAppNumber](https://wa.me/1234568910)
  
          Thank you for bringing this to our attention. We appreciate your patience as we work to address your concerns.
  
          Best regards,
          Uniplaints
        `,
      };
  
      try {
        await transporter.sendMail(mailToUser);
        console.log('Email sent to user.');
      } catch (error) {
        console.error('Error sending email to user:', error);
      }
  
      try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent to admin.');
        res.status(200).send('Form submitted successfully');
      } catch (error) {
        console.error('Error sending email to admin:', error);
        res.status(500).send(error);
      }
    } catch (error) {
      console.error('Error saving complaint:', error);
      res.status(500).send(error);
    }
  });
  router.post('/sign', async (req, res) => {
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
  
  router.post('/notifyUser',async(req,res)=>{
    console.log(req.body)
     const link=' http://192.168.135.112:3000/confirmation';
    try{
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'r2600821@gmail.com',
          pass: 'llvlgryirojjmkws',
        },
      });
      const notification = {
        from: 'r2600821@gmail.com',
        to: req.body.email,
        subject: 'CONFIRMATION-Mail',
        text: `Dear User,\n\nWe would like to inform you that your complaint has been marked as Resolved.\nComplaint-type:${req.body.complaintType}\n\nclick this link to confirm that complaint is resolved or not:${link}.\n\nBest regards,\nThe Executive Team From Uniplaints`, 
      };
      await transporter.sendMail(notification);
      console.log(`notification sent to ${req.body.email}`);
      res.status(200).send('notification sent');
      
    }
    catch(err){
      console.log('error = ',err)
      res.status(500).send('internal server error');
    }
   })
   router.get('/viewComp', async (req, res) => {
   
  
    try {
      const Data = await Form.find();
      
      if (Data) {
        res.status(209).json(Data);
      } else {
        res.status(402).json({ success: false, error: 'You have not submitted any form yet' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch data' });
    }
  });
 router.post('/login', async(req, res) => {
    const { UserId, password } = req.body;
  
    const checkUser = await Signin.findOne({ userName:UserId, password:password});
         if(checkUser)
      res.status(206).send('user Confirmed')
    else
    res.status(400).send('user not present please sign In');
    console.log("received info:", UserId, password);
  });
  router.post('/viewComplaints', async (req, res) => {
    console.log("viewcomplaints active");
      console.log(req.body)
    const { userName, userpassword } = req.body;
    console.log(userName, userpassword)
    if (!userName || !userpassword) {
      return res.status(409).json({ success: false, error: 'Invalid request. Missing user credentials' });
    }
  
    try {
      const formData = await Form.find({ userId: userName,password:userpassword});
      console.log("under try block of backend viewC")
      console.log(formData);
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
  let reqCount =0;
  router.get('/data' ,async(req,res)=>{
    reqCount++;
    console.log(reqCount);
    console.log("Data route active");
    let data={
      total:"",
      resolved:""
    }
    try{
      data.total= await Form.countDocuments();
      data.resolved= await Form.countDocuments({isDone:true});
      console.log(data);
      if(data.total){
        res.status(200).send(data);
        
      }
      else
      res.status(400).send("error while fetching the data from the database .please try again later");
    }
    catch(error){
      res.status(501).send("internal server error");
    }
   
  });
  router.post('/feedback', async (req, res) => {
    let objection
    console.log(req.body);
    try {    if(req.body.IsDone==='false')
             objection=true;
      const update = await Form.findOneAndUpdate(
        { userId: req.body.userId, name:req.body.name, email:req.body.Email, complaintType: req.body.complaintType },
        {isDone:req.body.IsDone,isObjected:objection},
        {new:true}
          
      );
       console.log(update)
      const feedbackData = new feedback({userId: req.body.userId, name:req.body.name, email:req.body.Email, message:req.body.message });
      await feedbackData.save();
                              
      res.status(201).send({ message: "Thank you for giving us your valuable feedback" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "INTERNAL SERVER ERROR" });
    }
  });

export default router;

