const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        console.log("Unable to connect to MongoDB server");
    }
    console.log("connected to MongoDB server...");
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5d1cec4278a5a3c9ed0a50cf')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({name: 'geek'},{
        $set: {
            name: 'social geek'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }, (err) => {
        console.log("failed: ", err);
    });



    client.close();
});