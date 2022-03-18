const UserService = require("../services/UserService.js");

const Register = async (req, res) => {

    if (req.body.name && req.body.email && req.body.password) {

        let { name, email, password } = req.body;

        let response = await UserService.Register(name, email, password);

        if(response.error) {
            
            res.json({ error: response.error })
        
        } else {

            res.json({ response });
        } 

    } else {

        res.json({ error: 'Please fill in the required fields!' });
    }

};

const Login = async (req, res) => {

    if (req.body.email && req.body.password) {

        let { email, password } = req.body;

        let response = await UserService.Login(email, password);

        if(response.error) {

            res.json({ error: response.error });

        } else {

            res.json({response})
        }

    } else {

        res.json({ error: 'Please fill in the required fields!' });
    }

};

module.exports = {
    Login,
    Register
}