const db = require("../../database/db-config.js");
module.exports = { childsOfcomunity, childById, addingChild };

function childsOfcomunity(id) {
  return db("childs")
    .select(
      "childs.id",
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
      "childs.country_id",
      "community_id",
      "country_name",
      "community_name"
    )
    .where({ community_id: id })
    .join("countries", "childs.country_id", "countries.id")
    .join("communities", "community_id", "communities.id")

}


function childById(id) {
  return db("childs")
    .select(
      "childs.id",
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
      "childs.country_id",
      "community_id",
      "country_name",
      "community_name"
    )
    .where({ "childs.id": id })
    .join("countries", "childs.country_id", "countries.id")
    .join("communities", "community_id", "communities.id")
    .first()

}



async function addingChild(data, id) {
  let comid = await db("childs").insert(data, "id")
  return childsOfcomunity(comid)
}