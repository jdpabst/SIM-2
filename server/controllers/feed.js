
function fetchFeed(req, res){
    let db = req.app.get('db');
    // get all items from the db //
    db.query('select * from list', function(err, req){
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
        res.status(200).send(toDo);
    })
}

function deleteItem(req, res){
    let db= req.app.get('db');
    let { id } = req.params;
    db.list.destroy({id}, function(err, res){
        if(err){
            console.log(`error: ${err}`)            
        } else{     
            console.log(`response: ${res.data}`)
        }
    }).then((arr) => {
        res.status(200).send(arr);
    })
}

module.exports = {
    fetchFeed,
    addItem,
    deleteItem
}