import { Request, Response } from "express";
import pool from "../connect";

interface createEmployeeParam {
  fname: string;
  lname: string;
  gender: number;
  dob: string;
  address: string;
  tambon: string;
  amphoe: string;
  province: string;
  id_card_valid_date: string;
}

export const getEmployee = (req: Request, res: Response) => {
  pool.getConnection((err, connection) => {
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

export const createEmployee = (req: Request, res: Response) => {
  const {
    fname,
    lname,
    gender,
    dob,
    address,
    tambon,
    amphoe,
    province,
    id_card_valid_date,
  }: createEmployeeParam = req.body;

  if (
    !fname ||
    !lname ||
    !gender ||
    !dob ||
    !address ||
    !tambon ||
    !amphoe ||
    !province ||
    !id_card_valid_date
  ) {
    return res.status(400).json({
      status: 400,
      msg: "Missing required fields",
    });
  }

  pool.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO 100stars.employee (fname,lname,gender,dob,address,tambon,amphoe,province,id_card_valid_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
      [
        fname,
        lname,
        gender,
        dob,
        address,
        tambon,
        amphoe,
        province,
        id_card_valid_date,
      ],
      (err, result) => {
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
      }
    );
  });
};
