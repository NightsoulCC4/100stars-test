"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const employee_1 = require("./router/employee");
const app = (0, express_1.default)();
const port = 4000;
var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
app.get("/getEmployee", (0, cors_1.default)(corsOptions), employee_1.getEmployee);
app.post("/createEmployee", (0, cors_1.default)(corsOptions), employee_1.createEmployee);
app.put("/updateEmployee", (0, cors_1.default)(corsOptions), employee_1.updateEmployee);
app.delete("/deleteEmployee", (0, cors_1.default)(corsOptions), employee_1.deleteEmployee);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map