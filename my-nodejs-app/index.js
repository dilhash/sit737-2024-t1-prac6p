const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<html><head><title>My Express App</title></head><body><h1>SIT737 - Cloud Native Application Development</h1><h2>6.1P Pass Task - Cloud Native Application Development Creating a Kubernetes Cluster for a containerized application</h2></body></html>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
