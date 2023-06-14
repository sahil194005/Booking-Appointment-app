const express = require("express");
const router = express.Router();
const { getAllProducts, addProduct, deleteProduct } = require("../controller/formSubmit");

router.route("/").get(getAllProducts).post(addProduct);
router.route('/:id').delete(deleteProduct)

module.exports = router;
