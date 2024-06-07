import express from "express";
import { createEmployee, getEmployee } from "./router/employee";
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/getEmployee", getEmployee);
app.post("/createEmployee", createEmployee);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
