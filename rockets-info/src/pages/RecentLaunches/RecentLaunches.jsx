import React, { useState } from "react";
import { Table, Modal } from "antd";
import TableSettings from "../../components/Settings/TableSettings";

const data = [];
const RecentLaunches = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns = [
    {
      title: "Mission icon",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Launch site",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Rocket name",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Rocket country",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Launch date",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Mission name",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Is upcoming",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    { title: "Media Show icons ", dataIndex: "address", key: "8" },
  ];

  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "60px",
          background: "#888",
          color: "#fff",
        }}
      >
        Filter space
      </div>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              showModal();
            }, // click row
          };
        }}
        columns={columns}
        dataSource={data}
        size="middle"
        className="table"
      />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Mission icon:</p>
        <p>Launch site:</p>
        <p>Rocket name:</p>
        <p>Launch date:</p>
        <p>Mission name:</p>
        <p>Is upcoming:</p>
        <p>Media:</p>
        <p>images:</p>
        <p>Rocket badge:</p>
        <p>Cost per launch:</p>
        <p>Mass:</p>
        <p>Diameter:</p>
        <p>Success rate:</p>
        <p>Rocket Description:</p>
      </Modal>
      <TableSettings />
    </div>
  );
};

export default RecentLaunches;
