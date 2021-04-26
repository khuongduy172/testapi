const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('users', userSchema);