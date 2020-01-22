const db = require("../../database/db-config.js");

function getCountryById(id) {
  return db("communities")
    .select(
      "communities.id as community.id",
      "community_name",
      "country_name",
      "country_id"
    )
    .where({ country_id: id })
    .join("countries", "country_id", "countries.id");
}

module.exports = {
  getCountryById
};
