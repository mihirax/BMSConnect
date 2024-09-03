const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const StudentModel = require('./models/student')
const app = express()
app.use(express.json()) 
app.use(cors())
app.use(bodyParser.json());

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    StudentModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password)
            {
                res.json("Sucess")
            }else{
                res.json("incorrect password")
            }
        }else{
            res.json("no record found")
        }
    })
})

app.post('/signup',(req,res)=>{
     StudentModel.create(req.body)
     .then(student => res.json(student))
     .catch(err=> res.json(err))
})
app.post('/form', async (req, res) => {
    try {
      const newData = new DataModel(req.body);
      await newData.save();
      res.status(201).json(newData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
app.post('/form-submission', async (req, res) => {
  const response = req.body;
  try {
    const submission = await DataModel.findOne({name: response.formName});
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    res.json(submission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});