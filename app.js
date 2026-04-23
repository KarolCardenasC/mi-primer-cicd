// app.js - API lista para producción

const express = require('express');
const app = express();

function sumar(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send('Hola Arquitectos — pipeline CI/CD funcionando al 100%');
});

app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.json({ resultado });
});

// ✅ CLAVE: solo arranca el servidor si este archivo se ejecuta directamente
// Cuando Jest hace require('./app'), esta condición es false → no hay servidor
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = { app, sumar };