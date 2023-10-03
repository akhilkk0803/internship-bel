import React from "react";
import "./features.css";
import accuracry from "../utilities/accuracy-target-logo-icon-design-can-be-used-as-complement-to-127675984.webp";
import Typography from "@mui/material/Typography";
import feedback from "../utilities/feedback.jpg";
import scalable from "../utilities/scalable.jpg";
import fast from "../utilities/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg";
const Features = () => {
  const ft = [
    {
      img: accuracry,
      title: "High accuracy",
    },
    {
      img: fast,
      title: "Fast Results",
    },
    {
      img: feedback,
      title: "Real Time Feedback",
    },
    {
      img: scalable,
      title: "Scalablity",
    },
  ];
  return (
    <div className="features">
      <Typography variant="h3" color="initial">
         FEATURES
      </Typography>
      <div className="all-features">
        {ft.map((el) => (
          <div className="box">
            <img src={`${el.img}`} alt="ft" className="ft-img" />
            <Typography
              variant="subtitle1"
              color="intial"
              style={{
                fontWeight: "bold",
              }}
            >
              {el.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
