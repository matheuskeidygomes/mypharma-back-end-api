const pkg = require('mongoose');
const {Schema, model, connection } = pkg;

const schema = new Schema({
    UUID: { type: String, required: true},
    name: { type: String, required: true },
});

const connect = (connection && connection.models["brands"]) ? connection.models["brands"] : model("brands", schema);

module.exports = connect;