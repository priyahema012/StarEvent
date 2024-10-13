import React, { useEffect } from "react";
import "./Cal.css";
import card1 from "../../Assests/Images/Avatar 1.png";
import card2 from "../../Assests/Images/Avatar 2.png";
import card3 from "../../Assests/Images/Avatar 3.png";
import card4 from "../../Assests/Images/Base.png";
import card5 from "../../Assests/Images/Avatar Image.png";
import card6 from "../../Assests/Images/Avatar 7.png";
import card7 from "../../Assests/Images/Avatar Image (1).png";
import card8 from "../../Assests/Images/Avatar 10.png";
import date from "../../Assests/Images/Input Field (1).png";
import card9 from "../../Assests/Images/Avatar Image (2).png";
import cards1 from "../../Assests/Images/Avatar 13.png";
import carts6 from "../../Assests/Images/Avatar Image (6).png";
import carts7 from "../../Assests/Images/Avatar 6.png";
import carts9 from "../../Assests/Images/Avatar Image (11).png";
import carts3 from "../../Assests/Images/Avatar Image (7).png";
import carts2 from "../../Assests/Images/Avatar Image (6).png";

import carts8 from "../../Assests/Images/Avatar Image (10).png";
import cark from "../../Assests/Images/Avatar Image (9).png";
import { Hidden } from "@mui/material";
import { DatePicker } from 'antd'; 

import lastdiv from "../../Assests/Images/Avatar Image (17).png";
import lastdiv1 from "../../Assests/Images/Avatar Image (18).png";
import lastdiv2 from "../../Assests/Images/Avatar Image (19).png";
import lastdiv3 from "../../Assests/Images/Avatar Image (20).png";

const Calendar = () => {
  useEffect(() => {
    document.querySelectorAll("td").forEach((td) => {
      td.classList.add("thd");
    });
  }, []);

  return (
    <div className="m-3 bg-secondary mt-4">
      <div className="bg-white p-3 gap-0">
        <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
          <h5 style={{ marginLeft: "20px" }}>Calendar</h5>
         
  <DatePicker style={{ marginRight: "14px" }} /> 


        </div>

        <table className="table rounded-3">
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan={8}>
                <div className="container mt-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        style={{
                          borderRadius: "20px",
                          paddingRight: "20px",
                          paddingLeft: "20px",
                        }}
                      >
                        Today
                      </button>
                    </div>
                    <div className="d-flex align-items-center">
                      <i
                        className="bi bi-arrow-left-circle"
                        style={{
                          fontSize: "1.5rem",
                          color: "#8C99B3",
                          cursor: "pointer",
                        }}
                      ></i>
                      <span
                        className="mx-3"
                        style={{
                          color: "#121212",
                          fontSize: "12px",
                          fontWeight: "700",
                          lineHeight: "16px",
                          textAlign: "center",
                          display: "inline-block",
                        }}
                      >
                        May 12, 2024
                      </span>
                      <i
                        className="bi bi-arrow-right-circle"
                        style={{
                          fontSize: "1.5rem",
                          color: "#8C99B3",
                          cursor: "pointer",
                        }}
                      ></i>
                    </div>
                    <div>
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Day
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Week
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Month
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Year
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="">
              <th
                className="rowed"
                style={{
                  height: "67px",
                  width: "69px",
                  verticalAlign: "middle",
                }}
              >
                <span className="bi bi-clock"></span>
              </th>
              <th
                className="roweds"
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                Monday 12
              </th>
              <th
                className="roweds"
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                Tuesday 13
              </th>
              <th
                className="roweds"
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                Wednesday 14
              </th>
              <th
                className="roweds"
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                Thursday 15
              </th>
              <th
                className="roweds"
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                Friday 16
              </th>
              <th
                className="roweds"
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                Saturday 17
              </th>
              <th
                className="roweds"
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                Sunday 18
              </th>
            </tr>

            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                09
              </td>
              <td rowSpan="2" className="event">
                <div className="d-flex flex-column justify-content-around cart align-items-start p-2">
                  <div className="d-flex flex-column">
                    <div className="d-flex gap-1">
                      <span className="star">09:00</span>
                      <span className="star">10:59</span>
                    </div>
                    <p className="heading">Shooting Stars</p>
                  </div>
                  <div>
                    <img
                      src={card1}
                      width="26px"
                      height="26px"
                      className="me-2"
                      alt="Avatar"
                    />
                    <img src={card2} width="26px" height="26px" alt="Avatar" />
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                10
              </td>
              <td></td>
              <td></td>
              <td rowSpan="2">
                <div
                  className="d-flex flex-column justify-content-around cart align-items-start p-2"
                  style={{
                    border: "2px solid #FF6633",
                    backgroundColor: "rgba(255,102,51,0.05)",
                    // width: "130px",
                  }}
                >
                  <div className="gap-5 text-start">
                    <span className="starers me-2">10:00</span>
                    <span className="starers">11:59</span>
                  </div>
                  <p className="heading text-start">
                    Choosing A Quality Cookware Set
                  </p>
                  <div className="text-start">
                    <img
                      src={cark}
                      width="26px"
                      height="26px"
                      className="me-2"
                      alt="Avatar"
                    />
                    <img src={carts7} width="26px" height="26px" alt="Avatar" />
                  </div>
                </div>
              </td>
              <td rowSpan={3}>
                <div
                  className="d-flex flex-column justify-content-between cart align-items-start p-2"
                  style={{
                    border: "2px solid #FFCB33",
                    backgroundColor: "rgba(255,102,51,0.05)",
                    // width: "150px",
                  }}
                >
                  <div className="d-flex flex-column">
                    <div className="d-flex gap-1">
                      <span className="staryellow">10:00</span>
                      <span className="staryellow">12:59</span>
                    </div>
                    <p className="heading text-start">
                      Astronomy Binoculars: A Great Alternative
                    </p>
                  </div>
                  <div className="text-start">
                    <img
                      src={card5}
                      width="26px"
                      height="26px"
                      className="me-2"
                      alt="Avatar"
                    />
                    <img src={card6} width="26px" height="26px" alt="Avatar" />
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                11
              </td>
              <td></td>
              <td rowSpan="1">
                <div
                  className="d-flex flex-column  cart  p-1"
                  style={{
                    border: "2px solid orange",
                    backgroundColor: "rgba(255,102,51,0.05)",
                  
                  }}
                >
                  <div>
                    <span className="stared">11:00</span>
                    <img
                      src={card3}
                      width="25px"
                      height="25px"
                      className="me-2"
                      alt="Avatar"
                    />
                    <img src={card4} width="25px" height="25px" alt="Avatar" />
                    <p className="cart2" style={{ fontSize: "12px" }}>
                    The Amazing Hubble
                    </p>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                12
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td rowSpan={3}>
                <div className="d-flex flex-column justify-content-between universal  p-2 ">
                  <div className="text-start">
                    <span className="universale me-2">11:00</span>
                    <span className="universale ">11:00</span>
                    <p className="cart2 " style={{ fontSize: "12px" }}>
                      The Universal Through A Child S Eyes
                    </p>
                  </div>
                  <div className="text-start">
                  <img
                      src={lastdiv}
                      width="26px"
                      height="26px"
                      className="me-2"
                      alt="Avatar"
                    />
                    <img src={lastdiv1} width="26px" height="26px" alt="Avatar" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                13
              </td>
              <td></td>
              <td className="event-4" rowSpan="3" >
                <div
                  className="d-flex flex-column justify-content-between cart align-items-start  p-2"
                  style={{
                    border: "2px solid #8833FF",
                    backgroundColor: "#8833FF0D",
                  
                  }}
                >
                <div>
                <div className="d-flex gap-1">
                    <span className="starviolet ">09:00</span>
                    <span className="starviolet">10:59</span>
                  </div>
                  <p className="cart2 mt-2"> Choosing A Quality Cookware Set</p>
                </div>
                  <div className="text-start">
                    <img
                      src={carts9}
                      width="26px"
                      height="26px"
                      className="me-2"
                      alt="Avatar"
                    />
                    <img src={cards1} width="26px" height="26px" alt="Avatar" />
                  </div>
                </div>
              </td>{" "}
              <td></td>
              <td rowSpan="1">
                <div
                  className="d-flex flex-column  cart   p-1"
                  style={{
                    border: "2px solid  #33BFFF",
                    backgroundColor: "#33BFFF0D",
                  
                  }}
                >

                    <div className="d-flex">
                      <span className="starpink">13:00</span>
                      <img
                        src={card7}
                        width="26px"
                        height="26px"
                        className="me-2"
                      ></img>
                       <img src={card8} width="26px" height="26px"></img>
                    </div>

                  <p className="cart2">The Amazing Hubble</p>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                14
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
            </tr>
            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                15
              </td>
              <td></td>
              <td className="event-4" rowSpan="3">
                <div
                  className="d-flex flex-column justify-content-around cart align-items-start  p-2"
                  style={{
                    border: "2px solid #E62E7B",
                    backgroundColor: "#8833FF0D",
                  
                  }}
                >
                  <div className="d-flex gap-1">
                    <span className="starblue ">15.00</span>
                    <span className="starblue">17:59</span>
                  </div>

                  <p className="cart2">
                    {" "}
                    Astronomy Binoculars A Great Alternative
                  </p>

                  <div className="text-start">
                    <img
                      src={carts2}
                      width="26px"
                      height="26px"
                      className="me-2"
                    ></img>
                    <img src={carts3} width="26px" height="26px"></img>
                  </div>
                </div>
              </td>{" "}
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                16
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td rowSpan={2}>
                <div className="d-flex flex-column justify-content-around quality align-items-start p-2">
                  <div className="d-flex flex-column">
                    <div className="d-flex ">
                      <span className="qualities me-2">13:00</span>
                      <span className="qualities">14:59</span>
                    </div>
                    <p className="heading text-start">Choosing  A Quality Cookware Set</p>
                  </div>
                  <div>
                  <img
                        src={lastdiv2}
                        width="26px"
                        height="26px"
                        className="me-2"
                      ></img>
              <img src={lastdiv3} width="26px" height="26px"></img>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                17
              </td>
              <td className="event-4" rowSpan="3">
                <div
                  className="d-flex flex-column justify-content-between cart align-items-start  p-2"
                  style={{
                    border: "2px solid #33BFFF",
                    backgroundColor: "#33BFFF0D",
                  
                  }}
                >
                  <div className="d-flex flex-column gap-1">
                    <div className="text-start ">
                    <span className="starpink me-1">17.00</span>
                    <span className="starpink">19:59</span>
                    </div>
                    <div>
                    <p className="cart2">The Amazing Hubble</p>
                    </div>
                  </div>
                  
                  <div className=" d-flex">
                    <div className="">
                      <img
                        src={carts8}
                        width="26px"
                        height="26px"
                        className="me-2"
                      ></img>
                    </div>
                    <div className="col">
                      <img src={carts9} width="26px" height="26px"></img>
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                18
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
            </tr>
            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                19
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
            </tr>

            <tr>
              <td
                style={{
                  height: "67px",
                  width: "62px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                20
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="event" rowSpan="2"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
