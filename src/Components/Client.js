import { Container, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as ClientLine} from "./SVG/clientline.svg";
import { ReactComponent as ClientCircle} from "./SVG/clientcircle.svg";
import "./CSS/Client.css";

function Client(){

    return(
        <div>
            <Container>
                <ClientLine className="client-line" />
                <Typography className="client-title" >Client Testimony</Typography>
                <ClientCircle className="client-circle" />
                <Typography className="client-sub" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</Typography>
            </Container>

        </div>
    )
}

export default Client;