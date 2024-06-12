"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const connect_1 = __importDefault(require("../connect"));
const generateFakeData = async (counter) => {
    connect_1.default.getConnection(async (err, connection) => {
        if (err) {
            console.error("Error getting connection:", err);
            process.exit(1);
        }
        const queries = [];
        for (let i = 1; i <= counter; i++) {
            const data = {
                fname: faker_1.faker.person.firstName(),
                lname: faker_1.faker.person.lastName(),
                gender: faker_1.faker.person.sex() === "male" ? 1 : 2,
                dob: faker_1.faker.date.birthdate(),
                address: faker_1.faker.location.ordinalDirection(),
                tambon: faker_1.faker.location.street(),
                amphoe: faker_1.faker.location.city(),
                province: faker_1.faker.location.state(),
                id_card_valid_date: faker_1.faker.date.soon(),
            };
            const queryPromise = new Promise((resolve, reject) => {
                connection.query("INSERT INTO 100stars.employee (fname, lname, gender, dob, address, tambon, amphoe, province, id_card_valid_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [
                    data.fname,
                    data.lname,
                    data.gender,
                    data.dob,
                    data.address,
                    data.tambon,
                    data.amphoe,
                    data.province,
                    data.id_card_valid_date,
                ], (err, result) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    else {
                        console.log(result);
                        resolve();
                    }
                });
            });
            queries.push(queryPromise);
        }
        try {
            await Promise.all(queries);
            console.log("completed");
        }
        catch (err) {
            console.error("Error executing queries:", err);
        }
        finally {
            connection.release();
            process.exit(0);
        }
    });
};
generateFakeData(10);
