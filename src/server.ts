import "reflect-metadata";
import express from 'express';

import "./database";

const app = express();

// Check if API is working!
app.get('/', (req, res) => {
  return res.json({ message: 'API Works!' });
})

app.listen(3333, () => console.log('Server listening on http://localhost:3333'));