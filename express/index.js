/**
 * This is a basic Node.js back-end application that uses the Express framework.
 * 
 * Variables go on top
 * Express is a package that we can download through NPM (Node Package Manager)
 * 
 * Create a package.json by entering in the command line/terminal - "npm init -y" without the quotes
 * Then run - "npm install express"
 * We also use the body-parser package. Run the command - "npm install body-parser"
 * 
 * "npm install" or "npm i" for short allows us to install packages through NPM onto our machines.
 * 
 * Those packages and the packages that those packages rely on, get downloaded into a folder called node_modules.
 * Be sure to add a .gitignore file and ignore the node_modules folder so we don't send that bulky folder to github.
 * 
 * Those packages we installed then get added as a 'dependencies' in package.json
 * 
 * package.json has information about our application including author, version number, and the NPM packages that it uses.
 * 
 * If the package.json has dependencies already listed but you have no node_modules (ie new computer), then you can simply run "npm install"
 * and it will redownload ALL of the packages listed in package.json again for you
 * 
 * Express allows us to speed up our development process for creating a back-end application.
 * When a tool like Express helps you speed up your development process by following the steps they provide you, it is
 * known as a Framework. 
 * 
 */

// Here we require express - We reference the express package and store it in a variable called express
const express = require('express')

// In order to reference a request's body, we must install the body-parser package, per Express instructions in their documentation
// http://expressjs.com/en/resources/middleware/body-parser.html
const bodyParser = require('body-parser')

// We instantiate express by calling the function. Express exports a function so we call that function and our app is now functional.
// We are really just following the example they gave us.
// More info here: http://expressjs.com/en/guide/routing.html
const app = express()

// Our application will accept requests with bodys that have a JSON (JavaScript Object Notation) format
app.use(bodyParser.json())

// The app will listen for a GET request to the 'profile' endpoint. After that, it will execute the callback function (The second parameter)
app.get('/profile', function (req, res) {
  // __dirname is a built in variable that stores the current directory
  console.log(__dirname);

  // We send back the file index.html as the response (res)
  res.sendFile(__dirname +'/index.html');
})

// The app will listen for a GET request to the 'home' endpoint and send back the text, 'Hello World'
app.get('/home', function (req, res) {
  res.send('Hello World')
})

// The app will listen for a POST request, a request that SENDS DATA to a server, to the 'login' endpoint
// This mimics what a basic login looks like. 
app.post('/login', function(req, res) {
  // Declare the variables for the username and password we want to be matched
  const username = 'vincethai';
  const password = 'dingdong';

  // req stands for request. It is the data that was sent to us, the server
  // req is an object. Since we used body-parser, we are able to access the body of a request
  // req will now have a property called 'body' that we can reference by req.body
  console.log(req.body);

  // If the username and password in the request's body matches the values that we declared earlier,
  // then let them know if they're logged in or not
  if(req.body.username === username && req.body.password === password) {
    // Send an HTML file for logged in
    res.sendFile(__dirname +'/loggedIn.html')
  } else {
    // If incorrect username & password, send an HTML file for not logged in.
    res.sendFile(__dirname +'/notLoggedIn.html');
  }
})

// The back-end application will use the listen() method and listen on port 3000.
// A port is where a network connection happens on a machine
// If running on our machine, it will run on whatever IP you have and is accessible via your own Wifi.
// Running on your own machine defaults that IP to localhost. 
// Access an endpoint example in your browser or postman - GET Request: localhost:3000/home
app.listen(3000)