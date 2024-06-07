"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = exports.getEmployee = void 0;
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
                    msg: "Get employee success!",
                    data: result,
                });
        });
    });
};
exports.getEmployee = getEmployee;
const createEmployee = (req, res) => {
    const { fname, lname, gender, dob, address, tambon, amphoe, province, id_card_valid_date, } = req.body;
    if (!fname ||
        !lname ||
        !gender ||
        !dob ||
        !address ||
        !tambon ||
        !amphoe ||
        !province ||
        !id_card_valid_date) {
        return res.status(400).json({
            status: 400,
            msg: "Missing required fields",
        });
    }
    connect_1.default.getConnection((err, connection) => {
        connection.query("INSERT INTO 100stars.employee (fname,lname,gender,dob,address,tambon,amphoe,province,id_card_valid_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [
            fname,
            lname,
            gender,
            dob,
            address,
            tambon,
            amphoe,
            province,
            id_card_valid_date,
        ], (err, result) => {
            if (err)
                return res.status(500).json({
                    status: 500,
                    msg: JSON.stringify(err),
                });
            else
                return res.status(201).json({
                    status: 201,
                    msg: "Create employee success!",
                    data: result,
                });
        });
    });
};
exports.createEmployee = createEmployee;
//# sourceMappingURL=employee.js.map