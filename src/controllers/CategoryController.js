const CategoryService = require('../services/CategoryService.js');

const GetAll = async (req, res) => {

    let list = await CategoryService.getAll();

    res.json({ list });
};

const GetOne = async (req, res) => {

    let { id } = req.params;

    let item = await CategoryService.getOne(id);

    res.json( item );
};

const Post = async (req, res) => {

    let { name, description } = req.body;

    if(name && description) {

        let newCategory = await CategoryService.Post(name, description);

        res.json({ id: newCategory.id, name, description })

    } else {

        res.json({ error: 'Please fill in the required fields!' });
    }
};

const Edit = async (req, res) => {

    let { id } = req.params;
    let { name, description } = req.body;

    let response = await CategoryService.Edit(id, name, description);

    if(response.error) {

        res.json({ error: response.error });

    } else {

        res.json({ response });
    }
};

const Delete = async (req, res) => {

    let { id } = req.params;

    let response = await CategoryService.Delete(id);

    res.json({ response });

};


module.exports = {
    GetAll,
    GetOne,
    Post,
    Edit,
    Delete 
}