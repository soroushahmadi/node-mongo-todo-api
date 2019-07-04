const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany --------------
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to Delete todos');
    // });


    // deleteOne -----------------
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log('Unable to delete todo');
    // });



    // findOneAndDelete ---------------
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to find and delete todo');
    // });


    // -----------------------------------------------------------------

    // db.collection('Users').deleteMany({name: 'soroush'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5d1cf08878a5a3c9ed0a514d')}).then((result) => {
        console.log(result);
    });

    client.close();
});