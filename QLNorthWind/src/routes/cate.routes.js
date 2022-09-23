const express = require("express");
const multer = require('multer')
const upload = multer()
const router = express.Router();
const CateController = require("../controllers/cate.controller")
router.use(express.json())

router.get("/", (req, res) => CateController.getAllCate(req, res));

router.get("/:cateID", upload.array(), (req, res) => CateController.getCateByID(req, res));

router.post("/create-category", upload.array(), (req, res) => CateController.createCategory(req, res));

router.patch("/:cateID/update-category", upload.array(), (req, res) => CateController.updateCategory(req, res));

router.delete("/:cateID/delete-category", upload.array(), (req, res) => CateController.deleteCategory(req, res));

router.delete("/:cateID/delete", upload.array(), (req, res) => CateController.deleteCategoryCallBack(req, res));

module.exports = router;