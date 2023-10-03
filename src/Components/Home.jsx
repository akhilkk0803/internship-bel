import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import DataSet from "./DataSet";
import "./Home.css";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ContactPageIcon from "@mui/icons-material/ContactPage";
const Home = () => {
  const text =
    "Radar, the guardian of modern warfare, stands at the forefront of military operations, offering unmatched precision in detecting and tracking objects. Explore the evolution of radar from wartime secrecy to its critical role in today's defense. Discover how radar empowers military forces with unparalleled situational awareness, aiding swift responses to threats in the air, on land, and at sea.";
  return (
    <div>
      <Hero text={text} />
      <Features />
      <DataSet />
      <div className="contact">
        <div className="work">
          <Typography variant="h4" color="secondary">
            Want to work with us?
          </Typography>
          <NavLink to="/contactus">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ContactPageIcon />}
            >
              Click Here
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
