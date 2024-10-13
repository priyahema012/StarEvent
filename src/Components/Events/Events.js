import React from "react";
import { Input, Card, Upload, Button } from "antd";
import { DownOutlined, UploadOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import Classes from "./Events.module.css";
import calculator from "../../Assests/Images/calendar (1).png";
import events from "../../Assests/Images/resize-textarea.png";
import upload from "../../Assests/Images/document-upload (1).png";

const EventSchema = Yup.object().shape({
  eventName: Yup.string().required("Event Name is required"),
  category: Yup.string().required("Category is required"),
  dateTime: Yup.string().required("Date & Time is required"),
  description: Yup.string().required("Description is required"),
  location: Yup.string().required("Location is required"),
  totalTicket: Yup.number().required("Total Tickets are required"),
  ticketPrice: Yup.number().required("Ticket Price is required"),
  speakerName: Yup.string().required("Speaker Name is required"),
  speakerPhone: Yup.string().required("Speaker Phone is required"),
  speakerDesignation: Yup.string().required("Speaker Designation is required"),
});

function Events() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      eventName: "",
      category: "",
      dateTime: "",
      description: "",
      location: "",
      totalTicket: "",
      ticketPrice: "",
      speakerName: "",
      speakerPhone: "",
      speakerDesignation: "",
    },
    validationSchema: EventSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={`${Classes.background} mt-2`}>
      <Card className={Classes.card}>
        <form onSubmit={handleSubmit}>
          <h5 className={Classes.line}>Create New Event</h5>
          <h4 className={Classes.line1}>Event Information</h4>

          <div className={Classes.row}>
            <div className={Classes.col}>
              <label className={Classes.event}>Event Name</label>
              <br />
              <Input
                name="eventName"
                placeholder="Text Input"
                className={Classes.Basic}
                value={values.eventName}
                onChange={handleChange}
              />
              {errors.eventName && touched.eventName ? (
                <div style={{ color: "red" }}>{errors.eventName}</div>
              ) : null}
            </div>
            <div className={Classes.col}>
              <label className={Classes.category}>Category</label>
              <br />
              <div className={Classes.inputWrapper}>
                <Input
                  name="category"
                  placeholder="Text Input"
                  className={Classes.Basic}
                  value={values.category}
                  onChange={handleChange}
                />
                <span className={Classes.icon}>
                  <DownOutlined />
                </span>
              </div>
              {errors.category && touched.category ? (
                <div style={{ color: "red" }}>{errors.category}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={Classes.date}>Date & Time</label>
              <br />
              <div className={Classes.inputWrapper}>
                <Input
                  name="dateTime"
                  placeholder="2024-07-12 09:00 AM"
                  className={Classes.Basic}
                  value={values.dateTime}
                  onChange={handleChange}
                />
                <img
                  src={calculator}
                  alt="Calendar Icon"
                  className={Classes.icon}
                />
              </div>
              {errors.dateTime && touched.dateTime ? (
                <div style={{ color: "red" }}>{errors.dateTime}</div>
              ) : null}
            </div>
          </div>

          <br />

          <div className={Classes.rows}>
            <div className={Classes.colss} style={{ position: "relative" }}>
              <label className={Classes.description}>Description</label>
              <br />
              <div className={Classes.inputWrapper}>
                <Input
                  name="description"
                  placeholder="Text Input"
                  className={Classes.Basic}
                  value={values.description}
                  style={{
                    height: "70px",
                    marginTop: "5px",
                    paddingRight: "20px",
                  }}
                  onChange={handleChange}
                />
                {errors.description && touched.description ? (
                  <div style={{ color: "red" }}>{errors.description}</div>
                ) : null}

                <img
                  src={events}
                  alt="icon"
                  className={Classes.icon}
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "10px",
                    height: "25px",
                    width: "20px",
                  }}
                />
              </div>
            </div>
          </div>

          <br />

          <div className={Classes.row}>
            <div className={Classes.col}>
              <label className={Classes.description}>Location</label>
              <br />
              <Input
                name="location"
                placeholder="Text Input"
                className={Classes.Basic}
                value={values.location}
                onChange={handleChange}
              />
              {errors.location && touched.location ? (
                <div style={{ color: "red" }}>{errors.location}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={Classes.description}>Total Ticket</label>
              <br />
              <Input
                name="totalTicket"
                placeholder="0"
                className={Classes.Basic}
                value={values.totalTicket}
                onChange={handleChange}
              />
              {errors.totalTicket && touched.totalTicket ? (
                <div style={{ color: "red" }}>{errors.totalTicket}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={Classes.description}>Ticket Price</label>
              <br />
              <Input
                name="ticketPrice"
                placeholder="0"
                className={Classes.Basic}
                value={values.ticketPrice}
                onChange={handleChange}
              />
              {errors.ticketPrice && touched.ticketPrice ? (
                <div style={{ color: "red" }}>{errors.ticketPrice}</div>
              ) : null}
            </div>
          </div>

          <br />

          <h4 className={Classes.speaker}>Speaker Information</h4>
          <br />

          <div className={Classes.row}>
            <div className={Classes.col}>
              <label className={Classes.event}>Name</label>
              <br />
              <Input
                name="speakerName"
                placeholder="Minato Namikaze"
                className={Classes.Basic}
                value={values.speakerName}
                onChange={handleChange}
              />
              {errors.speakerName && touched.speakerName ? (
                <div style={{ color: "red" }}>{errors.speakerName}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={Classes.category}>Phone Number</label>
              <br />
              <Input
                name="speakerPhone"
                placeholder="7444213236"
                className={Classes.Basic}
                value={values.speakerPhone}
                onChange={handleChange}
              />
              {errors.speakerPhone && touched.speakerPhone ? (
                <div style={{ color: "red" }}>{errors.speakerPhone}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={Classes.date}>Designation</label>
              <br />
              <Input
                name="speakerDesignation"
                placeholder="Anchor"
                className={Classes.Basic}
                value={values.speakerDesignation}
                onChange={handleChange}
              />
              {errors.speakerDesignation && touched.speakerDesignation ? (
                <div style={{ color: "red" }}>{errors.speakerDesignation}</div>
              ) : null}
            </div>
          </div>

          <br />

          <div className={Classes.col}>
  <label className={Classes.category}>Upload Image</label>
  <div className={Classes.uploadWrapper} style={{ position: "relative" }}>
    <Input
      name="speakerPhone"
      placeholder="7444213236"
      className={Classes.upload}
      value={values.speakerPhone}
      onChange={handleChange}
    />
       <img
                  src={upload}
                  alt="icon"
                 
                  style={{
                     right:"25px",
                     position:"relative"
                  }}
                />
    {errors.speakerPhone && touched.speakerPhone ? (
      <div style={{ color: "red" }}>{errors.speakerPhone}</div>
    ) : null}

  
      
  
  </div>
</div>

          <br />

          <div className={Classes.buttonContainer}>
            <Button type="text" htmlType="submit" className={Classes.submit}>
              Publish Event
            </Button>
            <Button type="text" className={Classes.submit1}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Events;
