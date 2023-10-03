import React from "react";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  CardActions,
  Button,
} from "@mui/material";
import { data } from "./data";
import { NavLink } from "react-router-dom";
const DataSet = () => {
  return (
    <div>
      <Typography
        variant="h3"
        color="initial"
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        OUR DATASET
      </Typography>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        flexWrap="wrap"
        gap={10}
      >
        {data.map((el) => (
          <Card
            sx={{ maxWidth: 360 }}
            style={{
              marginBottom: "20px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <CardMedia sx={{ height: 190 }} image={`${el.img}`} />
            <CardContent>
              <Stack gap={1} justifyContent="center">
                <Typography variant="h4" color="primary">
                  {el.title}
                </Typography>
                <Typography variant="body1" color="initial">
                  {el.desciption}
                </Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <NavLink to="/upload">
                <Button variant="outlined" color="primary" size="small">
                  TEST NOW
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default DataSet;
