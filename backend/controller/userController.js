
require('../router/user')
require('../model/user')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports.register = (req, res, next) => {
    var user = new User();
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    user.age = req.body.age
    user.save((error, doc) => {
        if(!error){
            res.send(doc)
        }
        console.error(error.message)
    })
}