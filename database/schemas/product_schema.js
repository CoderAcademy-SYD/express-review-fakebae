const { Schema } = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    categories: [{
        type: String
    }],
    price: {
        type: Number,
        min: 0,
        required: true,
        default: 0
    }
});

module.exports = ProductSchema;