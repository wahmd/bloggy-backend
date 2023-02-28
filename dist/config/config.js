"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv").config();
const MONOGO_USERNAME = dotenv.parsed["process.env.MONGO_USERNAME"] || "";
const MONOGO_PASSWORD = dotenv.parsed["process.env.MONOGO_PASSWORD"] || "";
const MONGO_URL = `mongodb+srv://${MONOGO_USERNAME}:${MONOGO_PASSWORD}@bloggycluster.yghoqqm.mongodb.net/?retryWrites=true&w=majority`;
exports.config = {
    mongo: {
        url: MONGO_URL,
    },
};
