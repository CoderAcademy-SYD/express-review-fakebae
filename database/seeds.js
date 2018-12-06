const faker = require("faker");
const ProductModel = require("./models/product_model");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/fakebae", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

let productPromises = [];

for(let i = 0; i <= 50; i++) {
    console.log(`Creating product ${i}`);
    productPromises.push(ProductModel.create({
        name: faker.commerce.productName(),
        categories: [faker.commerce.department(), faker.commerce.department()],
        price: 1
    }));
}

Promise.all(productPromises)
    .then(() => {
        console.log("All seeds successful");
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });