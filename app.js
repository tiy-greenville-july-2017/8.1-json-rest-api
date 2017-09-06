const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const sequelize = require('sequelize');

app.use(bodyParser.json());

router(app);

// const data = [
//   'dan',
//   'joel',
//   'kepler'
// ];
//
// app.get('/', (req, res) => {
//   res.json(data);
// });
//
// app.post('/', (req, res) => {
//   var newItem = req.body.message;
//   data.push(newItem);
//   res.json(data);
// });

if(require.main === 'module'){
  app.listen(3000);
}

module.exports = app;
