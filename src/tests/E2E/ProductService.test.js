const pkg = require('mongoose');
const { connect } = pkg;
const ProductService = require('../../services/ProductService.js');
const dotenv = require('dotenv');

dotenv.config();

describe("Category tests", () => {

    let mongoClient;
    let id;
    let product = {
        name: "test product",
        description: "test description",
        price: 12,
        inventory: 10,
        brand: "test brand",
        category: "test category"
    }
    let newProduct = {
        name: "edited product",
        description: "edited description",
        price: 15,
        inventory: 20,
        brand: "edited brand",
        category: "edited category"
    }
  
    beforeAll(async () => {
        mongoClient = await connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await mongoClient.connection.close();
    });
  

    it("Should add product correctly", async () => {

        const {name, description, price, inventory, category, brand} = product;

        let savedProduct = await ProductService.Post(name,description, price, inventory, category, brand);

        id = savedProduct.id;

        expect(savedProduct.name).toEqual(name);

    });

    it("Should get all products correctly", async () => {

       let list = await ProductService.getAll();

       expect(list.length).not.toBe(0);

    });

    it("Should get a specified product correctly", async () => {

        let oneProduct = await ProductService.getOne(id);

        expect(oneProduct[0].name).toEqual(product.name);

    });

    it("Should edit a specified product correctly", async () => {

        const {name, description, price, inventory, category, brand} = newProduct;

        let editedProduct = await ProductService.Edit(id, name, description, price, inventory, category, brand);

        expect(editedProduct.name).toEqual(name);

    });

    it("Should delete a specified product correctly", async () => {

        let res = await ProductService.Delete(id);

        expect(res).toEqual("Deleted with success!");

    });

 

});