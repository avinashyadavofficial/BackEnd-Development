const express = require('express');         
const app = express();                      
app.post('/', (req, res) => {               
  res.send('You sent data');        
});
app.use(express.json()); // parses incoming JSON body

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

app.listen(3000, () => {                   
  console.log('Server running at http://localhost:3000'); 
});

