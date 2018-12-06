const express = require("express");
const router = express.Router();
const ProductController = require('./../controllers/product_controller');
const ReviewController = require("./../controllers/review_controller");

router.get("/products", ProductController.index);

router.post("/products", ProductController.create);

router.get("/products/new", ProductController.make);

router.get("/products/:id", ProductController.show);

router.put("/products/:id", ProductController.update);

router.patch("/products/:id", ProductController.update);

router.delete("/products/:id", ProductController.destroy);

router.get("/products/:id/edit", ProductController.edit);

router.post("/products/:id/reviews", ReviewController.create);

router.delete("/products/:id/reviews", ReviewController.destroy);

module.exports = router;