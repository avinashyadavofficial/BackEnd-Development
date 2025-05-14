const express = require('express');         
const app = express();  
// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // don’t forget this!
};

app.use(logger); // apply to all routes

app.get('/', (req, res) => {
  res.send('Hello!');
});
app.listen(3000, () => {                   
  console.log('Server running at http://localhost:3000'); 
});