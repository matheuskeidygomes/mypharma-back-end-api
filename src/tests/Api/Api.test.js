const supertest = require('supertest');
const server = require('../../app.js');
const pkg = require('mongoose');
const { connect } = pkg;
const dotenv = require('dotenv');
const request = supertest(server);

dotenv.config();

let mongoClient;
let token;

beforeAll(async () => {
    mongoClient = await connect(process.env.MONGO_URL);
});

afterAll(async () => {
    await mongoClient.connection.close();
});

describe("User api routes", () => {

    const user = {
        name:"test user",
        email: `${Date.now()}@gmail.com`,
        password: "testpassword"
    }

    it("Should create a new user correctly", (done) => {

        request.post('/register').send(user).then(response => {

            let newUser = response.body.response;

            expect(newUser.email).toEqual(user.email);

            return done();
        });

    });

    it("Should login correctly", (done) => {

        const {email, password} = user;

        request.post('/login').send({email,password}).then(response => {

            let loggedUser = response.body.response;

            token = loggedUser.token;

            expect(loggedUser.status == true);
            
            return done();
        });

    });

})

describe("Brand api routes", () => {

    let brandName = "test brand";
    let newBrandName = "edited brand";
    let id;

    it("Should add a new brand correctly", (done) => {

        request.post('/brand').set('Authorization', 'Bearer ' + token).send({name: brandName}).then(response => {
            
            let newBrand = response.body;
            
            id = newBrand.id;

            expect(newBrand.name).toEqual(brandName);

            return done();
        });

    });

    it("Should get all brands correctly", (done) => {

        request.get('/brand').set('Authorization', 'Bearer ' + token).then(response => {
            
            let list = response.body;

            expect(list.length).not.toEqual(0);

            return done();
        });

    });


    it("Should get a specified brand correctly", (done) => {

        request.get(`/brand/${id}`).set('Authorization', 'Bearer ' + token).then(response => {
            
            let list = response.body;

            expect(list.length).not.toEqual(0);

            return done();
        });

    });

    it("Should edit a specified brand correctly", (done) => {

        request.put(`/brand/${id}`).set('Authorization', 'Bearer ' + token).send({name: newBrandName}).then(response => {
            
            let brand = response.body.response;

            expect(brand.name).toEqual(newBrandName);

            return done();
        });

    });

    it("Should delete a specified brand correctly", (done) => {

        request.delete(`/brand/${id}`).set('Authorization', 'Bearer ' + token).then(response => {
            
            let res = response.body.response;

            expect(res).toBe("Deleted with success!");

            return done();
        });

    });

});

describe("Category api routes", () => {

    let categoryName = "test category";
    let categoryDesc = "test category description";
    let newCategoryName = "edited category";
    let newcategoryDesc = "edited category description";
    let id;

    it("Should add a new category correctly", (done) => {

        request.post('/category').set('Authorization', 'Bearer ' + token).send({name: categoryName, description: categoryDesc}).then(response => {
            
            let newCategory = response.body;
            
            id = newCategory.id;

            expect(newCategory.name).toEqual(categoryName);

            return done();
        });

    });

    it("Should get all categories correctly", (done) => {

        request.get('/category').set('Authorization', 'Bearer ' + token).then(response => {
            
            let list = response.body;

            expect(list.length).not.toEqual(0);

            return done();
        });

    });


    it("Should get a specified category correctly", (done) => {

        request.get(`/category/${id}`).set('Authorization', 'Bearer ' + token).then(response => {
            
            let list = response.body;

            expect(list.length).not.toEqual(0);

            return done();
        });

    });

    it("Should edit a specified category correctly", (done) => {

        request.put(`/category/${id}`).set('Authorization', 'Bearer ' + token).send({name: newCategoryName, description: newcategoryDesc}).then(response => {
            
            let category = response.body.response;

            expect(category.name).toEqual(newCategoryName);

            return done();
        });

    });

    it("Should delete a specified category correctly", (done) => {

        request.delete(`/category/${id}`).set('Authorization', 'Bearer ' + token).then(response => {
            
            let res = response.body.response;

            expect(res).toBe("Deleted with success!");

            return done();
        });

    });

});

describe("Product api routes", () => {

    let product = {
        name: "test product",
        description: "test description",
        price: 12,
        inventory: 12,
        category: "test category",
        brand: "test brand"
    }
    let newProduct = {
        name: "edited product",
        description: "edited description",
        price: 10,
        inventory: 10,
        category: "edited category",
        brand: "edited brand"
    }
    let id;

    it("Should add a new product correctly", (done) => {

        request.post('/product').set('Authorization', 'Bearer ' + token).send(product).then(response => {
            
            let savedProduct = response.body;
            
            id = savedProduct.id;

            expect(savedProduct.name).toEqual(product.name);

            return done();
        });

    });

    it("Should get all products correctly", (done) => {

        request.get('/product').set('Authorization', 'Bearer ' + token).then(response => {
            
            let list = response.body;

            expect(list.length).not.toEqual(0);

            return done();
        });

    });


    it("Should get a specified product correctly", (done) => {

        request.get(`/product/${id}`).set('Authorization', 'Bearer ' + token).then(response => {

            let list = response.body;

            expect(list.length).not.toEqual(0);

            return done();
        });

    });

    it("Should edit a specified product correctly", (done) => {

        request.put(`/product/${id}`).set('Authorization', 'Bearer ' + token).send(newProduct).then(response => {
            
            let editedProduct = response.body.response;

            expect(editedProduct.name).toEqual(newProduct.name);

            return done();
        });

    });

    it("Should delete a specified category correctly", (done) => {

        request.delete(`/product/${id}`).set('Authorization', 'Bearer ' + token).then(response => {
            
            let res = response.body.response;

            expect(res).toBe("Deleted with success!");

            return done();
        });

    });

});