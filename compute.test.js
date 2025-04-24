const request = require('supertest');
const { app } = require('./index'); // Ensure correct import from index.js
const { compute } = require('./compute');

describe('compute: Tests each operation of the calculator', () => {
    test('should return Passed for addition', () => {
      expect(compute(2, 4, '+')).toBe(6);
    });

    test('should return Passed for subtraction', () => {
      expect(compute(7, 2, '-')).toBe(5);
    });

    test('should return Passed for division', () => {
      expect(compute(4, 2, '/')).toBe(2);
    });

    test('should return Cannot Divide by 0 for division', () => {
      expect(compute(4, 0, '/')).toBe('Cannot divide by 0');
    });

    test('should return Passed for multiplication', () => {
      expect(compute(4, 2, '*')).toBe(8);
    });

    test('GET /default/CIS_470_CI-CD returns calculator HTML page', async () => {
      const res = await request(app).get('/default/CIS_470_CI-CD');
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain('<html');
    });

    test('POST /default/CIS_470_CI-CD/compute performs calculation', async () => {
      const res = await request(app)
        .post('/default/CIS_470_CI-CD/compute')
        .send({ num1: 10, num2: 5, operator: '+' });
    
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('result', 15);
    });
})
  