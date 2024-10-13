import React, { useState } from "react";
import { Card } from "antd"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import Classes from "./Events.module.css";
import calculator from "../../Assests/Images/calendar (1).png";
import events from "../../Assests/Images/resize-textarea.png";
import upload from "../../Assests/Images/document-upload (1).png";
import TextArea from "antd/es/input/TextArea";

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
  imageUpload:Yup.string().required("image is required"),
});

function Events() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const [selectedValue, setSelectedValue] = useState("");

  
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

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
      imageUpload:""
      

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
              <label className={`${Classes.event } form-label`}>Event Name</label>
              <br />
              <input
                name="eventName "
                placeholder="Text Input"
                className={`form-control ${Classes.Basic}`}
                value={values.eventName}
                onChange={handleChange}
              />
              {errors.eventName && touched.eventName ? (
                <div style={{ color: "red" }}>{errors.eventName}</div>
              ) : null}
            </div>
            <div className={Classes.col}>
              <label className={`${Classes.category}form-label mb-2 fw-bold`}>Category</label>
              <br />

              <div className="mt-1">
                <select
                  id="dropdown"
                  className="form-select droped "
                  value={selectedValue}
                  onChange={handleSelectChange}
                  style={{ backgroundColor: "gainsboro" , height:"40px"}}
                >
                  <option value="" disabled>
                    Text Input
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                    
              </div>

              {errors.category && touched.category ? (
                <p style={{ color: "red" }}>{errors.category}</p>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={`${Classes.date} form-label`}>Date & Time</label>
              <br />
              <div className={Classes.inputWrapper}>
                <input
                  type="date"
                  name="dateTime"
                  placeholder="2024-07-12 09:00 AM"
                  className={`form-control ${Classes.Basic}`}
                  value={values.dateTime}
                  onChange={handleChange}
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
              <label className={`${Classes.description } form-label`}>Description</label>
              <br />
              <div className={Classes.inputWrapper}>
             
                <textarea
                style={{backgroundColor:"gainsboro"}}
                  rows={3}
                  className="form-control droped"
                  onChange={handleChange}
                  placeholder="Text Input "
                ></textarea>
                {errors.description && touched.description ? (
                  <div style={{ color: "red" }}>{errors.description}</div>
                ) : null}
              </div>
            </div>
          </div>

          <br />

          <div className={Classes.row}>
            <div className={Classes.col}>
              <label className={`${Classes.description } form-label`}>Location</label>
              <br />
              <input
                name="location"
                placeholder="Text Input"
                className={`form-control ${Classes.Basic}`}
                value={values.location}
                onChange={handleChange}
              />
              {errors.location && touched.location ? (
                <div style={{ color: "red" }}>{errors.location}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={`${Classes.description } form-label`}>Total Ticket</label>
              <br />
              <input
                name="totalTicket"
                placeholder="0"
                className={`form-control ${Classes.Basic}`}
                value={values.totalTicket}
                onChange={handleChange}
              />
              {errors.totalTicket && touched.totalTicket ? (
                <div style={{ color: "red" }}>{errors.totalTicket}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={`${Classes.description } form-label`}>Ticket Price</label>
              <br />
              <input
                name="ticketPrice"
                placeholder="0"
                className={`form-control ${Classes.Basic}`}
                value={values.ticketPrice}
                onChange={handleChange}
              />
              {errors.ticketPrice && touched.ticketPrice ? (
                <div style={{ color: "red" }}>{errors.ticketPrice}</div>
              ) : null}
            </div>
          </div>

          <br />

          <h4 className={`${Classes.speaker } form-label`}>Speaker Information</h4>
          <br />

          <div className={Classes.row}>
            <div className={Classes.col}>
              <label className={`${Classes.event} form-label` }>Name</label>
              <br />
              <input
                name="speakerName"
                placeholder="Minato Namikaze"
                className={`form-control ${Classes.Basic}`}
                value={values.speakerName}
                onChange={handleChange}
              />
              {errors.speakerName && touched.speakerName ? (
                <div style={{ color: "red" }}>{errors.speakerName}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={`${Classes.category } form-label`}>Phone Number</label>
              <br />
              <input
                name="speakerPhone"
                placeholder="7444213236"
                className={`form-control ${Classes.Basic}`}
                value={values.speakerPhone}
                onChange={handleChange}
              />
              {errors.speakerPhone && touched.speakerPhone ? (
                <div style={{ color: "red" }}>{errors.speakerPhone}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={`${Classes.date} form-label`}>Designation</label>
              <br />
              <input
                name="speakerDesignation"
                placeholder="Anchor"
                className={`form-control ${Classes.Basic}`}
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
            <label className="form-label fw-bold">Upload Image</label>
            <div
              className={Classes.uploadWrapper}
              style={{ position: "relative" }}
            >
             
              <div style={{ width: "330px", position: "relative" }}>
                <input
                style={{height:"55px"}}
                  type="file" 
                  name="imageUpload"
                  accept="image/*" 
                  className={`form-control ${Classes.Basic}`}
                  onChange={handleImageChange} 
                />
                {imagePreview ? (
                  <img
                    src={imagePreview} 
                    alt="Uploaded"
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                    }}
                  />
                ) : (
                  <img
                    src={upload} 
                    alt="icon"
                    style={{
                      left: "300px",
                      bottom: "30px",
                      position: "relative",
                    }}
                  />
                )}
              </div>

              {errors.imageUpload && touched.imageUpload ? (
                <p style={{ color: "red" }}>{errors.imageUpload}</p>
              ) : null}
            </div>
          </div>

          <br />

          <div className={Classes.buttonContainer}>
            <button
              type="submit"
              className={`btn btn-primary ${Classes.submit}`}
            >
              Publish Event
            </button>
            <button
              type="button"
              className={`btn btn-secondary ${Classes.submit1}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Events;
