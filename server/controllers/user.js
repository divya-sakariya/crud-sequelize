const crudDao = require('../crud.dao')
const { handleResponse, handleError } = require('../lib/appConfig')
const { User } = require('../models');

module.exports = {
  createUser: async(req, res) => {
    try {
      const { body } = req
      const data = await crudDao.create(User, body)
      return handleResponse('User created', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  updateUser: async(req, res) => {
    try {
      console.log(req.body, req.params)
      const { body, params: { id } } = req
      const data = await crudDao.update(User, body, id)
      return handleResponse('User updated', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  deleteUser: async(req, res) => {
    try {
      const { params: { id } } = req
      const data = await crudDao.deleteById(User, id)
      return handleResponse('User deleted', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  getUserById: async(req, res) => {
    try {
      const { params: { id } } = req
      const data = await crudDao.findById(User, id)
      return handleResponse('User get', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  },
  getUser: async(_req, res, _next) => {
    try {
      const data = await crudDao.findAll(User)
      return handleResponse('User get', data, res)
    } catch (error) {
      return handleError(error, res)
    }
  }
}