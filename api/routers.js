const loginRouter = require("../endpoints/login/login-Route.js");
const registerRouter = require("../endpoints/register/register-Route.js");
const restrictedMW = require("./restricted-middleware.js");
const authen = require("./middle-Wares.js");
const countriesRoute = require("../endpoints/countries/countries-Route.js");
const communitiesRoute = require("../endpoints/communities/communities-Route.js");

module.exports = server => {
  server.use("/api/auth/login", authen.loginFieldsMissing, loginRouter);
  server.use(
    "/api/auth/register",
    authen.registerFieldsMissing,
    registerRouter
  );
  server.use("/api/auth/user", countriesRoute);
  server.use("/api/auth/user", communitiesRoute);
};
