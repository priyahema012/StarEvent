import { useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../Assests/Images/Logo (3).png";
import notification from "../../Assests/Images/Notification.png";
import profile from "../../Assests/Images/Profile (8).png";
import category from "../../Assests/Images/category.png";
import vector from "../../Assests/Images/graph (1).png";
import calendar from "../../Assests/Images/calendar.png";
import people from "../../Assests/Images/people.png";
import star from "../../Assests/Images/Review.png";
import setting from "../../Assests/Images/Vector.png";
import Classes from "./Navbar.module.css";
import menu from "../../Assests/Images/menu.png";

const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState(null);
  const handleMenuClick = (path) => {
    setClickedButton(path); 
    navigate(path); 
  };

  return (
    <Layout
      style={{ minHeight: "100vh", maxWidth: "100vw" }}
      className="d-flex flex-column "
    >
      <Header
        className={Classes.navbar}
        style={{ backgroundColor: "#ffffff", padding: "0" }}
      >
        <nav className="navbar navbar-expand-lg">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#ffffff",
              width: "100%",
              height: "80px",
              padding: "0 24px",
            }}
          >
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" height="55px" width="55px" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <h5 className={Classes.navpage}>Star Event</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      src={menu}
                      alt="Menu"
                      style={{ top: "1px", position: "relative" }}
                    />
                  </a>
                </li>
              </ul>

              <div className="d-flex justify-content-around align-items-center">
                <form
                  className="d-flex bg-white "
                  style={{ left: "35px", position: "relative" }}
                  role="search"
                >
                  <div className="input-group   ">
                    <span
                      className="input-group-text  "
                      style={{ backgroundColor: "gainsboro" }}
                    >
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ backgroundColor: "gainsboro", width: "240px" }}
                    />
                  </div>
                </form>

                <div className="dropdown  d-flex align-items-center ">
                  <div className="">
                    <img
                      src={notification}
                      className={Classes.notify}
                      alt="Notification"
                    />
                    <img
                      src={profile}
                      alt="Profile"
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div className="">
                    <div className="d-flex flex-column gap-1">
                      <span
                        style={{
                          display: "inline-block",
                          fontWeight: "bold",
                          top: "25px",
                          position: "relative",
                        }}
                      >
                        Minato Namikaze
                      </span>
                      <div
                        style={{
                          display: "inline-block",
                          color: "#6c757d",
                          bottom: "20px",
                          position: "relative",
                        }}
                      >
                        Owner
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Header>

      <div className="d-flex h-100 ">
        <Sider
          className={Classes.side}
          style={{
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            minHeight: "100vh",
            marginTop: "25px",
          }}
        >

          
          <Menu theme="light" mode="inline" className={Classes.customMenu}>
            <Menu.Item
              key="1"
              onClick={() => handleMenuClick("/dash")}
              icon={<img src={category} alt="Dashboard" />}
              style={{
                backgroundColor:
                  clickedButton === "/dash" ? "rgba(243,210,227,1)" : "#ffffff",
                color:
                  clickedButton === "/dash" ? "rgba(136,32,114,1)" : "#757575",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => handleMenuClick("/cal")}
              icon={<img src={vector} alt="Calendar" />}
              style={{
                backgroundColor:
                  clickedButton === "/cal" ? "rgba(243,210,227,1)" : "#ffffff",
                color:
                  clickedButton === "/cal" ? "rgba(136,32,114,1)" : "#757575",
                fontWeight: "bold",
              }}
            >
              Calendar
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => handleMenuClick("/events")}
              icon={<img src={calendar} alt="Events" />}
              style={{
                backgroundColor:
                  clickedButton === "/events"
                    ? "rgba(243,210,227,1)"
                    : "#ffffff",
                color:
                  clickedButton === "/events"
                    ? "rgba(136,32,114,1)"
                    : "#757575",
                fontWeight: "bold",
              
              }}
            >
              Events
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => handleMenuClick("/customer")}
              icon={<img src={people} alt="Customer" />}
              style={{
                backgroundColor:
                  clickedButton === "/customer"
                    ? "rgba(243,210,227,1)"
                    : "#ffffff",
                color:
                  clickedButton === "/customer"
                    ? "rgba(136,32,114,1)"
                    : "#757575",
                fontWeight: "bold",
              }}
            >
              Customer
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={() => handleMenuClick("/analytics")}
              icon={<img src={vector} alt="Analytics" />}
              style={{
                backgroundColor:
                  clickedButton === "/analytics"
                    ? "rgba(243,210,227,1)"
                    : "#ffffff",
                color:
                  clickedButton === "/analytics"
                    ? "rgba(136,32,114,1)"
                    : "#757575",
                fontWeight: "bold",
              }}
            >
              Analytics
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => handleMenuClick("/reviews")}
              icon={<img src={star} alt="Reviews" />}
              style={{
                backgroundColor:
                  clickedButton === "/reviews"
                    ? "rgba(243,210,227,1)"
                    : "#ffffff",
                color:
                  clickedButton === "/reviews"
                    ? "rgba(136,32,114,1)"
                    : "#757575",
                fontWeight: "bold",
              }}
            >
              Reviews
            </Menu.Item>
            <Menu.Item
              key="7"
              onClick={() => handleMenuClick("/settings")}
              icon={<img src={setting} alt="Settings" />}
              style={{
                backgroundColor:
                  clickedButton === "/settings"
                    ? "rgba(243,210,227,1)"
                    : "#ffffff",
                color:
                  clickedButton === "/settings"
                    ? "rgba(136,32,114,1)"
                    : "#757575",
                fontWeight: "bold",
              }}
            >
              Settings
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="mt-3 " style={{maxWidth:"100vw"}}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </div>
    </Layout>
  );
};

export default Navbar;
