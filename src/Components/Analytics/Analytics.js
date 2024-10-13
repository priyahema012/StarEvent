import React from "react";
import line1 from "../../Assests/Images/Group 5 (1).png";
import line2 from "../../Assests/Images/Group 5 (2).png";
import line3 from "../../Assests/Images/Group 5 (3).png";
import line4 from "../../Assests/Images/Group 5 (4).png";
import chartImg from "../../Assests/Images/Group 1000002742.png";
import Classes from "./Analytics.module.css";
import graph from "../../Assests/Images/Frame 1000007312.png";
import arrowup from "../../Assests/Images/arrow-up.png";
import piechart from "../../Assests/Images/pie chart (2).png";
import frame from "../../Assests/Images/Frame 1000007309 (1).png";
import elipses from "../../Assests/Images/Ellipse 8.png";
import elipses1 from "../../Assests/Images/Ellipse 8 (1).png";
import elipses2 from "../../Assests/Images/Ellipse 8 (2).png";
import elipses3 from "../../Assests/Images/Ellipse 8 (3).png";
import roseelispe from "../../Assests/Images/arrow-up (2).png";

function Analytics() {
  return (
    <div className=" pb-5" style={{ backgroundColor: "gainsboro" }}>
      <div className="row p-3 " style={{ display: "flex" }}>
        <h4 className="mt-2">Analytics</h4>
        <div className="col-lg-6 col-md-12 p-3 rounded rounded-2">
          <div
            className=" d-flex flex-column justify-content-between p-4 rounded rounded-2"
            style={{ backgroundColor: "#ffffff", height: "auto" }}
          >
            <div className="d-flex justify-content-between">
              <div className={Classes.sale}>Sales Comparison</div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "gainsboro", color: "black" }}
                >
                  Weekly
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-end">
              <img
                src={chartImg}
                height="230px"
                width="480px"
                alt="Sales chart"
              />
            </div>
          </div>
        </div>

        <div
          className="col-lg-6 col-md-12 p-3 rounded rounded-2 mb-2 ms-2"
          style={{
            backgroundColor: "#ffffff",
            height: "320px",
            top: "15px",
            position: "relative",
            width: "545px",
          }}
        >
          <div className="d-flex justify-content-between">
            <div className={Classes.sale}>Best Selling</div>
            <div className="dropdown">
              <div className="d-flex ">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor: "gainsboro",
                    color: "black",
                    position: "relative",
                    right: "43px",
                  }}
                >
                  Weekly
                </button>
              </div>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="mt-2"
            style={{
              height: "180px",
            }}
          >
            <div className="row">
              <div className="col-6">
                <img src={piechart} alt="Pie chart" />
                <div className="d-flex flex-column gap-1 mt-2">
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-1">
                      <img src={elipses} width={15} height={15} />
                      <p>Music</p>
                    </div>
                    <div className="d-flex gap-1">
                      <img src={elipses1} width={15} height={15} />
                      <p>FoodFest</p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-1">
                      <img src={elipses2} width={15} height={15} />
                      <p>Startup Meet</p>
                    </div>
                    <div className="d-flex gap-1">
                      <img src={elipses3} width={15} height={15} />
                      <p>AI Expo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src={frame} alt="Frame" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-2 ">
        <div className="col-lg-6 col-md-12 rounded rounded-2 ">
          <div
            className="d-flex  flex-column  justify-content-between  p-4  rounded  rounded-2"
            style={{ backgroundColor: "#ffffff", height: "350px" }}
          >
            <div>
              <div className={Classes.sale}>Ticket Sold</div>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Sales</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Start Music</td>
                  <td>
                    <img src={line1} alt="line chart 1" />
                  </td>
                  <td>1000</td>
                  <td>
                    <button type="button" className="btn btn-outline-info">
                      45%
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Bizcon</td>
                  <td>
                    <img src={line2} alt="line chart 2" />
                  </td>
                  <td>1500</td>
                  <td>
                    <button type="button" className="btn btn-outline-success">
                      29%
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Startup Meet</td>
                  <td>
                    <img src={line3} alt="line chart 3" />
                  </td>
                  <td>800</td>
                  <td>
                    <button type="button" className="btn btn-outline-secondary">
                      18%
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Green Submit</td>
                  <td>
                    <img src={line4} alt="line chart 4" />
                  </td>
                  <td>1200</td>
                  <td>
                    <button type="button" className="btn btn-outline-warning">
                      25%
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 rounded rounded-2">
          <div
            className=" bg-white p-3 rounded rounded-2"
            style={{ height: "350px" }}
          >
            <table
              className="table"
              style={{
                borderCollapse: "separate",
                borderSpacing: "0",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      fontSize: "14px",
                      padding: "18px 5px",
                      borderBottom: "none",
                      textAlign: "left",
                    }}
                    colSpan={2}
                  >
                    Trending Event
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "14px" }}>
                <tr>
                  <td className="border-0 p-2" >
                    01
                  </td>
                  <td className="border-0 p-2" >
                    Startup Founders Networking Event
                  </td>
                  <td
                    className="border-0 text-center p-2"
                    style={{ width: "15%" }}
                  >
                    <div className="sales-column">
                      <p style={{ margin: 0, color: "#C42072" }}>426</p>
                      <p style={{ margin: 0 }}>Sales</p>
                    </div>
                  </td>
                  <td className="border-0 p-2" style={{ width: "15%" }}>
                    <img
                      src={graph}
                      alt="Graph"
                      style={{
                        maxWidth: "40px",
                        height: "40px",
                        margin: 0,
                        display: "block",
                      }}
                    />
                  </td>
                  <td className="border-0 p-2" style={{ width: "10%" }}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={arrowup}
                        alt="Arrow up"
                        style={{
                          width: "16px",
                          height: "16px",
                          margin: 0,
                          display: "block",
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-0 p-2" style={{ width: "5%" }}>
                    02
                  </td>
                  <td className="border-0 p-2" style={{ width: "45%" }}>
                    Healthcare Innovations Conference
                  </td>
                  <td
                    className="border-0 text-center p-2"
                    style={{ width: "15%" }}
                  >
                    <div className="sales-column">
                      <p style={{ margin: 0, color: "#C42072" }}>760</p>
                      <p style={{ margin: 0 }}>Sales</p>
                    </div>
                  </td>
                  <td className="border-0 p-2" style={{ width: "15%" }}>
                    <img
                      src={graph}
                      alt="Graph"
                      style={{
                        maxWidth: "40px",
                        height: "40px",
                        margin: 0,
                        display: "block",
                      }}
                    />
                  </td>
                  <td className="border-0 p-2" style={{ width: "10%" }}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={roseelispe}
                        alt="Arrow up"
                        style={{
                          width: "16px",
                          height: "16px",
                          margin: 0,
                          display: "block",
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-0 p-2" style={{ width: "5%" }}>
                    03
                  </td>
                  <td className="border-0 p-2" style={{ width: "45%" }}>
                    Annual Fashion Design Show
                  </td>
                  <td
                    className="border-0 text-center p-2"
                    style={{ width: "15%" }}
                  >
                    <div className="sales-column">
                      <p style={{ margin: 0, color: "#C42072" }}>880</p>
                      <p style={{ margin: 0 }}>Sales</p>
                    </div>
                  </td>
                  <td className="border-0 p-2" style={{ width: "15%" }}>
                    <img
                      src={graph}
                      alt="Graph"
                      style={{
                        maxWidth: "40px",
                        height: "40px",
                        margin: 0,
                        display: "block",
                      }}
                    />
                  </td>
                  <td className="border-0 p-2" style={{ width: "10%" }}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={arrowup}
                        alt="Arrow up"
                        style={{
                          width: "16px",
                          height: "16px",
                          margin: 0,
                          display: "block",
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-0 p-2" style={{ width: "5%" }}>
                    04
                  </td>
                  <td className="border-0 p-2" style={{ width: "45%" }}>
                    Photography & Videography
                  </td>
                  <td
                    className="border-0 text-center p-2"
                    style={{ width: "15%" }}
                  >
                    <div className="sales-column">
                      <p style={{ margin: 0, color: "#C42072" }}>880</p>
                      <p style={{ margin: 0 }}>Sales</p>
                    </div>
                  </td>
                  <td className="border-0 p-2" style={{ width: "15%" }}>
                    <img
                      src={graph}
                      alt="Graph"
                      style={{
                        maxWidth: "40px",
                        height: "40px",
                        margin: 0,
                        display: "block",
                      }}
                    />
                  </td>
                  <td className="border-0 p-2" style={{ width: "10%" }}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={roseelispe}
                        alt="Arrow up"
                        style={{
                          width: "16px",
                          height: "16px",
                          margin: 0,
                          display: "block",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
