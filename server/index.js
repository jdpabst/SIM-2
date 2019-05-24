const express = require('express');
const massive = require('massive');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public'));

console.log(config.massiveConnection);
massive(config.massiveConnection)
  .then(db => {
    app.set('db', db);
  }).catch(err => {
    console.log(err);
  })
  

const port = 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})