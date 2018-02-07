const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const edan = { name: 'Edan', age: 24, coolness: 1000000 };
  // res.json(edan);
  // res.send('Hey! It works!');
  res.render('hello');
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
  
});

module.exports = router;
