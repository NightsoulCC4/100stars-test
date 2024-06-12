import { faker } from "@faker-js/faker";
import pool from "../connect";

interface Data {
  fname: string;
  lname: string;
  gender: number;
  dob: Date;
  address: string;
  tambon: string;
  amphoe: string;
  province: string;
  id_card_valid_date: Date;
}

const generateFakeData = async (counter: number) => {
  pool.getConnection(async (err, connection) => {
    if (err) {
      console.error("Error getting connection:", err);
      process.exit(1);
    }

    const queries: Promise<void>[] = [];

    for (let i = 1; i <= counter; i++) {
      const data: Data = {
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        gender: faker.person.sex() === "male" ? 1 : 2,
        dob: faker.date.birthdate(),
        address: faker.location.ordinalDirection(),
        tambon: faker.location.street(),
        amphoe: faker.location.city(),
        province: faker.location.state(),
        id_card_valid_date: faker.date.soon(),
      };

      const queryPromise = new Promise<void>((resolve, reject) => {
        connection.query(
          "INSERT INTO 100stars.employee (fname, lname, gender, dob, address, tambon, amphoe, province, id_card_valid_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
          [
            data.fname,
            data.lname,
            data.gender,
            data.dob,
            data.address,
            data.tambon,
            data.amphoe,
            data.province,
            data.id_card_valid_date,
          ],
          (err, result) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log(result);
              resolve();
            }
          }
        );
      });

      queries.push(queryPromise);
    }

    try {
      await Promise.all(queries);
      console.log("completed");
    } catch (err) {
      console.error("Error executing queries:", err);
    } finally {
      connection.release();
      process.exit(0);
    }
  });
};

generateFakeData(10);
