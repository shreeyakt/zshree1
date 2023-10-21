const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

app.use((req, res, next) => {
  // Set the content-type to JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Create a JSON object containing the request headers
  const headers = req.headers;
  
  // Send the headers in the response
  res.send(JSON.stringify(headers, null, 2));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
