const crudDao = require('../crud.dao')
const { handleResponse, handleError } = require('../lib/appConfig')
const { Product } = require('../models');

module.exports = {
  createProduct: async(req, res) => {
    try {
      const { body } = req
      const data = await crudDao.create(Product, body)
      return handleResponse('Product created', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  updateProduct: async(req, res) => {
    try {
      console.log(req.body, req.params)
      const { body, params: { id } } = req
      const data = await crudDao.update(Product, body, id)
      return handleResponse('Product updated', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  deleteProduct: async(req, res) => {
    try {
      const { params: { id } } = req
      const data = await crudDao.deleteById(Product, id)
      return handleResponse('Product deleted', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  getProductById: async(req, res) => {
    try {
      const { params: { id } } = req
      const data = await crudDao.findById(Product, id)
      return handleResponse('Product get', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  getProduct: async(_req, res, _next) => {
    try {
      const data = await crudDao.findAll(Product)
      return handleResponse('Product get', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  }
}