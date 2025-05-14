const express = require('express');         
const app = express();                      
app.get('/test', (req, res) => {               
  res.send('First');        
});
app.get('/test', (req, res) => {               
  res.send('Second');        
});
app.listen(3000, () => {                   
  console.log('Server running at http://localhost:3000'); 
});
//so here Only 'First' will respond. 'Second' is ignored.
//Note:
//It will not crash, but only the first matching route will execute, unless you explicitly use next() to continue
//  to the next one (which we do in middleware, not regular routes).
