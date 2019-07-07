const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose'); 
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


// Todo.remove({}) will delete every single record on the database

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5d1f9a175014a0368c292e10').then((todo) => {
    console.log(todo)
});

// Todo.findOneAndRemove({_id: '5d1f9a175014a0368c292e10'}).then()