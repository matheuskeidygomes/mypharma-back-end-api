const ProductService = require("../services/ProductService.js");

const GetAll = async (req, res) => {

    let list = await ProductService.getAll();

    res.json({ list });
};

const GetOne = async (req, res) => {

    let { id } = req.params;

    let item = await ProductService.getOne(id);

    res.json( item );
};

const Post = async (req, res) => {

    let { name, description, price, inventory, category, brand } = req.body;

    if(name && description && price && inventory && category && brand) {

        let newProduct = await ProductService.Post(name, description, price, inventory, category, brand);

        res.json({ id: newProduct.id, name, description, price, inventory, category, brand })

    } else {

        res.json({ error: 'Please fill in the required fields!'  });

    }

};

const Edit = async (req, res) => {

    let { id } = req.params;
    let { name, description, price, inventory, category, brand } = req.body;

    let response = await ProductService.Edit(id, name, description, price, inventory, category, brand);

    if(response.error) {

        res.json({ error: response.error });

    } else {

        res.json({response});
    }
};

const Delete = async (req, res) => {

    let { id } = req.params;

    let response = await ProductService.Delete(id);

    res.json({response});
};


module.exports = {
    GetAll,
    GetOne,
    Post,
    Edit,
    Delete 
}