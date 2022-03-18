//import * as BrandService from '../services/BrandService.js';
const BrandService = require('../services/BrandService.js');

const GetAll = async (req, res) => {

    let list = await BrandService.getAll();

    res.json({ list });
};

const GetOne = async (req, res) => {

    let { id } = req.params;

    let item = await BrandService.getOne(id);

    res.json( item );
};

const Post = async (req, res) => {

    let { name } = req.body;

    if(name) {

        let newBrand = await BrandService.Post(name);

        res.json({ id: newBrand.id, name })

    } else {

        res.json({ error: 'Please fill in the required fields!' });
    }
};

const Edit = async (req, res) => {

    let { id } = req.params;
    let { name } = req.body;

    let response = await BrandService.Edit(id, name);

    if(response.error) {

        res.json({ error: response.error });

    } else {

        res.json({response});
    }
};

const Delete = async (req, res) => {

    let { id } = req.params;

    let response = await BrandService.Delete(id);

    res.json({response});
};


module.exports = {
    GetAll,
    GetOne,
    Post,
    Edit,
    Delete 
}