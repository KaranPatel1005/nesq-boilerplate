const { StatusCodes } = require("http-status-codes");

const catchAsync = require("../utils/catchAsync");
const demoSecvice = require("../services/demo");

const { setSuccessResponse } = require("../utils/sendResponse");

const demoController = catchAsync(async (req, res) => {
  const getCMS = await demoSecvice.getById(req.params.id);
  if (getCMS) {
    return setSuccessResponse(res, StatusCodes.OK, true, getCMS, "");
  }
});

module.exports = { demoController };
