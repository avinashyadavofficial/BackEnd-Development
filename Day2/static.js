const express = require('express');
const app = express();

// Serve everything inside /public folder
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
