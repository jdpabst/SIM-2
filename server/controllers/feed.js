
function fetchFeed(req, res){
    let db = req.app.get('db');
    // get all items from the db //
    db.query("select * from list", function(err, req){
        console.log(err);
        console.log(req);
    }).then((item) => {
        console.log(item);
        res.status(200).send(item);
    })
}

function addItem(req, res){
    let db = req.app.get('db');
    // add item to db
    db.list.insert({title: req.title, item: req.item})
    .then((item) => {
        res.status(200).send(item);
    })
}

module.exports = {
    fetchFeed,
    addItem
}