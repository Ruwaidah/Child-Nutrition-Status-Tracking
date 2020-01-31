const db = require("../../database/db-config.js");

module.exports = {
  findUserByid,
  allUsers
};

function allUsers() {
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

    .join("countries", "country_id", "countries.id");
}

function findUserByid(id) {
  console.log(id);
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
