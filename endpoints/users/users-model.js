const db = require("../../database/db-config.js");

module.exports = {
  findUserByid
};

function findUserByid(id) {
  return db("users")
    .select(
      "users.id",
      "firstname",
      "lastname",
      "username",
      "email",
      "isAdmin",
      "country_id",
      "country_name"
    )
    .where({ "users.id": id })

    .join("countries", "country_id", "countries.id")
    .first();
}
