const express = require("express");
const { demoController } = require("../../controllers/demo.controllers");
const { demoSchema } = require("../../validators/demo");

const { CRUD_CONSTANTS } = require("../../utils/constants");

const router = express.Router();

// auth
router.route(`/${CRUD_CONSTANTS.GET_BY_ID}`).get(demoSchema, demoController);

module.exports = router;
