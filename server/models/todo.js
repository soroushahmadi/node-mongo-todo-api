const mongoose = require('mongoose');



let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // will wipe out leading and trailing whitespaces
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    }
});



module.exports = {Todo};

