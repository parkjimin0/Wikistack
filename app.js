const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const main = require('./views/main');
const models = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('/views'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(main());
});

const table = async() => {
  await models.Page.sync();
  await models.User.sync();
}

models.db.sync({force: true});
table();



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

console.log('run!');
