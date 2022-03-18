const pkg = require('mongoose');
const {Schema, model, connection } = pkg;

const schema = new Schema({
    UUID: { type: String, required: true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const connect = (connection && connection.models["users"]) ? connection.models["users"] : model("users", schema);

module.exports = connect;