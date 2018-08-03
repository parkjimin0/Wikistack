const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const main = require('./views/main');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('/views'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(main());
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

console.log('run!');
