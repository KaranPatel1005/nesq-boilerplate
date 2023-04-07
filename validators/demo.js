const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");

const demoSchema = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.number().integer().required(),
    status: Joi.string().valid("Active", "Inactive", "Draft").required(),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  demoSchema,
};
