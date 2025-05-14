// imports the Express module into your code.
//It gives you access to everything Express can do: routing, middleware, etc.
const express = require('express');          
// This creates an Express application — your main web server instance.
// You use app to define routes, middleware, and settings.
const app = express();  
const PORT=3000;    

// This defines a GET route at the root path /.
// Like saying: “If a browser goes to /, run this function.”


// app.get('/greet', (req, res) => {     
//     // Sends a response to the client. Can be:
//     //    Plain text
//     //    JSON (res.json({ msg: 'hi' }))
//     //    HTML (res.send('<h1>Hi</h1>'))     
//     res.status(200);      
//   res.send('Hello from Express!');   

// });

app.use((req, res) => {
  res.send('<h1>Hello, World!</h1>');
});
//Starts the server and makes it listen on port 3000
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);