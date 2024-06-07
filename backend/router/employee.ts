import { Request, Response } from "express";
import pool from "../connect";

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
          msg: result,
        });
    });
  });
};
