const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose'); 
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// let id = '5d1f9a3b5014a0368c292e11';

// if(!ObjectID.isValid(id)){
//     console.log("id not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if(!todos){
//         return console.log('id not found');
//     }
//     console.log('Todos: ', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log("todo: ", todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log("todo By Id: ", todo);
// }).catch((e) => console.log(e));


// ---------------****** CHALLENGE ********----------------------------

let id = '5d1df75cb6f62c33e42ea7ee';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(user)
}).catch((e) => console.log(e));