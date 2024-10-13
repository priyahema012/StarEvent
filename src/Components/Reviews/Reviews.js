import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Card } from "react-bootstrap";
import date from "../../Assests/Images/Input Field (1).png";
import per from "../../Assests/Images/image 20 (1).png";
import per1 from "../../Assests/Images/image 20 (2).png";
import per2 from "../../Assests/Images/image 20 (3).png";
import per3 from "../../Assests/Images/image 20 (4).png";
import per4 from "../../Assests/Images/image 20 (5).png";
import per5 from "../../Assests/Images/image 20 (6).png";
import per6 from "../../Assests/Images/image 20 (7).png";
import per7 from "../../Assests/Images/image 20 (8).png";
import Classes from "./Reviews.module.css";
import { Button, Pagination } from "react-bootstrap";
import reviewsData from "../Reviews/Reviews.json";

const Reviews = () => {
  const [data, setData] = useState([]);
  const customerImages = [per, per1, per2, per3, per4, per5, per6, per7];

  useEffect(() => {
    setData(reviewsData);
  }, []);

  return (
    <Container
      fluid
      className="vh-100 mt-2"
      style={{ backgroundColor: "gainsboro", minHeight: "170vh" }}
    >
      <Row>
        <Col>
          <Card>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h5 style={{ marginLeft: "20px" }}>Reviews</h5>
              <img src={date} style={{ marginRight: "14px" }} alt="Date Icon" />
            </div>

            <Card.Body>
              <Table hover responsive borderless>
                <thead>
                  <tr style={{ backgroundColor: "gainsboro" }}>
                    <th
                      className={`${Classes.table} text-start`}
                      style={{ width: "20%" }}
                    >
                      Customer
                    </th>
                    <th
                      className={`${Classes.table} text-start`}
                      style={{ width: "15%" }}
                    >
                      Date
                    </th>
                    <th
                      className={`${Classes.table} text-start`}
                      style={{ width: "20%" }}
                    >
                      Event Name
                    </th>
                    <th
                      className={`${Classes.table} text-start`}
                      style={{ width: "40%" }}
                    >
                      Review & Comment
                    </th>
                    <th
                      className={`${Classes.table} text-start`}
                      style={{ width: "5%" }}
                    ></th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      style={{ borderBottom: "2px solid #dfd9d9f8" }}
                    >
                      <td className="text-start" style={{ border: "none" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={customerImages[index % customerImages.length]}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "10px",
                            }}
                            alt="customer"
                          />

                          <div style={{ marginLeft: "10px" }}>
                            <p style={{ margin: "0", marginTop: "10px" }}>
                              {item.customer}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-start" style={{ border: "none" }}>
                        {item.date}
                      </td>
                      <td className="text-start" style={{ border: "none" }}>
                        {item.eventName}
                      </td>
                      <td className="text-start" style={{ border: "none" }}>
                        <div className="text-start">
                          {[...Array(5)].map((star, i) => (
                            <span
                              key={i}
                              style={{
                                color: i < item.rating ? "#F9B931" : "#d3d3d3",
                                fontSize: "16px",
                              }}
                            >
                              &#9733;
                            </span>
                          ))}
                        </div>
                        <p
                          className="text-start"
                          style={{ fontSize: "12px", marginTop: "5px" }}
                        >
                          {item.review}
                        </p>
                      </td>
                      <td
                        className="text-start text-center"
                        style={{ border: "none" }}
                      >
                        ...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>

            <div className="row mt-4">
              <div className="col m-4">
                <h6>Page 1 of 8</h6>
              </div>
              <div className="col">
                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{ borderColor: "#757575", color: " #757575" }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#C42072",
                      borderColor: "#757575",
                    }}
                  >
                    1
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{ borderColor: "#757575", color: " #757575" }}
                  >
                    2
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{ borderColor: "#757575", color: " #757575" }}
                  >
                    3
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{ borderColor: "#757575", color: " #757575" }}
                  >
                    4
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{ borderColor: "#757575", color: " #757575" }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
