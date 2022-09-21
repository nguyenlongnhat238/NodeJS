const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CategorySchema = new Schema({
    name: {
        type: 'String',
        require: true,
        index: { unique: true, dropDups: true }
    },
    description: {
        type: 'String',
        require: false
    },
    createdAt: {
        type: 'Date',
        default: Date.now()
    }
})

module.exports = mongoose.model("Category", CategorySchema, "category")