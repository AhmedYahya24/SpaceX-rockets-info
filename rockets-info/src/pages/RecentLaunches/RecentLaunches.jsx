import React, { useState } from "react";
import { Table, Modal } from "antd";
import { columns } from "../../components/Settings/TableSettings/TableSettings";
import TableSettings from "../../components/Settings/TableSettings";
import { useReactQuery } from "../../utils/hooks/useReactQuery/useReactQuery";
//styles
import "./RecentLaunches.css";
const tableData = [];

//constants
const modalData = {
  name: "",
  icon: "",
  site: "",
  date: "",
  description: "",
  successRate: "",
  diameter: "",
  mass: "",
  costPerLaunch: "",
  badge: "mmmmmmm",
  images: "",
  media: "",
  upcoming: "",
  successRate: "",
};
const RecentLaunches = () => {
  //useQuery
  const { data, status, isError } = useReactQuery();
  data && console.log(data.launchesPastResult.data);

  //handleVisible
  const [isModalVisible, setIsModalVisible] = useState(false);

  //functions
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //push data to table
  if (data) {
    for (let i = 0; i < 100; i++) {
      const d = data.launchesPastResult.data[i];
      tableData.push({
        key: `${d.launch_date_local}`,
        address: `${d.launch_date_local}`,
        icon: <img src={d.links.mission_patch} className="image" />,
        site: `${d.launch_site.site_name}`,
        name: d.rocket.rocket_name,
        country: d.rocket.rocket.country,
        date: d.launch_date_local,
        missionName: d.mission_name,
        upcoming: `${d.upcoming}`,
        mediaIcon: <img src={d.links.mission_patch_small} className="image" />,
      });
    }
  }

  const presentModal = (_) => {
    return (
      <>
        <p>Mission icon:{modalData.icon} </p>
        <p>Launch site: {modalData.site}</p>
        <p>Rocket name: {modalData.name}</p>
        <p>Launch date: {modalData.date}</p>
        <p>Mission name:{modalData.name}</p>
        <p>Is upcoming: {modalData.upcoming}</p>
        <p>Media: {modalData.media}</p>
        <p>images: {modalData.icon}</p>
        <p>Rocket badge:{modalData.badge}</p>
        <p>Cost per launch:{modalData.costPerLaunch}</p>
        <p>Mass: {modalData.mass}</p>
        <p>Diameter: {modalData.diameter}</p>
        <p>Success rate: {modalData.rate}</p>
        <p>Rocket Description: {modalData.description} </p>
      </>
    );
  };

  return (
    <div>
      {data ? (
        <>
          <Table
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  showModal();
                }, // click row
              };
            }}
            columns={columns}
            dataSource={tableData}
            size="middle"
            className="table"
          />

          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {presentModal()}
          </Modal>
          <TableSettings />
        </>
      ) : (
        <p>loading ...</p>
      )}
    </div>
  );
};

export default RecentLaunches;
