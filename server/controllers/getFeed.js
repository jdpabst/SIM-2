const app = require('../index');

function fetchFeed(req, res){
    let db = req.app.get('db');
    // get all items from the db //
    db.run("select * from list").then((item) => {
        res.status(200).send(item);
    })
}

module.exports = {
    fetchFeed,
}