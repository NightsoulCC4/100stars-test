import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "./router/employee";
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/getEmployee", getEmployee);
app.post("/createEmployee", createEmployee);
app.put("/updateEmployee", updateEmployee);
app.delete("/deleteEmployee", deleteEmployee);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
