import React, { useState } from "react";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";

//styles
import "./Settings.css";

const { SubMenu } = Menu;
const Settings = () => {
  // state
  const [current, setCurrent] = useState("");
  // hook
  // functions
  function handleMenuClick(e) {
    console.log("click", e.key);
    setCurrent(e.key);
    console.log("🚀 ~ file: current", current);
  }

  return (
    <div className="settings">
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Settings">
          <Menu.ItemGroup title="Language">
            <Menu.Item key="en">en</Menu.Item>
            <Menu.Item key="ar"> ar</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Weight">
            <Menu.Item key="kg">kg</Menu.Item>
            <Menu.Item key="lbs">lbs</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Distance">
            <Menu.Item key="feet">feet</Menu.Item>
            <Menu.Item key="meter">meter</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Settings;
