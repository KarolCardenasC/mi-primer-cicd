// app.js - Una API web minimalista con Express

const express = require('express');
const app = express();

function sumar(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send('Hola Mundo desde mi primer pipeline CI/CD');
});

module.exports = { app, sumar };