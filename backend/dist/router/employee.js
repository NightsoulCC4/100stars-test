"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployee = void 0;
const connect_1 = __importDefault(require("../connect"));
const getEmployee = (req, res) => {
    connect_1.default.getConnection((err, connection) => {
        connection.query("SELECT * FROM employee", (err, result) => {
            if (err)
                return res.status(500).json({
                    status: 500,
                    msg: JSON.stringify(err),
                });
            else
                return res.status(200).json({
                    status: 200,
                    msg: result,
                });
        });
    });
};
exports.getEmployee = getEmployee;
//# sourceMappingURL=employee.js.map