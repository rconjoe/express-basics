# request handlers

this folder should contain the request handler function for one route per file.

e.g.

- handlers
  - onHomeGetRequest.js // runs when the homepage is called
  - onLoginPostRequest.js // maybe this receives login creds? etc

then, either in index.js go ahead and attach each of these functions to their corresponding route.

e.g. 
```javascript
function homeRouteHandler(req, res) {
  // do some stuff - res.sendFile(html), etc
  return
} 

app.get('/', homeRouteHandler);
```
