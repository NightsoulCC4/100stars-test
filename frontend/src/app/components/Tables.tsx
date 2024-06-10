import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface Table {
    data: DataType[]
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Firstname",
    dataIndex: "fname",
    key: "fname",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Lastname",
    dataIndex: "lname",
    key: "lname",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    render: (text:string) => text == "1" ? <p>male</p> : <p>female</p> 
  },
  {
    title: "Date of birth",
    dataIndex: "dob",
    key: "dob",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tambon",
    key: "tambon",
    dataIndex: "tambon",
  },
  {
    title: "Amphoe",
    dataIndex: "amphoe",
    key: "amphoe",
  },
  {
    title: "Province",
    dataIndex: "province",
    key: "province",
  },
  {
    title: "Id card expired",
    dataIndex: "id_expired",
    key: "id_expired",
  },
];

const Tables: React.FC<Table> = ({ data }) => {

    console.log(data);

  return <Table columns={columns} dataSource={data} />;
};

export default Tables;
