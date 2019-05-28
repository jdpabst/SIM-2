const express = require('express');
const massive = require('massive');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public'));

console.log(config.connection);
massive(config.connection)
  .then(db => {
    app.set('db', db);
  }).catch(err => {
    console.log(err);
  })

  const feed = require('./controllers/feed')
  app.post('/api/items', feed.fetchFeed);
  app.post('/api/addItem', feed.addItem);

const port = 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})