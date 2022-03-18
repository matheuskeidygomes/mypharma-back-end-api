const Product = require('../models/Product.js');
const { v4: uuidv4 } = require('uuid');

const getAll = async () => {

    return await Product.find({});
}

const getOne = async (id) => {

    return await Product.find({ _id: id })
};

const Post = async (name, description, price, inventory, category, brand) => {

    let newProduct = await Product.create({ UUID: uuidv4(), name, description, price, inventory, category, brand });

    return { id: newProduct._id, UUID: newProduct.UUID, name, description, price, inventory, category, brand };
}

const Edit = async (id, name, description, price, inventory, category, brand) => {

    let product = await Product.findById(id);

    if (product) {

        product.name = name;
        product.description = description;
        product.price = price;
        product.inventory = inventory;
        product.category = category;
        product.brand = brand;

        await product.save();

        return product;

    } else {

        return { error: "Product not found!" };
    }
}

const Delete = async (id) => {

    await Product.findOneAndDelete({ _id: id });

    return "Deleted with success!";
}


module.exports = {
    getAll,
    getOne,
    Post,
    Edit,
    Delete
 }