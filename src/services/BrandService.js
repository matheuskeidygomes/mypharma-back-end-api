const Brand = require('../models/Brand.js');
const { v4: uuidv4 } = require('uuid');

const getAll = async () => {

    return await Brand.find({});
}

const getOne = async (id) => {

    return await Brand.find({ _id: id })
};

const Post = async (name) => {

    let newBrand = await Brand.create({ UUID: uuidv4(), name });

    return { id: newBrand._id, UUID: newBrand.UUID, name };
}

const Edit = async (id, name) => {

    let brand = await Brand.findById(id);

    if (brand) {

        brand.name = name;

        await brand.save();

        return brand;   

    } else {

        return { error: "Brand not found!" };
    }
}

const Delete = async (id) => {

    await Brand.findOneAndDelete({ _id: id });

    return "Deleted with success!";
}


module.exports = {
    getAll,
    getOne,
    Post,
    Edit,
    Delete
 }