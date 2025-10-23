const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/about', (req, res)=> {
  console.log("About Page");
  res.send("This is the about page");
});

app.get('/help', (req, res)=>{
  console.log('Help Page');
  res.send("This is help page");
});

app.get('/user', (req, res)=>{
  let query = req.query;
  console.log(query);
  let name = query.name1;
  let surname = query.surname;

  console.log(name, surname);

  res.send('User query paramaters' + ' ' + name + ' ' + surname);
});

app.get('/user/:name/:surname', (req,res)=>{
  let params = req.params
  let name = params.name;
  let surname = params.surname;
  console.log(params);

  res.send('User path paramaters' + ' ' + name + ' ' + surname); 

})


app.listen(port, ()=>{
  console.log("Server is up", port)
})