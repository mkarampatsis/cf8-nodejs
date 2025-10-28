import express from "express";
import { greet } from "./utils";

const app = express()

app.get('/', (req, res)=>{
  res.send("Hello World");
});

app.get('/greetings', (req, res)=>{
  const message = greet("Markos");
  res.send(message);
})

app.listen(3000, ()=>{
  return console.log("Server is up");
});