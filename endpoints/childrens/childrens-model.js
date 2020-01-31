const db = require("../../database/db-config.js");
module.exports = { childsOfcomunity };

function childsOfcomunity(id) {
  return db("childs")
    .select(
      "childName",
      "gender",
      "birth",
      "screenDate",
      "weight",
      "height",
      "parentName",
      "phoneNo",
      "country",
      "state",
      "city",
      "street",
      "country_id",
      "community_id",
      "country_name"
    )
    .join("countries", "country_id", "countries.id")
    .where({ community_id: id });
}
