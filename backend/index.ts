import express from "express";
import { getEmployee } from "./router/employee";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/getEmployee", getEmployee);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
