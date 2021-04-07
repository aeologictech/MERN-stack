const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/test123'

mongoose.connect(connectionURL,{ useUnifiedTopology: true, useCreateIndex: true,useNewUrlParser: true })

