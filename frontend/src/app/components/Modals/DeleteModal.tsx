import React from "react";
import { Modal } from "antd";

const DeleteModal: React.FC<Modal> = ({
  modalOpen,
  setModalOpen,
}) => {

  const handleOk = () => {

    

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
