const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Our application will accept requests with bodys that have a JSON format
app.use(bodyParser.json())

app.get('/profile', function (req, res) {
  // res.send('Hello World')
  console.log(__dirname);
  res.sendFile(__dirname +'/index.html');
})

app.get('/home', function (req, res) {
  res.send('Hello World')
})

app.post('/login', function(req, res) {
  const username = 'vincethai';
  const password = 'dingdong';

  console.log(req.body);

  if(req.body.username === username && req.body.password === password) {
    res.sendFile(__dirname +'/loggedIn.html')
  } else {
    res.sendFile(__dirname +'/notLoggedIn.html');
  }
})




app.listen(3000)