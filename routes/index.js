const express = require("express");
const router = express.Router();
const ProductController = require('./../controllers/product_controller');
const ProductModel = require('./../database/models/product_model');

router.use("/products/:id", async (req, res, next) => {    
    if (req.params.id) {
        let product = await ProductModel.findById(req.params.id);
        req.product = product;
    }

    next();
});

router.get("/products", ProductController.index);

router.post("/products", ProductController.create);

router.get("/products/new", ProductController.make);

router.get("/products/:id", ProductController.show);

router.put("/products/:id", ProductController.update);

router.patch("/products/:id", ProductController.update);

router.delete("/products/:id", ProductController.destroy);

router.get("/products/:id/edit", ProductController.edit);

module.exports = router;