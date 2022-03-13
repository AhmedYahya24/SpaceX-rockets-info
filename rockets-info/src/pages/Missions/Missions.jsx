import React, { useState } from "react";
import { Card, Button, Modal } from "antd";
import "./Missions.css";

const Missions = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    <div className="cards">
      <Card
        title="Default size card"
        extra={
          <Button type="primary" onClick={showModal}>
            more
          </Button>
        }
        style={{ width: 300 }}
      >
        <p>Name:</p>
        <p>Description:</p>
        <p>Manufacturers:</p>
        <p>Payload ID:</p>
        <p>Wiki icon:</p>
        <p>Twitter icon:</p>
        <p>Website:</p>
      </Card>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Name:</p>
        <p>Description:</p>
        <p>Manufacturers:</p>
        <p>Payload ID:</p>
        <p>Wiki icon:</p>
        <p>Twitter icon:</p>
        <p>Website:</p>
        <p>
          Payload List:
          <ul>
            <li>Payload id:</li>
            <li>Payload cutomers:</li>
            <li>Payload mass:</li>
            <li>Payload type:</li>
            <li>Reused:</li>
            <li>Orbit:</li>
            <li>Nationality:</li>
            <li>Manufacture:</li>
          </ul>
        </p>
      </Modal>
    </div>
  );
};

export default Missions;
