import { Grid, Link, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Wall from "./SVG/jp.svg";
import RealEstate from "./SVG/realestate.svg";
import "./CSS/Content.css";

function Content(){

    function preventHorizontalKeyboardNavigation(event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
        }
      }
    return(

        <div>
           <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>


        <Grid fixed item xs={6} >

        <Box sx={{ height: 300 , marginY:"20%", marginX:"20%" , color:"yellow", display: "flex" }}>
             <Slider className="slide"
               sx={{
                '& input[type="pointer"]': {
                  WebkitAppearance: 'slider-vertical',
                    }, order: 1 ,flexGrow: 1 
              }}
             orientation="vertical"
             defaultValue={100}
             aria-label="Servicelevel"
              onKeyDown={preventHorizontalKeyboardNavigation}
             />
          <Box  sx={{ order: 2}} > <img src={RealEstate} alt="realestate" className="real " /> </Box>   
         </Box>

        </Grid>


        <Grid fixed item xs={6}>
         <Typography className="title" >Property Management Services</Typography>
         <Typography className="sub-title" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ultrices erat, dapibus malesuada tortor. Duis at pretium eros. Donec et mi ac eros consequat dapibus at vitae lectus. Nulla ac pellentesque dui. Nulla facilisi. Maecenas ut augue justo</Typography>
         <Typography className="sub-title2" >Praesent non eros vitae lacus congue interdum eget ut tortor. Fusce rhoncus tortor in feugiat efficitur. Integer posuere molestie est, in ornare enim maximus sit amet. Quisque commodo lacus sed aliquet molestie. Nam nec orci nibh.</Typography>
         
         <Link href="#" underline="none" className="explore" >Explore all  </Link>
        </Grid>
      </Grid>
      <img src={Wall} alt="wall" className="wall" />
    </Box>
 
    
        </div>
    )
}

export default Content;