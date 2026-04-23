// test.js - Pruebas automáticas con Jest

const { sumar } = require('./app');

test('sumar(2, 3) debe retornar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('sumar números negativos debe funcionar', () => {
  expect(sumar(-1, -4)).toBe(-5);
});