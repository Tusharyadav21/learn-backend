const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    imgURL: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    isFeatured: {
        type: Boolean,
    }
})

module.exports = mongoose.model("Product", productSchema);