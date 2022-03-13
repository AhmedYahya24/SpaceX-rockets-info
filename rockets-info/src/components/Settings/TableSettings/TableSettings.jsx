import React, { useState } from "react";
import { Button, Modal } from "antd";
import TableModal from "../../TableModal";

const TableSettings = () => {
  const [isModalSettingsVisible, setIsModalSettingsVisible] = useState(false);

  const showSettingsModal = () => {
    setIsModalSettingsVisible(true);
  };

  const handleSettingsOk = () => {
    setIsModalSettingsVisible(false);
  };

  const handleSettingsCancel = () => {
    setIsModalSettingsVisible(false);
  };

  return (
    <>
      <Button className="btn" type="primary" onClick={showSettingsModal}>
        Settings
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalSettingsVisible}
        onOk={handleSettingsOk}
        onCancel={handleSettingsCancel}
      >
        <TableModal />
      </Modal>
    </>
  );
};

export default TableSettings;
