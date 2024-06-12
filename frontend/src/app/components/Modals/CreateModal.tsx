import React from "react";
import { Modal } from "antd";

const createModal: React.FC<Modal> = ({
  modalOpen,
    setModalOpen,
  record
}) => {

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
    };
    
    console.log(record)

  return (
    <Modal
      title={"Edit employee information"}
      open={modalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      width={820}
      >
          
    </Modal>
  );
};

export default createModal;
