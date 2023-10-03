import { Stack, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../utilities/BEL.NS-40caa314.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
const Footer = () => {
  return (
    <Stack
      style={{
        backgroundColor: "#1c4ca4",
        padding: 30,
      }}
      marginTop={5}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        paddingBottom={3}
        borderBottom={1}
      >
        <Stack>
          <img
            src={`${Logo}`}
            style={{
              height: "70px",
              width: "100px",
            }}
            alt=""
          />
          <Typography variant="subtitle1" color="#f8f0e5e0">
            Bharat Electronics Limited
          </Typography>
        </Stack>
        <Stack gap={1.2}>
          <Typography variant="h5" color="#F8F0E5">
            Contact:
          </Typography>
          <Typography variant="subtitle1" color="#f8f0e5e0">
            <PlaceIcon
              style={{
                marginRight: "5px",
              }}
            />
            BEL CIRCLE BENGALURU
          </Typography>
          <Typography variant="subtitle1" color="#f8f0e5e0">
            <PhoneInTalkIcon
              style={{
                marginRight: "5px",
              }}
            />{" "}
            +912232323232
          </Typography>
          <Typography variant="subtitle1" color="#f8f0e5e0">
            <EmailIcon
              style={{
                marginRight: "5px",
              }}
            />
            bel@gmail.com
          </Typography>
          <Stack flexDirection="row" gap={1}>
            <NavLink to="/">
              <InstagramIcon
                style={{
                  color: "#f8f0e5e0",
                }}
              />
            </NavLink>
            <NavLink to="/">
              <FacebookIcon
                style={{
                  color: "#EADBC8",
                }}
              />
            </NavLink>
            <NavLink to="/">
              <LinkedInIcon
                style={{
                  color: "#EADBC8",
                }}
              />
            </NavLink>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h5" color="#EADBC8">
            Links
          </Typography>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography variant="subtitle1" color="#f8f0e5e0">
              Home
            </Typography>
          </NavLink>
          <NavLink
            to="/aboutus"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography variant="subtitle1" color="#f8f0e5e0">
              About Us
            </Typography>
          </NavLink>
          <NavLink
            to="/contactus"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography variant="subtitle1" color="#f8f0e5e0">
              Contact Us
            </Typography>
          </NavLink>
          <NavLink
            to="/upload"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography variant="subtitle1" color="#f8f0e5e0">
              Upload
            </Typography>
          </NavLink>
        </Stack>
      </Stack>
      <Typography
        variant="caption"
        color="#EADBC8"
        style={{
          textAlign: "center",
        }}
      >
        Created By:Akhil K K, Parnika J , Akshay Raj and Pavan K S
      </Typography>
    </Stack>
  );
};

export default Footer;
