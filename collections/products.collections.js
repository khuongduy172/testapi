const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    avaiable: Boolean
},
{
    timestamps: true,
});

module.exports = mongoose.model('products', productsSchema);