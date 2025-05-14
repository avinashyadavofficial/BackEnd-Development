import express from 'express';        
const app = express();                      
app.post('/', (req, res) => {               
  res.send('You sent data');        
});
app.use(express.json()); // parses incoming JSON body

app.post('/name', (req, res) => {
    const name = req.body.name;
    res.send(`The name is ${name}`);
});
app.post('/login', (req, res) => {
    const {username,password} = req.body;
    res.send(`The username is ${username} and password is ${password}`);
});
app.listen(3000, () => {                   
  console.log('Server running at http://localhost:3000'); 
});

