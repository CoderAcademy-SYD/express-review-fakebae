const ProductModel = require("./../database/models/product_model");

async function index(req, res) {
    const products = await ProductModel.find();
    res.render("products/index", { products });
}

function show(req, res) {
    res.send("show single product");
}

function make(req, res) {
    res.send("show form to make new product");
}

function create(req, res) {
    res.send("show form to make new product");
}

function update(req, res) {
    res.send("show form to make new product");
}

function destroy(req, res) {
    res.send("show form to make new product");
}

function edit(req, res) {
    res.send("show form to make new product");
}

module.exports = {
    index,
    show,
    make,
    create,
    update,
    destroy,
    edit
}