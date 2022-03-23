const pkg = require('mongoose');
const { connect } = pkg;
const BrandService = require('../services/BrandService.js');
const dotenv = require('dotenv');

dotenv.config();

describe("Brand tests", () => {

    let mongoClient;
    let id;
    let brandName = "test brand";
    let newBrandName = "edited brand";
  
    beforeAll(async () => {
        mongoClient = await connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await mongoClient.connection.close();
    });
  

    it("Should add brand correctly", async () => {

        let brand = await BrandService.Post(brandName);

        id = await brand.id;

        expect(brand.name).toEqual(brandName);
        

    });

    it("Should get all brands correctly", async () => {

       let list = await BrandService.getAll();

       expect(list.length).not.toBe(0);

    });

    it("Should get a specified brand correctly", async () => {

      let brand = await BrandService.getOne(id);

      expect(brand[0].name).toEqual(brandName);

    });

    it("Should edit a specified brand correctly", async () => {

      let brand = await BrandService.Edit(id, newBrandName);

      expect(brand.name).toEqual(newBrandName);

    });

    it("Should delete a specified brand correctly", async () => {

      let res = await BrandService.Delete(id);

      expect(res).toEqual("Deleted with success!");

    });

 

});