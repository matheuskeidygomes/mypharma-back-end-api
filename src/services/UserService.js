const JWT = require("jsonwebtoken");
const User = require('../models/User.js');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

const Register = async (name, email, password) => {

    let hasUser = await User.find({ email });

    if (!hasUser[0]) {

        let hash = bcrypt.hashSync(password,10);

        let newUser = await User.create({ UUID: uuidv4(), name, email, password: hash });

        const token = JWT.sign(
            { id: newUser._id, email: newUser.email },
            process.env.JWT_SECRET_KEY
        );

        return { id: newUser._id, UUID: newUser.UUID , name, email, token };

    } else {

        return { error: 'E-mail already exist!' };

    }

}


const Login = async (email, password) => {

    let user = await User.find({ email });
    
    if (user[0]) {

        let validPassword = bcrypt.compareSync(password, user[0].password);

        if(validPassword) {

            const token = JWT.sign(
                { id: user[0].id, email: user[0].email },
                process.env.JWT_SECRET_KEY
            );
    
            return { status: true, name: user[0].name, email: user[0].email, token };    

        } else {

            return { status: false, error: 'E-mail and/or password incorrects! ' }; 
        }

    } else {

        return { status: false, error: 'E-mail and/or password incorrects! ' };
    }

}

module.exports = {
    Register,
    Login
 }