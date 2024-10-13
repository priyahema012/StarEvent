import React, { useState } from "react";
import { Menu } from "antd";
import category from "../../Assests/Images/category.png";
import vector from "../../Assests/Images/graph (1).png";
import calendar from "../../Assests/Images/calendar.png";
import people from "../../Assests/Images/people.png";
import graph from "../../Assests/Images/graph (1).png";
import star from "../../Assests/Images/Review.png";
import setting from "../../Assests/Images/Vector.png";
import classes from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();

  const handleMenuClick = (key, path) => {
    setSelectedKey(key);
    navigate(path);
  };

  return (
    <div
      className={classes.sidebars}
      style={{
        width: collapsed ? 80 : 210,
        transition: "width 0.2s",
        minHeight: "100vh",
      }}
    >
      <Menu
        selectedKeys={[selectedKey]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" onClick={() => handleMenuClick("1", "/dash")}>
          <div className={classes.dashboard}>
            <img src={category} alt="Dashboard" />
            Dashboard
          </div>
        </Menu.Item>

        <Menu.Item key="2" onClick={() => handleMenuClick("2", "/calendar")}>
          <div className={classes.dashboard}>
            <img src={vector} alt="Calendar" />
            Calendar
          </div>
        </Menu.Item>

        <Menu.Item key="3" onClick={() => handleMenuClick("3", "/events")}>
          <div className={classes.dashboard}>
            <img src={calendar} alt="Events" />
            Events
          </div>
        </Menu.Item>

        <Menu.Item key="4" onClick={() => handleMenuClick("4", "/customer")}>
          <div className={classes.dashboard}>
            <img src={people} alt="Customer" />
            Customer
          </div>
        </Menu.Item>

        <Menu.Item key="5" onClick={() => handleMenuClick("5", "/analytics")}>
          <div className={classes.dashboard}>
            <img src={graph} alt="Analytics" />
            Analytics
          </div>
        </Menu.Item>

        <Menu.Item key="6" onClick={() => handleMenuClick("6", "/reviews")}>
          <div className={classes.dashboard}>
            <img src={star} alt="Reviews" />
            Reviews
          </div>
        </Menu.Item>

        <Menu.Item key="7" onClick={() => handleMenuClick("7", "/settings")}>
          <div className={classes.dashboard}>
            <img src={setting} alt="Settings" />
            Settings
          </div>
        </Menu.Item>
      </Menu>
      <Outlet />
    </div>
  );
};

export default Sidebar;
