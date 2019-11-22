const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());

let users = [
  {
    id: 1,
    username: "Lambda School",
    password: "i<3Lambd4",
    firstname: "",
    lastname: "",
    email: "",
    country: "usa",
    usertype: true
  },
  {
    id: 2,
    username: "ruwaidah",
    password: "ruwaidah",
    firstname: "",
    lastname: "",
    email: "",
    country: "usa",
    usertype: true
  }
];

let nextUserId = 3;

let records = [
  {
    country: "usa",
    communities: [
      {
        communite: "Austin",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      },
      {
        communite: "Houston",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      }
    ]
  },
  {
    country: "Canada",
    communities: [
      {
        communite: "NewYork",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      },
      {
        communite: "Washigton",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      }
    ]
  },
  {
    country: "France",
    communities: [
      {
        communite: "Paris",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      }
    ]
  }
];

let nextId = 5;

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const loginuser = users.find(
    user => user.username == username && user.password == password
  );
  if (loginuser) {
    req.loggedIn = true;
    setTimeout(() => {
      res.status(200).json({
        payload: token
      });
    }, 1000);
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/api/:username", authenticator, (req, res) => {
  const friend = users.find(f => f.username == req.params.username);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: "Friend not found" });
  }
});

// All users
app.get("/api/:id", authenticator, (req, res) => {
  const country = records.find(record => record.country == req.params.country);
  if (country) {
    res.status(200).json(users);
  } else {
    res.status(404).send(users);
  }
});

// SignUp
app.post("/api/signup", (req, res) => {
  if (req.body.username !== undefined && req.body.password !== undefined) {
    const newuser = req.body;
    newuser.id = nextUserId;
    users.push(newuser);
  }
  nextUserId = nextUserId + 1;
  res.status(201).json(users);
});

// End SignUp

// All Countries Fetch
app.get("/api/allcountries", authenticator, (req, res) => {
  res.send(records);
});

// one Country
app.get("/api/countries/:country", authenticator, (req, res) => {
  const country = records.find(record => record.country == req.params.country);
  if (country) {
    res.status(200).json(country);
  } else {
    res.status(404).send({ msg: "country not found" });
  }
});

app.get("/", function(req, res) {
  res.send("App is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});

// Create Country
app.post("/api/createcountry", (req, res) => {
  const country = req.body;
  if (req.body.country !== undefined) records.push(country);
  res.status(201).json(records);
});

//  Create new Community
app.post("/api/:country/createcommunity", (req, res) => {
  const community = req.body;

  records.map((record, index) => {
    if (record.country == req.params.country)
      record.communities.push(community);
  });
  res.status(201).json(records);
});

// Edite User
app.put("/api/user/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the color id");
  users = users.map(user => {
    if (`${user.id}` === req.params.id) {
      return req.body;
    }
    return user;
  });
  res.status(200).send(users);
});

app.delete("/api/user/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the color id");
  users = users.filter(user => `${user.id}` !== req.params.id);
  res.status(202).send(users);
});
