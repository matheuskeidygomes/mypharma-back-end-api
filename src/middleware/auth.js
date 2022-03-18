const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const Auth = {

    private: async (req, res, next) => {

        let success = false;

        if(req.headers.authorization) {

            const [ authType, token ] = req.headers.authorization.split(' ');

            if(authType === 'Bearer') {

                JWT.verify( token, process.env.JWT_SECRET_KEY );

                success = true;
            }
        }

        if(success) {

            next();

        } else {

            res.status(403);
            res.json({ error: 'Não autorizado!' });
        }

    }

}

module.exports = { Auth };