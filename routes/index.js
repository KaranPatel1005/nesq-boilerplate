const config = require("../config/config");

const { ROUTE_CONSTANTS } = require("../utils/constants");

const apiRoute = `${config.defaultRoute.apiBaseRoot}/${config.defaultRoute.apiVersion}`;

module.exports = function (app) {
  app.get(`/${apiRoute}/${ROUTE_CONSTANTS.DEMO}`, function (req, res) {
    return res.render("index", { title: config.appName });
  });
};
