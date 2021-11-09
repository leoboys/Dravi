import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import "./CSS/Header.css";
import { ReactComponent as Logo } from "./SVG/Dravi.svg";

function Header() {
  return (
    <div>
      <Grid>
        <Typography className="logo">
          {" "}
          <Logo />{" "}
        </Typography>
        <td>
          {" "}
          <Typography className="logo-dravi">Dravi</Typography>{" "}
        </td>
        <Typography sx={{ flexGrow: 1 }} />

        <Link href="#" underline="none" className="buyer">
          {" "}
          For Buyers
        </Link>
      </Grid>
    </div>
  );
}

export default Header;
