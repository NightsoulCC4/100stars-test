import express from "express";
import cors from "cors";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "./router/employee";
const app = express();
const port: number = 4000;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());

app.get("/getEmployee", cors(corsOptions), getEmployee);
app.post("/createEmployee", cors(corsOptions), createEmployee);
app.put("/updateEmployee", cors(corsOptions), updateEmployee);
app.delete("/deleteEmployee", cors(corsOptions), deleteEmployee);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
