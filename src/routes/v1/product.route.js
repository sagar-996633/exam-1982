const express = require("express");
const validate = require("../../middlewares/validate");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create",
  validate(productValidation.createProduct),
  productController.createProduct
);

/** Get product */
router.get(
  "/details/:productId",
  validate(productValidation.getDetails),
  productController.getDetails
);

/** Get list */
router.get(
  "/list",
  validate(productValidation.getList),
  productController.getProductList
);

/** Update product */
router.put(
  "/update/:productId",
  validate(productValidation.updateProduct),
  productController.updateProduct
);

/** Delete product */
router.delete(
  "/delete/:productId",
  validate(productValidation.getDetails),
  productController.deleteProduct
);

module.exports = router;