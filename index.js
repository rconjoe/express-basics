// EVERY EXPRESS APP EVER

// import express as app. 
// normally people do:
// const express = require('express');
// const app = express();
// but how is that any different than this one liner?
const app = require('express')();
// hint - its not :D

// we'll use join to make sure the path to our html file doesnt get borked:
const { join } = require('path');

// wtf is middleware?
// it's stuff that runs in the "middle" - 
// aka between when we received the request, and when you sent a response.
// it's for things you want to do on multiple routes, or on every request, etc
// here is a middleware function we could write: its purpose is to log out
// every time we receive a request:
function myMiddleware(req, res, next) {

  // log that we received a request:
  const date = new Date().toJSON()
  console.log(`request for route "${req.path}" at ` + date)

  // ALWAYS CALL next() at the end of a middleware function - 
  // if you don't, the middleware will never pass off to your handler
  // and the request will just hang.
  next();
}

// now if we pass that function to app.use(), 
// it's going to pass *every single request* 
// through this function as they are coming in.
app.use(myMiddleware);


// define ROUTE HANDLERS:
// what is a handler? the function that handles when we get a request.
// it's easier to think "what do i want to do when x route gets hit",
// write those functions, then pass them by name to the listeners (app.get, app.post etc)

function onHomeGetRequest(req, res) {
  // MIDDLEWARE RUNS HERE, BECAUSE YOU TOLD IT TO WITH app.use(myMiddleware)
  // *** if you don't pass next(), we would hang here on request!!!***

  // query params: localhost:3333?user=joe   <----this last part
  // this is how the request can give us information sent by the user!
  if (req.query && req.query.user) {
    console.log(`user ${req.query.user} has landed!`)
  }

  res.sendFile(join(__dirname, 'public', 'index.html'));
}

// so the above function has been defined....but we havne't ran it yet!
// where is it going to run? ON REQUEST to the route defined below:
// this is the moneyshot - everything express.js does is summed up in this line :D
app.get('/', onHomeGetRequest);

// make something like this work - 
// you don't have to use cats. make an api that you're interested in!
// app.get('/cat', onCatGetRequest);
// app.post('/cat', onCatPostRequest);

// start the server. always do this last:
app.listen(3005, () => console.log('listening on 3005'));

