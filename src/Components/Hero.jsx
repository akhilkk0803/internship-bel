import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Button } from "@mui/material";
import Radar from "../utilities/ship-radar-screen-military-sonar-digital-display_53500-1313.avif";
import "./Hero.css";
import { NavLink } from "react-router-dom";
const Hero = ({text}) => {
  return (
    <div className="hero">
      <div>
        <Typography variant="h6" color="initial" component="p">
         {text}
        </Typography>
        <NavLink to="upload">
          <Button variant="contained" color="primary">
            TEST NOW
          </Button>
        </NavLink>
      </div>
      <div>
        <img src={`${Radar}`} alt="" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
