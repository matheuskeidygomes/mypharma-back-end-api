const pkg = require('mongoose');
const {Schema, model, connection } = pkg;

const schema = new Schema({
    UUID: { type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true }
});

const connect = (connection && connection.models["categories"]) ? connection.models["categories"] : model("categories", schema);

module.exports = connect;