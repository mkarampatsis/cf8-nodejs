const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/', express.static('static_files'));
app.set('view engine', 'ejs');

const logger = (req, res, next) => {
  let url = req.url;
  console.log("Logger: ", req.body);

  let time = new Date()
  console.log(`Received request for ${url} at ${time}`);

  next();
  // return res.send("Not authenticate")
} 

app.get('/user', (req, res) => {
  let userData = req.query;
  console.log('userDate:', userData);

  let firstname = userData.firstname;
  let lastname = userData.lastname;

  res.send(`Fistname: ${firstname} and Lastname: ${lastname}`);
});

app.post('/user', logger, (req, res)=>{
  let userData = req.body;
  console.log("UserData Post Request", userData)

  let firstname = userData.firstname;
  let lastname = userData.lastname;
  // res.send send back text
  // res.send(`POST >> Fistname: ${firstname} and Lastname: ${lastname}`);
  // res.json send back json object 
  res.json(userData);
});

app.get('/users/ejs', (req, res) => {

  console.log("Ejs Users");

  const myusers = [
    {
      "name": "name1",
      "surname": "surname1",
      "mail": "mail1",
      "sex": "sex1"
    },
    {
      "name": "name2",
      "surname": "surname2",
      "mail": "mail2",
      "sex": "sex2"
    }
  ]

  res.render('users', {myusers})
})

app.post('/userForm', (req, res)=>{
  console.log("Form Data: ", req.body);

  res.send(`${req.body.firstname} and ${req.body.lastname} and ${req.body.email} and ${req.body.sex}`);
})


app.listen(port, () =>{
  console.log("Server is up", port);
});