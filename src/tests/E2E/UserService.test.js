const pkg = require('mongoose');
const { connect } = pkg;
const {Register, Login} = require('../../services/UserService.js');
const dotenv = require('dotenv');

dotenv.config();

describe("User Tests", () => {

    let mongoClient;
    let name = "test";
    let email = `${Date.now()}@gmail.com`;
    let password = "1234";
  
    beforeAll(async () => {
      mongoClient = await connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
      await mongoClient.connection.close();
    });
  

    it("Add User", async () => {

        let saveuser = await Register(name, email, password);

        expect(saveuser.name).toEqual(name);

    });

    it("Login User", async () => {

        let loginuser = await Login(email, password);

        expect(loginuser.status).toEqual(true);

    });

});