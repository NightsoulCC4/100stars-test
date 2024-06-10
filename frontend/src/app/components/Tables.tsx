import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import type { TableProps } from "antd";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const Tables: React.FC<Table> = ({ data }) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

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
          <Flex gap="small" wrap>
            <Button
              type="primary"
              onClick={() => setEditModalOpen(!editModalOpen)}
            >
              Edit
            </Button>
            <Button danger>Delete</Button>
          </Flex>
          <EditModal
            modalOpen={editModalOpen}
            setModalOpen={setEditModalOpen}
            record={record}
          />
          <DeleteModal
            modalOpen={deleteModalOpen}
            setModalOpen={setDeleteModalOpen}
            id={record?.id}
          />
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Tables;
