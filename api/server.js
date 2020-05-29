const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const middleWare = require("./setUpMiddleWare.js");
const routers = require("./routers");

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routers;
routers(server);

module.exports = server;
