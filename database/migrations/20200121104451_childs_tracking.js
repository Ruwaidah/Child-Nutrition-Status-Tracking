exports.up = function (knex) {
  return knex.schema.createTable("childs_tracking", (tbl) => {
    tbl.increments();
    // tbl.string("name", 100).notNullable();
    // tbl.integer("gender", 100).notNullable();
    // tbl.date("birth", 100).notNullable();
    tbl.decimal("weight", 100).notNullable();
    tbl.decimal("height", 100).notNullable();
    tbl.date("date", 100).notNullable();
    tbl.string("description", 255);
    // tbl.string("parentName", 100).notNullable();
    // tbl.integer("phoneNo", 100);
    // tbl.string("country", 100);
    // tbl.string("state", 100);
    // tbl.string("city", 100);
    // tbl.string("street", 100);
    // tbl
    //   .integer("country_id")
    //   .unsigned()
    //   .notNullable()
    //   .references("id")
    //   .inTable("countries");
    // tbl
    //   .integer("community_id")
    //   // .unsigned()
    //   .notNullable()
    //   .references("id")
    //   .inTable("communities");
    tbl
      .integer("child_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("childs");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("childs_tracking");
};
