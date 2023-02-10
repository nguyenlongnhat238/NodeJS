const { get } = require("../routes/product.routes.js");
const CateService = require("../services/cate.service.js");
const CateController = {};


CateController.getAllCate = /**async*/ (req, res) => {
    CateService.getAllCate()
        .then(result =>
            res.status(200).json({
                message: "Tất cả sản phẩm",
                status: "success",
                data: result,
            }))
        .catch(error => res.status(500).json({
            status: "Failed",
            statusCode: 500,
            Message: error
        }))

    // try {
    //     const cate = await CateService.getAllCate();
    //     console.log(cate);
    //     res.status(200).json({
    //         message: "Tất cả sản phẩm",
    //         status: "success",
    //         cate: cate,
    //     });
    // } catch (error) {
    //     res.status(404).json({
    //         message: "error",
    //     });
    // }
}


CateController.getCateByID = /**async*/ (req, res) => {
    const cateID = req.params.cateID || ''
    if (cateID == undefined || cateID == '') {
        res.status(400).json({
            message: "params error",
            status: "fail",
            statusCoce: 400
        })
    }
    CateService.getCateByID(cateID)
        .then(result => res.status(200).json({
            message: "đã Tìm thấy dữ liệu",
            status: "success",
            data: result
        }))
        .catch(error => res.status(500).json({
            status: "Failed",
            statusCode: 500,
            Message: error
        }))
    // try {
    //     console.log("success controller")
    //     const cateID = await req.params.cateID || ''
    //     if (cateID == undefined || cateID == '') {
    //         throw 400
    //     }
    //     const cate = await CateService.getCateByID(cateID);
    //     console.log(cate)
    //     if (cate != cate) throw 500
    //     if (cate == null) throw 404
    //     res.status(200).json({
    //         message: "đã Tìm thấy dữ liệu",
    //         status: "success",
    //         cate: cate
    //     })
    // } catch (error) {
    //     console.log(error)
    //     let message
    //     if (error == 500) message = "Lỗi server"
    //     else if (error == 404) message = "Không tìm thấy"
    //     else message = "Lỗi nhập liệu"
    //     res.status(error).json({
    //         status: "Failed",
    //         statusCode: error,
    //         Message: message
    //     });
    // }

}


CateController.createCategory = (req, res) => {
    const name = req.body.name || ''
    const description = req.body.description || ''
    console.log(name, description)
    if (!name) {
        res.status(400).json({
            status: "Failed",
            statusCode: 400,
            Message: "Vui lòng nhập tên"
        });
    }
    CateService.createCategory(name, description)
        .then(result => res.status(201).json({
            message: "Tạo thành công",
            status: "success",
            cate: result
        }))
        .catch(error => res.status(500).json({
            status: "Failed",
            statusCode: 500,
            Message: error
        }))
    // try {
    //     const name = await req.body.name || ''
    //     const description = await req.body.description || ''
    //     console.log(name, description)
    //     if (name == undefined || name == '') {
    //         throw 400
    //     }
    //     const cate = await CateService.createCategory(name, description);
    //     console.log(cate)
    //     if (cate != cate) throw 500
    //     res.status(201).json({
    //         message: "Tạo thành công",
    //         status: "success",
    //         cate: cate
    //     })

    // } catch (error) {
    //     let message
    //     if (error == 500) message = "Lỗi server"
    //     else message = "Lỗi nhập liệu"
    //     console.log(error)
    //     res.status(error).json({
    //         status: "Failed",
    //         statusCode: error,
    //         Message: message

    //     });
    // };
}

CateController.updateCategory = /**async*/ (req, res) => {
    console.log("success controller")
    const cateID = req.params.cateID || ''
    const name = req.body.name || ''
    const description = req.body.description || ''
    console.log(name, description)
    if (name == undefined || name == '' || cateID == undefined || cateID == '') {
        res.status(400).json({
            message: "Params ERROR",
            status: "Fail",
            statusCode: 400
        })
    }
    CateService.updateCategory(cateID, name, description)
        .then(result => res.status(201).json({
            message: "Tạo thành công",
            status: "success",
            cate: result
        }))
        .catch(error => res.status(500).json({
            status: "Failed",
            statusCode: 500,
            Message: error

        }))
    // try {
    //     console.log("success controller")
    //     const cateID = await req.params.cateID || ''
    //     const name = await req.body.name || ''
    //     const description = await req.body.description || ''
    //     console.log(name, description)
    //     if (name == undefined || name == '' || cateID == undefined || cateID == '') {
    //         throw 400
    //     }
    //     const cate = await CateService.updateCategory(cateID, name, description);
    //     console.log(cate)
    //     if (cate != cate) throw 500
    //     res.status(200).json({
    //         message: "Thành công",
    //         status: "success",
    //         cate: cate
    //     })
    // } catch (error) {
    //     console.log(error)
    //     let message
    //     if (error == 500) message = "Lỗi server"
    //     else message = "Lỗi nhập liệu"
    //     res.status(error).json({
    //         status: "Failed",
    //         statusCode: error,
    //         Message: message
    //     });
    // }
}


CateController.deleteCategory = async (req, res) => {
    try {
        console.log("success controller")
        const cateID = await req.params.cateID || ''
        if (cateID == undefined || cateID == '') {
            throw 400
        }
        const cate = await CateService.deleteCategory(cateID);
        console.log(cate)
        if (cate != cate) throw 500
        res.status(200).json({
            message: "Thành công",
            status: "success",
            cate: cate
        })
    } catch (error) {
        console.log(error)
        let message
        if (error == 500) message = "Lỗi server"
        else message = "Lỗi nhập liệu"
        res.status(error).json({
            status: "Failed",
            statusCode: error,
            Message: message
        });
    }
}

CateController.deleteCategoryCallBack = (req, res) => {
    const cateID = req.params.cateID || ''
    if (cateID == undefined || cateID == '') {
        res.status(400).json({
            status: "Failed",
            statusCode: "error",
            Message: "message"
        });
    }
    CateService.deleteCategoryCB(cateID)
        .then(result =>
            res.status(200).json({
                message: "Thành công",
                status: "success",
                cate: result
            }))
        .catch(error => res.status(500).json({
            status: "Failed",
            statusCode: 500,
            Message: error
        }))
}
module.exports = CateController;