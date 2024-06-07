"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_1 = require("./router/employee");
const app = (0, express_1.default)();
const port = 4000;
app.get("/", (req, res) => {
    return res.send("Hello World!");
});
app.get("/getEmployee", employee_1.getEmployee);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map