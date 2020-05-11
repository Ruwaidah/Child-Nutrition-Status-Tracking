exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("childs_tracking").then(function () {
    // Inserts seed entries
    return knex("childs_tracking").insert([
      {
        id: 1,
        date: "12-02-2020",
        weight: "7.5",
        height: "27",
        child_id: 1
      },
      {
        id: 2,
        date: "08-14-2019",
        weight: "6",
        height: "22",
        child_id: 2
      },
      {
        id: 3,
        date: "06-25-2020",
        weight: "8.5",
        height: "25",
        child_id: 3
      }
    ]);
  });
};
