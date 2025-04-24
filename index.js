const express = require('express');
const serverless = require('serverless-http');

const app = express();

const { compute } = require('./compute');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/default/CIS_470_CI-CD', (req, res) => {
    res.sendFile(__dirname + '/public/calculator.html');
})

app.post('/default/CIS_470_CI-CD/compute', (req, res) => {
    const { num1, num2, operator } = req.body;
    const result = compute(num1,num2,operator);
    res.json({ result });
})

module.exports.handler = serverless(app);
