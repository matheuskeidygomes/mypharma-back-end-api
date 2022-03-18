const pkg = require('mongoose');
const dotenv = require('dotenv');

const { connect } = pkg;

dotenv.config()

const mongoConnect = async () => {

    await connect(process.env.MONGO_URL);
} 

module.exports = { mongoConnect };