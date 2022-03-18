const pkg = require('mongoose');
const {Schema, model, connection } = pkg;

const schema = new Schema({
    UUID: { type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inventory:{ type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true }
});

const connect = (connection && connection.models["products"]) ? connection.models["products"] : model("products", schema);

module.exports = connect;