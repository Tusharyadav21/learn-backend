const express = require("express");
const Product = require("../model/Product")
const { getProducts, getProduct, deleteProduct, updateProduct, addProduct } = require("../controller/Product-controller")
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post('/', addProduct);

router.patch('/:id', updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;