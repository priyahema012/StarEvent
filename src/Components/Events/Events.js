import React, {useState} from "react";
import { Card } from "antd"; // Keep Card from Ant Design for layout
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

  const [imagePreview, setImagePreview] = useState(null); 

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); 
    }
  }

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
              <input
                name="eventName"
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
              <label className={Classes.category}>Category</label>
              <br />
              <input
                name="category"
                placeholder="Text Input"
                className={`form-control ${Classes.Basic}`}
                value={values.category}
                onChange={handleChange}
              />
              {errors.category && touched.category ? (
                <div style={{ color: "red" }}>{errors.category}</div>
              ) : null}
            </div>

            <div className={Classes.col}>
              <label className={Classes.date}>Date & Time</label>
              <br />
              <div className={Classes.inputWrapper}>
                <input
                  name="dateTime"
                  placeholder="2024-07-12 09:00 AM"
                  className={`form-control ${Classes.Basic}`}
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
                <input
                  name="description"
                  placeholder="Text Input"
                  className={`form-control ${Classes.Basic}`}
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
              <label className={Classes.description}>Total Ticket</label>
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
              <label className={Classes.description}>Ticket Price</label>
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

          <h4 className={Classes.speaker}>Speaker Information</h4>
          <br />

          <div className={Classes.row}>
            <div className={Classes.col}>
              <label className={Classes.event}>Name</label>
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
              <label className={Classes.category}>Phone Number</label>
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
              <label className={Classes.date}>Designation</label>
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
      <label className={Classes.category}>Upload Image</label>
      <div className={Classes.uploadWrapper} style={{ position: "relative" }}>
        <br />
        <div style={{ width: "330px", position: "relative" }}>
          <input
            type="file" // Changed input type to file
            name="imageUpload"
            accept="image/*" // Restrict to image files only
            className={`form-control ${Classes.Basic}`}
            onChange={handleImageChange} // Handle image file selection
          />
          {imagePreview ? (
            <img
              src={imagePreview} // Display the selected image
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
              src={upload} // Fallback to upload icon
              alt="icon"
              style={{
                left: "300px",
                bottom: "30px",
                position: "relative",
              }}
            />
          )}
        </div>

        {errors.description && touched.description ? (
          <div style={{ color: "red" }}>{errors.description}</div>
        ) : null}
      </div>
    </div>

          <br />

          <div className={Classes.buttonContainer}>
            <button type="submit" className={`btn btn-primary ${Classes.submit}`}>
              Publish Event
            </button>
            <button type="button" className={`btn btn-secondary ${Classes.submit1}`}>
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Events;
