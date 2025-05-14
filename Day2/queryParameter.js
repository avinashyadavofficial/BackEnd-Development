const express = require('express');         
const app = express();                      
app.post('/', (req, res) => {               
  res.send('You sent data');        
});
app.use(express.json()); // parses incoming JSON body

app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`Search query: ${q}`);
});
/// visit search?q=nodejs

app.listen(3000, () => {                   
  console.log('Server running at http://localhost:3000'); 
});

