const User = require('../model/user')

class AuthController {

    static register = async (req, res) =>{
        
        const user = new User(req.body)
        try {
            await user.save()
            res.status(200).send({
                status:200,
                message: 'Successfully Registered',
                user
            })
        }catch(error){
            res.status(400).send({
                status: 400,
                message: error.message
            })
        }
    }

    static login = async (req, res) => {
        console.log(req.body)
        try{
            const credential = { 
                                    'email': req.body.email?req.body.email:'', 
                                    'mobile_number': req.body.mobile_number?req.body.mobile_number:'', 
                                    'password': req.body.password 
                                };
                                console.log(credential)
            const user = await User.findByCredentials(credential)
                                console.log()
            const token = await user.generateAuthToken()
            console.log(token)
            res.status(200).send({
                status: 200,
                message: 'Successfully Login',
                data: {
                    userData:user, token 
                }
            })
        }catch(error){
            console.log(error)
            res.status(400).send({
                status: 400,
                message: error.message,
            })
        }
    }
    
    
}

module.exports = AuthController