const express = require('express');

const router = express.Router();

const addPage = require('../views/addPage');

// router.get('/', (req, res, next) => {
//   res.send('got to GET /wiki/');
//   next();
// });

router.get('/', (res, req) => {
  res.redirect('/wiki');
});
router.post('/', (req, res, next) => {
  res.send('got to GET /wiki/');
  next();
});

// router.get('/add', (req, res, next) => {
//   res.send('got to GET /wiki/add');
//   next();
// });

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
