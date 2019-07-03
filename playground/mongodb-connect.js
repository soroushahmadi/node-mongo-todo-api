// const MongoClient = require('mongodb').MongoClient; // mongoClient lets you connect to database and issue commands
const {MongoClient, ObjectID} = require('mongodb'); // ES6 object destructuring


// let user = {name: 'soroush ahmadi', age:22}
// let {name} = user;
// console.log(name); // ES6 object destructuring: making variables from object's properties

// let obj = new ObjectID(); // creating new instances of ObjectID
// console.log(obj);




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2)); // the ops attribute is gonna store all of the docs that were inserted
    // });

    
    // db.collection('Users').insertOne({
    //     name: "soroush",
    //     age: 22,
    //     location: "Iran marivan kurdistan province"
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });



    // db.collection('Users').insertOne({
    //     name: "soroush",
    //     age: 22,
    //     location: "Iran marivan kurdistan province"
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });




    client.close();
});