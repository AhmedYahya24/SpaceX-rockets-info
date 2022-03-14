import React, { useState } from "react";
import { Button, Modal } from "antd";
import TableModal from "../../TableModal";

export const columns = [
  {
    title: "Mission icon",
    dataIndex: "icon",
    key: "1",
    width: 150,
  },
  {
    title: "Launch site",
    dataIndex: "site",
    key: "2",
    width: 150,
  },
  {
    title: "Rocket name",
    dataIndex: "name",
    key: "3",
    width: 150,
  },
  {
    title: "Rocket country",
    dataIndex: "country",
    key: "4",
    width: 150,
  },
  {
    title: "Launch date",
    dataIndex: "date",
    key: "5",
    width: 150,
  },
  {
    title: "Mission name",
    dataIndex: "missionName",
    key: "6",
    width: 150,
  },
  {
    title: "Is upcoming",
    dataIndex: "upcoming",
    key: "7",
    width: 150,
  },
  { title: "Media Show icons ", dataIndex: "mediaIcon", key: "8" },
];

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
