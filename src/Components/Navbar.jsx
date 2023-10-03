import React, { useState } from "react";
import { AppBar, Stack, Toolbar, Box, Typography } from "@mui/material";
import Logo from "../utilities/BEL.NS-40caa314.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  const [active, setactive] = useState(null);
  return (
    <div
      style={{
        marginBottom: "100px",
      }}
    >
      <AppBar position="static">
        <Toolbar
          variant="regular"
          style={{
            paddingTop: "20px ",
            paddingBottom: "20px",
          }}
        >
          <Stack flex={1}>
            <Box>
              <NavLink
                to="/"
                onClick={() => {
                  setactive(null);
                }}
              >
                <img
                  src={`${Logo}`}
                  alt="Logo"
                  style={{
                    height: "70px",
                    width: "100px",
                  }}
                />
              </NavLink>
            </Box>
          </Stack>
          <Stack direction="row" gap={5} justifyContent="space-between">
            <div>
              <NavLink
                to="/aboutus"
                style={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  setactive("about");
                }}
              >
                <Typography
                  variant="h6"
                  color={`${active === "about" ? "white" : "initial"}`}
                >
                  AboutUs
                </Typography>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/contactus"
                style={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  setactive("contact");
                }}
              >
                <Typography
                  variant="h6"
                  color={`${active === "contact" ? "white" : "initial"}`}
                >
                  ContactUs
                </Typography>
              </NavLink>
            </div>
            <div>
              <NavLink
                onClick={() => {
                  setactive("upload");
                }}
                to="/upload"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="h6"
                  color={`${active === "upload" ? "white" : "initial"}`}
                >
                  Upload
                </Typography>
              </NavLink>
            </div>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
