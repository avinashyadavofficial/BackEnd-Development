// What is Routing in Express?
// Definition:
// Routing is how you tell Express:

// “When someone visits this path, run this function.”

// It connects the URL + HTTP method (GET/POST/etc.) to some handler logic.

// Basic Route Syntax

// app.METHOD(PATH, HANDLER);
// Parts:
// app → Your Express app

// METHOD → HTTP verb: get, post, put, delete

// PATH → Route path like '/', '/login', '/user/:id'

// HANDLER → Function (req, res) => { ... }

// Example: All 4 Main Routes
// const express = require('express');
// const app = express();
// app.use(express.json()); // to handle JSON POST data

// // GET – Read
// app.get('/hello', (req, res) => {
//   res.send('GET: Hello World!');
// });

// // POST – Create
// app.post('/hello', (req, res) => {
//   res.send('POST: You sent data!');
// });

// // PUT – Update
// app.put('/hello', (req, res) => {
//   res.send('PUT: You updated something!');
// });

// // DELETE – Remove
// app.delete('/hello', (req, res) => {
//   res.send('DELETE: You deleted something!');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
// Key Concepts
// 1. Route Parameters

// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID is: ${userId}`);
// });
// Visit /user/42 → You'll get: User ID is: 42

// :id is a dynamic part of the URL you can capture using req.params

// 2. Query Parameters

// app.get('/search', (req, res) => {
//   const { q } = req.query;
//   res.send(`Search query: ${q}`);
// });
// Visit /search?q=nodejs → You'll get: Search query: nodejs

// Use req.query to access values from the URL's ?key=value format

// 3. POST Request Body

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   res.send(`Received login for ${username}`);
// });
//  Requires:
// app.use(express.json()); // parses incoming JSON body
// Use Postman to test POST body data.