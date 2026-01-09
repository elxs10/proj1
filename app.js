const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// The "Health" endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Node.js server is running perfectly!',
    timestamp: new Date().toISOString()
  });
});

// The Home Page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my first DevOps Project!</h1><p>Automation set</p>');
});

app.listen(PORT, () => {
  console.log(`✅ Server is barking on http://localhost:${PORT}`);
});