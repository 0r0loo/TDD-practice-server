const express = require('express');
require('dotenv').config();
// dotenv
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGO_DB_PW}@cluster0.73omx.mongodb.net/cluster0?retryWrites=true&w=majority`
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch((error) => console.log(error));

// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/api/products', routes.product);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

module.exports = app;
