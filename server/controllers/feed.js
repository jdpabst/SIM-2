
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
    let { title, item } = req.body;

    return db.list.insert({title, item})
    .then((toDo) => {
        console.log(toDo);
        res.status(200).send(toDo);
    })
}

module.exports = {
    fetchFeed,
    addItem
}