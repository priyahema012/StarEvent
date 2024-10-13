import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Card } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { history } from "../../Axios/Services";
import Filter from "../../Components/Customer/Filter";
import { Pagination } from "antd";
import "./Customer.css";

const Customer = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("userdata") || "";
  const [filterVisible, setFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize] = useState(7);
  const [search, setSearch] = useState({ fromDatetime: "", toDatetime: "" });

  const handleFilterToggle = () => {
    setFilterVisible(!filterVisible);
  };

  const handleHistory = (currentPage = 1, size = 10) => {
    const formData = new FormData();
    formData.append("token", token);

    if (search.fromDatetime) {
      formData.append("fromDatetime", search.fromDatetime);
    }
    if (search.toDatetime) {
      formData.append("toDatetime", search.toDatetime);
    }

    history(formData, currentPage, size)
      .then((res) => {
        if (res?.data?.data?.items) {
          setData(res.data.data.items[0].data);
          setTotalItems(res.data.data.total_count);
        }
      })
      .catch((error) => {
        console.error("API call failed", error);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (token) {
      handleHistory(currentPage, pageSize);
    }
  }, [token, currentPage, pageSize]);

  return (
    <Container fluid style={{backgroundColor:"gainsboro" , height:"700px"}}>
      <Row>
        <Col>
          <Card>
            <Card.Header style={{ backgroundColor: "#ffffff" }}>
              <div className="d-flex justify-content-between align-items-center mt-2 ">
                <h5>All Customers</h5>
                <Button
                  onClick={handleFilterToggle}
                  className="mr-2"
                  style={{ backgroundColor: "#C42072" }}
                >
                  <FaSearch />
                </Button>
              </div>
              {filterVisible && (
                <div className="mb-3">
                  <Filter functioncall={handleHistory} />
                </div>
              )}
            </Card.Header>
            <Card.Body>
              <Table hover>
                <thead>
                  <tr style={{ backgroundColor: "gainsboro" }}>
                    <th className="text-start">Customer Name</th>
                    <th className="text-start">Ticket Ordered</th>
                    <th className="text-start">Location</th>
                    <th className="text-start">Email</th>
                    <th className="text-start">Last Login</th>
                    <th className="text-start">Total Spent</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={index}>
                        <td className="text-start">{item.device_id}</td>
                        <td className="text-start">{item.device_name}</td>
                        <td className="text-start">{item.date}</td>
                        <td className="text-start">{item.on_time}</td>
                        <td className="text-start">{item.off_time}</td>
                        <td className="text-start" style={{ color: "blue" }}>
                          {item.max_value}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

              <div className="row mt-4">
                <div className="col">
                  <h6>Page 1 of 46</h6>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-center ">
                    <Pagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={totalItems}
                      onChange={handlePageChange}
                      prevIcon={
                        <Button variant="outline-primary">Previous</Button>
                      }
                      nextIcon={<Button variant="outline-primary">Next</Button>}
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Customer;
