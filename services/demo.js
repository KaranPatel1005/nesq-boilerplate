const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");

const CustomError = require("../utils/customError");
const OPERATIONS = require("../repository/operations");

const db = require("../models");

const getById = async (id) => {
  // business login for API
};

module.exports = { getById };
