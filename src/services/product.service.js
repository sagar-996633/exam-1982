const { Product } = require("../models");

/**
 * Get product details
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getProductById = async (productId) => {
  return Product.findOne({ _id: productId })
};

/**
 * Get product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Product>}
 */
const getProductList = async (filter, options) => {
  const skip = Number((options.page || 1) - 1) * Number(options.limit || 10);
  return Product.find(filter).limit(Number(options.limit)).skip(Number(skip));
};

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**
 * Update product details
 * @param {ObjectId} productId
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const updateProduct = async (productId, reqBody) => {
  return Product.findOneAndUpdate(
    { _id: productId },
    { $set: reqBody },
    { new: true }
  );
};

/**
 * Delete product
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const deleteProduct = async (productId) => {
  return Product.findOneAndDelete({ _id: productId });
};

module.exports = {
  getProductById,
  getProductList,
  createProduct,
  updateProduct,
  deleteProduct,
};