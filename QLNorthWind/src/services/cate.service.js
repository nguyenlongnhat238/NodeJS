const CateService = {};
const Category = require("../models/cate.model")
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";



// CateService.getAllCate = async () => {
//     var cate = ''
//     await MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("Northwind");
//         dbo.collection("Category").findOne({}, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//             db.close();
//         });
//     });
//     return cate
// };

CateService.getAllCate = async () => {
    return await Category.find({})
}

CateService.getCateByID = async (id) => {
    try {
        console.log("service success")
        const cate = await Category.findById(id)
        return cate
    } catch (error) {
        console.log(error)
        return NaN
    }
}

CateService.createCategory = async (name, description) => {
    try {
        let cate = new Category({ name: name, description: description })
        return result = await cate.save().then(err => err);
    } catch (error) {
        console.log(error)
        return NaN
    }
}

CateService.updateCategory = async (id, name, description) => {
    try {
        console.log("service success")
        const cate = await Category.updateOne({ _id: id }, { $set: { name: name, description: description } })
        console.log(cate)
        return await Category.findById(id)
    } catch (error) {
        console.log(error)
        return NaN
    }
}

CateService.deleteCategory = async (id) => {
    try {
        console.log("service success")
        const cate = await Category.findById(id)
        if (!cate) throw 400
        const result = await Category.deleteOne({ _id: id })
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return NaN
    }
}
module.exports = CateService;