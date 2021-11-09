import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as ClientLine } from "./SVG/clientline.svg";
import Viru from "./viru.jpg";
import "./CSS/Client.css";
// import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Box } from "@mui/system";

function Client() {
  return (
    <div>
      <Container maxWidth="md" className="client-body">
        <ClientLine className="client-line" />
        <Typography className="client-title">Client Testimony</Typography>
        <Box>
          <img src={Viru} alt="client-img" className="client-circle" />
        </Box>

        <Typography className="client-sub">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
        </Typography>
        <Typography className="client-name">-Virat Kohli</Typography>
        <Typography className="client-office">BCCI-Team Caption</Typography>
        <Button className="client-button">
          View all
          {/* <ArrowForwardOutlinedIcon fontSize="small" />{" "} */}
        </Button>
      </Container>
    </div>
  );
}

export default Client;
