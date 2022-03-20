const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require("./routes/routes.js");
const { mongoConnect } = require("./instances/mongo.js");

dotenv.config();

mongoConnect();

const server = express();

server.use(cors()); 

server.use(express.static('public')); 

server.use(express.json());

server.use(routes); 

server.use((req, res) => { res.status(404).send('Página não encontrada'); });

server.use((err, req, res, next) => {

   res.status(400);

   if(err) {

      res.json({ error: err.message });

   } else {

      res.json({ error: 'Error! Please, try again.' });
   }
   
});

module.exports = server;

