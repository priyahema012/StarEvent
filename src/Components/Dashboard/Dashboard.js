import React from "react";
import Chart from "react-apexcharts";
import dash from "../../Assests/Images/Frame 2 (1).png";
import dash1 from "../../Assests/Images/Frame 2 (2).png";
import dash2 from "../../Assests/Images/Frame 2 (3).png";
import dash3 from "../../Assests/Images/Frame 2 (4).png";
import events from "../../Assests/Images/Visitor Insights.png";
import classes from "./Dashboard.module.css";
import elipse from "../../Assests/Images/Ellipse 761.png";
import elipse1 from "../../Assests/Images/Ellipse 762.png";
import elipse2 from "../../Assests/Images/Ellipse 764.png";
import { Col } from "antd";

import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

function Dashboard() {
  const { token } = theme.useToken();
  const powerData = {
    series: [81],
    options: {
      colors: ["rgb(236, 28, 28)"],
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "35%",
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "19px",
              fontWeight: "700",

              offsetY: 5,
            },
          },
        },
      },
    },
  };

  const powerData1 = {
    series: [22],
    options: {
      colors: ["#009d94"],
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "35%",
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "19px",
              fontWeight: "700",

              offsetY: 5,
            },
          },
        },
      },
    },
  };

  const powerData2 = {
    series: [62],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "35%",
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "19px",
              fontWeight: "700",

              offsetY: 5,
            },
          },
        },
      },
    },
  };

  const stockChartData = {
    series: [
      {
        name: "STOCK ABC",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      colors: ["#FF2D55"],
      chart: {
        type: "area",
        height: 400,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Sales Revenue",
        align: "left",
        style: {
          fontSize: "18px",
        },
      },

      xaxis: {
        type: "datetime",
        categories: [
          "2024-01-01",
          "2024-02-01",
          "2024-03-01",
          "2024-04-01",
          "2024-05-01",
          "2024-06-01",
          "2024-07-01",
        ],
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "right",
      },
    },
  };


  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    
  };

  return (
    <div
      className=" mt-2 pb-5"
      style={{ backgroundColor: "gainsboro", width: "100%" }}
    >
      <div className="row  pt-3 gap-2 mx-3">
        <div
          className="col-lg-3 col-md-6 d-flex bg-light p-3 justify-content-start align-items-center  rounded-2 "
          style={{ width: "260px", height: "100px" }}
        >
          <img src={dash} width={40} height={40} />
          <div className="d-flex flex-column ms-4 ">
            <span className={` ${classes.cardstitle}`}>Total Events</span>
            <span className={classes.cardsnumber}>2500</span>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6 d-flex bg-light p-3 justify-content-start align-items-center rounded-2"
          style={{ width: "260px", height: "100px" }}
        >
          <img src={dash1} width={40} height={40} />
          <div className="d-flex flex-column ms-4 ">
            <span className={` ${classes.cardstitle}`}>Total Tickets Sold</span>
            <span className={classes.cardsnumber}>40,500</span>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6 d-flex bg-light p-3 justify-content-start align-items-center  rounded-2 "
          style={{ width: "260px", height: "100px" }}
        >
          <img src={dash2} width={40} height={40} />
          <div className="d-flex flex-column ms-4 ">
            <span className={` ${classes.cardstitle}`}>Total Revenue</span>

            <span className={classes.cardsnumber}>1,54,000</span>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6 d-flex bg-light p-3 justify-content-start align-items-center  rounded-2"
          style={{ width: "260px", height: "100px" }}
        >
          <img src={dash3} width={50} height={40} />
          <div className="d-flex flex-column ms-4 ">
            <span className={` ${classes.cardstitle}`}>Total Sponsers</span>
            <span className={classes.cardsnumber}>5,000</span>
          </div>
        </div>
      </div>

      <div className=" row m-3 mt-4  gap-3">
        <div
          className="col-lg-6 d-flex col-md-12 gap-0 p-4   flex-column rounded rounded-3"
          style={{ backgroundColor: "#ffffff", height: "300px" }}
        >
          <div className="d-flex justify-content-between">
            <div className=" fw-bold " style={{ fontSize: "18px" }}>
              Best Selling
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "gainsboro", color: "black" }}
              >
                Month
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
          <div className="d-flex ">
            <div className={classes.chartparent}>
              <Chart
                options={powerData.options}
                series={powerData.series}
                type="radialBar"
                height={150}
              />
              <p style={{ textAlign: "center" }}>Total Ticket Sold</p>
            </div>
            <div className={classes.chartparent}>
              <Chart
                options={powerData1.options}
                series={powerData1.series}
                type="radialBar"
                height={150}
              />
              <p style={{ textAlign: "center" }}>Total Ticket Left </p>
            </div>

            <div className={classes.chartparent}>
              <Chart
                options={powerData2.options}
                series={powerData2.series}
                type="radialBar"
                height={150}
              />
              <p style={{ textAlign: "center" }}>Event Held </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12  ">
          <div
            className="card mb-4"
            style={{ right: "10px", position: "relative", width: "500px" }}
          >
            <div className="card-body">
              <Chart
                options={stockChartData.options}
                series={stockChartData.series}
                type="area"
                height={252}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row ms-3 ">
        <div
          className="col-lg-8 bg-white col-md-12  rounded-3 "
          style={{ height: "400px" }}
        >
          <table className=" " style={{ height: "400px" }}>
            <thead className="">
              <tr className="text-start ">
                <td
                  className="fw-bold"
                  style={{ fontSize: "18px" }}
                  colSpan="4"
                >
                  Transaction History
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ backgroundColor: "#F0F2F5", color: "black" }}
                    >
                      Last 24 Hrs
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>{" "}
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
                </td>
              </tr>
              <tr
                className="text-start fw-bold"
                style={{ backgroundColor: "#ffffff" }}
              >
                <td scope="col">Transaction ID</td>
                <td scope="col">Date</td>
                <td scope="col">Method</td>
                <td scope="col">Amount</td>
                <td scope="col">Status</td>
              </tr>
            </thead>
            <tbody style={{ fontSize: "12px" }}>
              <tr className="py-2">
                <td style={{ color: "#3C4E9B" }}>TXN0023</td>
                <td>08 August 2024</td>
                <td>Paypal</td>
                <td>$400</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={elipse} alt="status icon" />
                    <h6 className="m-0" style={{ fontSize: "12px" }}>
                      Successful
                    </h6>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td style={{ color: "#3C4E9B" }}>TXN0024</td>
                <td>09 August 2024</td>
                <td>Paytm</td>
                <td>$600</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={elipse1} alt="status icon" />
                    <h6 className="m-0" style={{ fontSize: "12px" }}>
                      Pending
                    </h6>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td style={{ color: "#3C4E9B" }}>TXN0025</td>
                <td>10 August 2024</td>
                <td>Credit Card</td>
                <td>$800</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={elipse} alt="status icon" />
                    <h6 className="m-0" style={{ fontSize: "12px" }}>
                      Successful
                    </h6>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td style={{ color: "#3C4E9B" }}>TXN0026</td>
                <td>11 August 2024</td>
                <td>Master Card</td>
                <td>$1000</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={elipse2} alt="status icon" />
                    <h6 className="m-0" style={{ fontSize: "12px" }}>
                      Failed
                    </h6>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td style={{ color: "#3C4E9B" }}>TXN0027</td>
                <td>11 August 2024</td>
                <td>Master Card</td>
                <td>$1000</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={elipse} alt="status icon" />
                    <h6 className="m-0" style={{ fontSize: "12px" }}>
                      Successful
                    </h6>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-12" id={classes}>
  <div style={{ ...wrapperStyle, height: '400px' }}> 
    <Calendar fullscreen={false} onPanelChange={onPanelChange} style={{ height: '100%' }} />
  </div>
</div>

      </div>
    </div>
  );
}

export default Dashboard;
