import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import Action from "./Action";

const Tables: React.FC<Table> = ({ data }) => {

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Firstname",
      dataIndex: "fname",
      key: "fname",
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
      render: (text: string) => (text == "1" ? <p>male</p> : <p>female</p>),
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
      dataIndex: "id_card_valid_date",
      key: "id_card_valid_date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Action data={data} record={record} id={record?.id} />
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Tables;
