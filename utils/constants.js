const ROUTE_CONSTANTS = {
  AUTH: "auth",
  DASHBOARD: "dashboard",
  USERS: "users",
  LOGOUT: "logout",
  DEMO: "demo",
};

const AUTH_CONSTANTS = {
  LOGIN: "login",
  REGISTER: "register",
  VERIFY_USER: "verify/:token",
  RESET_PASSWORD: "reset-password/:token",
  FORGOT_PASSWORD: "forgot-password",
  SET_PASSWORD: "set-password",
  DELETE_PROFILE: "delete-profile",
};

const CRUD_CONSTANTS = {
  ADD: "add",
  GET_ALL: "get-all",
  GET: "get",
  GET_STATICSTICS: "get-staticstics",
  GET_BY_ID: "get/:id",
  UPDATE: "update",
  UPDATE_BY_ID: "update/:id",
  DELTE_BY_ID: "delete/:id",
  UPLOAD_BY_ID: "upload/:id",
  MULTI_UPDATE: "multi-update",
  MULTI_DELETE: "multi-delete",
};

module.exports = { ROUTE_CONSTANTS, AUTH_CONSTANTS, CRUD_CONSTANTS };
