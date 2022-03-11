import React from "react";
import { Dropdown, Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";

//styles
import "./Settings.css";

const Settings = () => {
  // state
  // hook
  // functions
  function handleMenuClick(e) {
    console.log("click", e);
  }

  const languageMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">ar</Menu.Item>
      <Menu.Item key="2">en</Menu.Item>
    </Menu>
  );
  const weightMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">kg</Menu.Item>
      <Menu.Item key="2">lbs</Menu.Item>
    </Menu>
  );
  const distanceMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">feet</Menu.Item>
      <Menu.Item key="2">meters</Menu.Item>
    </Menu>
  );
  const menu = (
    <Menu className="homeMenu" onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Dropdown.Button overlay={languageMenu}>Langunge</Dropdown.Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Dropdown.Button overlay={weightMenu}>Weight</Dropdown.Button>
      </Menu.Item>
      <Menu.Item key="3">
        <Dropdown.Button overlay={distanceMenu}>Distance</Dropdown.Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="settings">
      <Dropdown.Button overlay={menu} className="alone">
        <SettingOutlined />
      </Dropdown.Button>
    </div>
  );
};

export default Settings;
