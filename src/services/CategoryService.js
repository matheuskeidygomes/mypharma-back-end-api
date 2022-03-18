const Category = require('../models/Category.js');
const { v4: uuidv4 } = require('uuid');

 const getAll = async () => {

    return await Category.find({});
}

const getOne = async (id) => {

    return await Category.find({ _id: id })
};

const Post = async (name, description) => {

    let newCategory = await Category.create({ UUID: uuidv4(), name, description });

    return { id: newCategory._id, UUID: newCategory.UUID, name, description };
}

const Edit = async (id, name, description) => {

    let category = await Category.findById(id);

    if (category) {

        category.name = name;
        category.description = description;

        await category.save();

        return category;

    } else {

        return { error: "Category not found!" };
    }
}

const Delete = async (id) => {

    await Category.findOneAndDelete({ _id: id });

    return "Deleted with success!";
}


module.exports = {
    getAll,
    getOne,
    Post,
    Edit,
    Delete
 }