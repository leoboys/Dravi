import { Link, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CSS/Cover.css";
import { ReactComponent as Logo } from "./SVG/Dravi.svg";
import { ReactComponent as Bank } from "./SVG/cover.svg";
import { ReactComponent as Money } from "./SVG/money.svg";
import { ReactComponent as Fund } from "./SVG/fund.svg";
import { ReactComponent as Estate } from "./SVG/estate.svg";
import { ReactComponent as BriefCase } from "./SVG/briefcase.svg";
import { ReactComponent as Safety } from "./SVG/safety.svg";
import { ReactComponent as GoldStack } from "./SVG/goldstack.svg";
import { ReactComponent as Build } from "./SVG/building.svg";
import { ReactComponent as Menu1 } from "./SVG/mainmenu.svg";
// import { Link } from "react-router-dom";
// import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Cover() {
  const states = [
    {
      value: "USD",
      label: "Chennai",
    },
    {
      value: "EUR",
      label: "Madurai",
    },
    {
      value: "BTC",
      label: "Bangalore",
    },
    {
      value: "JPY",
      label: "Thrichi",
    },
  ];

  const types = [
    {
      value: "1",
      label: "Type 1",
    },
    {
      value: "2",
      label: "Property type",
    },
    {
      value: "3",
      label: "Type 3",
    },
    {
      value: "4",
      label: "Type 4",
    },
  ];

  // -----------------------------------------------------------------

  // ----------------------------------------------------------------

  const [state, setState] = React.useState("USD");
  const [type, setType] = React.useState("2");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="coverbody">
      {/* -----------------Header Line------------------------ */}
      <Box sx={{ display: "flex", p: 0, bgcolor: "background.paper" }}>
        <Box sx={{ p: 1, flexGrow: 0, bgcolor: "grey.300" }}>
          {" "}
          <Logo className="logo" />{" "}
        </Box>
        <Box sx={{ p: 0, flexGrow: 1 }} className="logo-dravi">
          {" "}
          Dravi{" "}
        </Box>

        <Link href="#" underline="none" sx={{ p: 1 }} className="buyer">
          For Buyers
        </Link>
        <Link href="#" underline="none" sx={{ p: 1 }} className="owner">
          For Owners
        </Link>
        <Link href="#" underline="none" sx={{ p: 1 }} className="tenant">
          For Tenants
        </Link>
        <Link href="#" underline="none" sx={{ p: 1 }} className="builder">
          For Builders
        </Link>
        <Link href="#" underline="none" sx={{ p: 1 }} className="dealer">
          For Dealers
        </Link>

        {/* ---------------Menu Icon-------------------------------- */}
        <Menu1 className="menu" />

        {/* ----------------------------------------------------- */}
      </Box>

      {/* ------------Title---------------- */}

      <Typography className="cover-Title">
        India's Number One Realtor Service Provider
      </Typography>

      {/* -----------Cover Logos-------------- */}

      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Bank className="bank" />
        <Money className="money" />
        <Fund className="fund" />
        <Estate className="estate" />
        <BriefCase className="case" />
        <Safety className="safe" />
        <GoldStack className="gold" />
      </Box>

      {/* -----------Logo defenition-------------- */}

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          p: 0,
          bgcolor: "background.paper",
          marginLeft: "31.4%",
        }}
      >
        <Box sx={{ p: 0, flexGrow: 1, order: 1 }} className="property">
          {" "}
          Property Documentation
        </Box>
        <Box sx={{ p: 0, order: 2 }} className="revenue">
          Revenue Records
        </Box>
        <Box sx={{ p: 0, order: 3 }} className="land">
          Land Service
        </Box>
        <Box sx={{ p: 0, order: 4 }} className="realestate">
          Real Estate
        </Box>
        <Box sx={{ p: 0, order: 5 }} className="NRI">
          NRI Corner
        </Box>
        <Box sx={{ p: 0, order: 6 }} className="prop-manage">
          Property Management
        </Box>
        <Box sx={{ p: 0, order: 7 }} className="more-service">
          More Services
        </Box>
      </Box>
      {/* ---------------Search Field--------------------- */}

      <TextField
        inline
        select
        value={state}
        onChange={handleChange}
        className="select"
      >
        {states.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="search"
        className="search"
        placeholder="Search using Property Name, Builder, Locality or Landmark"
      />
      <TextField
        inline
        select
        value={type}
        onChange={handleType}
        className="type"
      >
        {types.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {/*---------------BackDrop image----------------  */}
      <Box sx={{ marginTop: "-43.5vh" }}>
        <Build className="build" />
      </Box>
    </div>
  );
}

export default Cover;
