"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const port = 8000;
const app = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongo.url)
    .then(() => {
    console.log("Monogodb connection successful!");
})
    .catch((err) => {
    console.log("ERR: ", err);
});
app.get("/", (req, res) => {
    res.send("server up! s @! ssd");
});
app.listen(port, () => {
    console.log("listening on port", port);
});
