import { Flex, Button } from "antd";
import React, { FC, useState } from "react";
import DeleteModal from "./Modals/DeleteModal";
import EditModal from "./Modals/EditModal";

const Action: FC<Action> = ({ data, id, record }) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  return (
    <>
      <Flex gap="small" wrap>
        <Button onClick={() => setEditModalOpen(!editModalOpen)}>Edit</Button>
        <Button onClick={() => setDeleteModalOpen(!deleteModalOpen)} danger>
          Delete
        </Button>
      </Flex>
      <EditModal
        modalOpen={editModalOpen}
        setModalOpen={setEditModalOpen}
        record={record}
      />
      <DeleteModal
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        data={data}
        id={id}
      />
    </>
  );
};

export default Action;
