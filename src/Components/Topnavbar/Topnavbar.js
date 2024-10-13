import React from "react";
import logo from "../../Assests/Images/Logo (3).png";
import menu from "../../Assests/Images/menu.png";
import profile from "../../Assests/Images/Profile (8).png";
import notification from "../../Assests/Images/Notification.png";
import classes from "./Topnavbar.module.css";

const TopNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#FFFFFF",
            width: "1440px",
            height: "80px",
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <h5 className={classes.navpage}>Star Event</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    src={menu}
                    alt="Menu"
                    style={{ top: "4px", position: "relative" }}
                  />
                </a>
              </li>
            </ul>

            <form className="d-flex ms-auto bg-light" role="search">
              <div className="input-group">
                <span
                  className="input-group-text"
                  style={{ backgroundColor: "gainsboro" }}
                >
                  <i className="bi bi-search"></i>
                </span>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ backgroundColor: "gainsboro" }}
                />
              </div>
            </form>

            <div className="dropdown ms-3 d-flex align-items-center">
              <img
                src={notification}
                className={classes.notify}
                alt="Notification"
              />
              <img
                src={profile}
                alt="Profile"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <div className="row">
                <div className="col-12 d-flex flex-column text-start">
                  <span className="fw-bold">Minato Namikaze</span>
                  <span className="text-muted">Owner</span>
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
      </nav>

      <p>hii</p>
    </>
  );
};

export default TopNavbar;
