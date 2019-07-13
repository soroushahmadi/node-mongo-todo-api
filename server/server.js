const env = process.env.NODE_ENV || 'development';
console.log('env ********** ', env);


if(env === 'development'){
    process.env.PORT = 3000;
    process.MONGODB_URI = "mongodb://localhost:27017/TodoApp";
}else if(env === 'test'){
    process.env.PORT = 3000;
    process.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest";
}



const express = require('express');
const bodyParser = require('body-parser'); // it lets us send JSON data to the server. (it parses body)

const _ = require('lodash');


const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');

const {ObjectID} = require('mongodb');



const app = express();

const port = process.env.PORT;


app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        })
    }, (e) => {
        res.status(400).send(e)
    })
});


app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
             return res.status(404).send();
        }

        res.send({todo})
        
    }).catch((e) => {
        res.status(404).send();
    })


});


app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.send({todo});

    }).catch((e) => {
        res.status(404).send();
    })

});


// PATCH is what you use when you want to update a resource (here to update a Todo)

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text','completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
     });


});




app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email','password']);
    let user = new User(body);


    user.save(user).then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user)
    }).catch((err) => {
        res.status(400).send(err);
    });
})





app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
})



app.post('/users/login', (req,res) => {
    let body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        })
    }).catch((e) => {
        res.status(400).send();
    })
})



app.listen(port, () => {
    console.log(`Started on port ${port}`);
});






module.exports = {app};

