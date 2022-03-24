const pkg = require('mongoose');
const { connect } = pkg;
const CategoryService = require('../../services/CategoryService.js');
const dotenv = require('dotenv');

dotenv.config();

describe("Category tests", () => {

    let mongoClient;
    let id;
    let categoryName = "test category";
    let categoryDesc = "test description";
    let newCategoryName = "edited category";
    let newCategoryDesc = "edited description";
  
    beforeAll(async () => {
        mongoClient = await connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await mongoClient.connection.close();
    });
  

    it("Should add category correctly", async () => {

        let category = await CategoryService.Post(categoryName, categoryDesc);

        id = category.id;

        expect(category.name).toEqual(categoryName);

    });

    it("Should get all categories correctly", async () => {

       let list = await CategoryService.getAll();

       expect(list.length).not.toBe(0);
       
    });

    it("Should get a specified category correctly", async () => {

      let category = await CategoryService.getOne(id);

      expect(category[0].name).toEqual(categoryName);

    });

    it("Should edit a specified category correctly", async () => {

      let category = await CategoryService.Edit(id, newCategoryName, newCategoryDesc);

      expect(category.name).toEqual(newCategoryName);

    });

    it("Should delete a specified category correctly", async () => {

      let res = await CategoryService.Delete(id);

      expect(res).toEqual("Deleted with success!");

    });

 

});