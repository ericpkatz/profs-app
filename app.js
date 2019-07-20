const express = require('express');
const app = express();
app.use(express.json());

module.exports = app;

app.get('/', (req, res, next)=> res.send({
  data: 'foo bar'
})); 

app.get('/foo', (req, res, next)=> {
  res.send({ foo: req.headers.foo})
}); 

app.post('/', (req, res, next)=> res.status(201).send({
  data: req.body.text.toUpperCase() 
})); 
