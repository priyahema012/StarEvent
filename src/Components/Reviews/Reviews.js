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
import { Button } from "react-bootstrap";
import reviewsData from "../Reviews/Reviews.json";
import { DatePicker } from "antd";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const reviewsPerPage = 3; 
  const customerImages = [per, per1, per2, per3, per4, per5, per6, per7];

  useEffect(() => {
    setData(reviewsData);
  }, []);

 
  const totalPages = Math.ceil(data.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = data.slice(indexOfFirstReview, indexOfLastReview);

 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
              <DatePicker style={{ marginRight: "14px" }} /> 
            </div>

            <Card.Body>
              <Table hover responsive borderless>
                <thead>
                  <tr style={{ backgroundColor: "gainsboro" }}>
                    <th className={`${Classes.tables} text-start text-black`} style={{ width: "20%" }}>
                      Customer
                    </th>
                    <th className={`${Classes.tabls} text-start text-black`} style={{ width: "15%" }}>
                      Date
                    </th>
                    <th className={`${Classes.tables} text-start text-black`} style={{ width: "20%" }}>
                      Event Name
                    </th>
                    <th className={`${Classes.tables} text-start text-black`} style={{ width: "40%" }}>
                      Review & Comment
                    </th>
                    <th className={`${Classes.tables} text-start text-black`} style={{ width: "5%" }}>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {currentReviews.map((item, index) => (
                    <tr key={index} style={{ borderBottom: "2px solid #dfd9d9f8" }}>
                      <td className="text-start" style={{ border: "none" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={customerImages[index % customerImages.length]}
                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                            alt="customer"
                          />
                          <div style={{ marginLeft: "10px" }}>
                            <p style={{ margin: "0", marginTop: "10px" }}>{item.customer}</p>
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
                        <p className="text-start" style={{ fontSize: "12px", marginTop: "5px" }}>
                          {item.review}
                        </p>
                      </td>
                      <td className="text-start text-center" style={{ border: "none" }}>
                        ...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>

            {/* Pagination Section */}
            <div className="row mt-4">
              <div className="col m-4">
                <h6>Page {currentPage} of {totalPages}</h6>
              </div>
              <div className="col">
                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{ borderColor: "#757575", color: " #757575" }}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index}
                      variant="outline-primary"
                      className="me-3"
                      style={{
                        color: currentPage === index + 1 ? "#ffffff" : "#757575",
                        backgroundColor: currentPage === index + 1 ? "#C42072" : "transparent",
                        borderColor: "#757575",
                      }}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline-primary"
                    className="me-3"
                    style={{ borderColor: "#757575", color: " #757575" }}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
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
