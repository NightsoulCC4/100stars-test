import React from "react";
import { Modal } from "antd";
import { deleteEmployee } from "@/app/service/employee";

const DeleteModal: React.FC<Modal> = ({
  modalOpen,
  setModalOpen,
  data,
  setData,
  id,
}) => {

  console.log(id);

  const handleOk = async () => {

    const res: number | undefined = await deleteEmployee({id: id});

    if (res === 200 && data) {
      const newData: DataType[] = data?.filter((el) => el.id !== id) ?? [];

      setData(newData);
    }

    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
};

  return (
    <Modal
      title={"Delete employee information"}
      open={modalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      width={820}
      >
          Are you sure?
    </Modal>
  );
};

export default DeleteModal;
