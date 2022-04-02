const Product = require('../model/Product');

const getProducts = async (req, res, next) => {
    let products = await Product.find()

    if (!products) {
        return res.status(404).json({ message: "No Products" })
    }
    return res.status(200).json({ products })
}

const getProduct = async (req, res, next) => {
    const productID = req.params.id;
    let product = await Product.findById(productID)

    if (!product) {
        return res.status(404).json({ message: "No Product found" })
    }
    return res.status(200).json({ product })
}

const addProduct = async (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.imgURL,
        quantity: req.body.quantity,
        isFeatured: req.body.isFeatured,
    })

    product = await product.save();

    if (!product) {
        return res.status(500).json({ message: "Cannot add Product" })
        next();
    }
    res.status(201).json({ product })
}

const deleteProduct = async (req, res, next) => {
    const productID = req.params.id
    let products = await Product.findByIdAndDelete(productID)

    if (!products) {
        return res.status(404).json({ message: "No Product found with that ID" })
    }
    return res.status(200).json({ message: "Product Deleted" })
}


const updateProduct = async (req, res, next) => {
    const productID = req.params.id

    let product = await Product.findByIdAndUpdate(productID, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.imgURL,
        quantity: req.body.quantity,
        isFeatured: req.body.isFeatured,
    })

    product = await product.save();

    if (!product) {
        return res.status(500).json({ message: "Cannot Update Product" })
        next();
    }
    res.status(201).json({ message: "Product Updated" })
}


exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.addProduct = addProduct;
exports.deleteProduct = deleteProduct;
exports.updateProduct = updateProduct;