const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const bookSchema = new Scheme({
    title: String,
    author: String,
    pages: Number,
    price: Number
});

module.exports = mongoose.model('Book', bookSchema);