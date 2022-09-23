const CateService = {};
const Category = require("../models/cate.model")


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

CateService.getCateByID = /**async*/ (id) => {
    return Category.findById(id).then(result => result).catch(err => console.log(err))
    // try {
    //     console.log("service success")
    //     const cate = await Category.findById(id)
    //     return cate
    // } catch (error) {
    //     console.log(error)
    //     return NaN
    // }
}

CateService.createCategory = (name, description) => {
    const cate = new Category({ name: name, description: description })
    return cate.save().then(result => result).catch(err => console.log(err))
    // try {
    //     let cate = new Category({ name: name, description: description })
    //     return result = await cate.save().then(err => err);
    // } catch (error) {
    //     console.log(error)
    //     return NaN
    // }
}

CateService.updateCategory = async (id, name, description) => {

    console.log("service success")
    return Category.findById(id)
        .then(result => Category.updateOne({ _id: id }, {
            $set: {
                name: name,
                description: description
            }
        }))
        .then(result => Category.findById(id))
        .catch(error => {
            console.log(lỗi)
            return error
        })
    // try {
    //     console.log("service success")
    //     const cate = await Category.updateOne({ _id: id }, { $set: { name: name, description: description } })
    //     console.log(cate)
    //     return await Category.findById(id)
    // } catch (error) {
    //     console.log(error)
    //     return NaN
    // }
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

CateService.deleteCategoryCB = (id) => {
    console.log("succcessservice")
    return Category.findById(id)
        .then(result => Category.deleteOne({ _id: id }))
        .then(result => result)
        .catch(err => "Lỗi")
};



module.exports = CateService;


