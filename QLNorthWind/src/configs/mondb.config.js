const mongoose = require('mongoose')
require("dotenv").config()

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/"
            , {
                useNewUrlParser: true,
                useUnifiedTopology: true,


            });
        console.log("connected database");
    }
    catch (error) {
        console.log("connect database failed")
    }
}



module.exports = { connect };

