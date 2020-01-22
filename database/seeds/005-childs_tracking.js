exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("childs_tracking").then(function() {
    // Inserts seed entries
    return knex("childs_tracking").insert([
      {
        id: 1,
        childName: "Sam",
        gender: "male",
        birth: "12-02-2015",
        weight: "7.5",
        height: "27",
        parentName: "michael",
        phoneNo: null,
        country: null,
        state: null,
        city: null,
        street: null,
        country_id: 1,
        community_id: 2,
        child_id: 1
      },
      {
        id: 2,
        childName: "sarah",
        gender: "female",
        birth: "08-14-2016",
        weight: "6",
        height: "22",
        parentName: "Ruwaidah",
        phoneNo: null,
        country: null,
        state: null,
        city: null,
        street: null,
        country_id: 3,
        community_id: 3,
        child_id: 2
      },
      {
        id: 3,
        childName: "rowValue1",
        gender: "male",
        birth: "06-25-2011",
        weight: "8.5",
        height: "25",
        parentName: "Ruwaidah",
        phoneNo: null,
        country: null,
        state: null,
        city: null,
        street: null,
        country_id: 1,
        community_id: 1,
        child_id: 3
      }
    ]);
  });
};
