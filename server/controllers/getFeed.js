
function fetchFeed(req, res){
    let db = req.app.get('db');
    console.log(db)
    // get all items from the db //
    db.query("select * from list", function(err, req){
        console.log(err);
        console.log(req);
    }).then((item) => {
        console.log(item);
        res.status(200).send(item);
    })
}

module.exports = {
    fetchFeed,
}