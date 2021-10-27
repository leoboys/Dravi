import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CSS/Feature.css";
import room1 from "./1.png";
import room2 from "./2.png";
import room3 from "./3.png";
import room4 from "./4.png";
import room6 from "./6.png";
import { ReactComponent as Line } from "./SVG/line.svg";
import { ReactComponent as Time } from "./SVG/time.svg";
import { ReactComponent as Target } from "./SVG/target.svg";
import { ReactComponent as Team } from "./SVG/team.svg";
// import Mask from "./mask.png";
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';



function Feature(){

    return(
        <div>
            <Box >
            <Box sx={{ width:"400px", alignItems:"left" , marginY:"5%" , borderBottom:"2px solid  rgb(238, 187, 18)"}} > <Typography item xs={4} className="feature-head" >FEATURED HOMES</Typography></Box>
            <Typography className="feature-sub" >Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the lorem ipsum dolor sit amet. sed diam nonumy  ut labore et dolore s the magna aliquyam.</Typography> 
            <Link href="#" underline="none"  className="link-rent" >Rent</Link> 
            <Link href="#" underline="none" className="link-sell" >Sell</Link> 
            <Link href="#" underline="none" className="link-buy" >Buy</Link> 
            </Box>
       
        <Box sx={{ marginX:"20%", marginY:"5%" , flexGrow: 1 }}>
            
        <Grid container maxWidth="lg" spacing={12}>
          <Grid item xs={4} md={4}>
            <Card sx={{ height:"300px",width: 250, boxShadow:"5px 5px 20px grey"}}>
              <CardMedia
                component="img"
                height="200"
                // image="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"
                image= {room1}
                alt="room1"
              />
              <CardContent sx={{ height: "20px"}}>
                <Typography gutterBottom fontSize="14px" fontFamily="Nunito" variant="h5" component="div">
                Fulton Street, Apt P101, New York
                </Typography>
               
              </CardContent>
              <CardActions>
                <BedroomParentOutlinedIcon sx={{ color: "orange", size:"small" }}   />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2bd </Box>
                <BathtubOutlinedIcon sx={{ color: "orange", size:"small" }}  />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2ba </Box>
                <Button style={{color:"white", backgroundColor:"orange", marginLeft:"10%", borderRadius: "0px"}} size="small">$6,500</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} md={4}>
          <Card sx={{ height:"300px",width: 250, boxShadow:"5px 5px 20px grey"}}>
              <CardMedia
                component="img"
                height="200"
                image={room2}
                alt="room2"
              />
              <CardContent sx={{ height: "20px"}}>
                <Typography gutterBottom fontSize="14px" fontFamily="Nunito" variant="h5" component="div">
                Fulton Street, Apt P101, New York
                </Typography>
               
              </CardContent>
              <CardActions>
                <BedroomParentOutlinedIcon sx={{ color: "orange", size:"small" }}   />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2bd </Box>
                <BathtubOutlinedIcon sx={{ color: "orange", size:"small" }}  />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2ba </Box>
                <Button style={{color:"white", backgroundColor:"orange", marginLeft:"10%", borderRadius: "0px"}} size="small">$6,500</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} md={4}>
          <Card sx={{ height:"300px",width: 250,boxShadow:"5px 5px 20px grey"}}>
              <CardMedia
                component="img"
                height="200"
                image={room3}
                alt="room3"
              />
              <CardContent sx={{ height: "20px"}}>
                <Typography gutterBottom fontSize="14px" fontFamily="Nunito" variant="h5" component="div">
                Fulton Street, Apt P101, New York
                </Typography>
               
              </CardContent>
              <CardActions>
                <BedroomParentOutlinedIcon sx={{ color: "orange", size:"small" }}   />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2bd </Box>
                <BathtubOutlinedIcon sx={{ color: "orange", size:"small" }}  />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2ba </Box>
                <Button style={{color:"white", backgroundColor:"orange", marginLeft:"10%", borderRadius: "0px"}} size="small">$6,500</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} md={4}>
          <Card sx={{ height:"300px",width: 250,boxShadow:"5px 5px 20px grey"}}>
              <CardMedia
                component="img"
                height="200"
                image={room4}
                alt="room4"
              />
              <CardContent sx={{ height: "20px"}}>
                <Typography gutterBottom fontSize="14px" fontFamily="Nunito" variant="h5" component="div">
                Fulton Street, Apt P101, New York
                </Typography>
               
              </CardContent>
              <CardActions>
                <BedroomParentOutlinedIcon sx={{ color: "orange", size:"small" }}   />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2bd </Box>
                <BathtubOutlinedIcon sx={{ color: "orange", size:"small" }}  />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2ba </Box>
                <Button style={{color:"white", backgroundColor:"orange", marginLeft:"10%", borderRadius: "0px"}} size="small">$6,500</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} md={4}>
          <Card sx={{ height:"300px",width: 250,boxShadow:"5px 5px 20px grey"}}>
              <CardMedia
                component="img"
                height="200"
                image={room1}
                alt="room5"
              />
              <CardContent sx={{ height: "20px"}}>
                <Typography gutterBottom fontSize="14px" fontFamily="Nunito" variant="h5" component="div">
                Fulton Street, Apt P101, New York
                </Typography>
               
              </CardContent>
              <CardActions>
                <BedroomParentOutlinedIcon sx={{ color: "orange", size:"small" }}   />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2bd </Box>
                <BathtubOutlinedIcon sx={{ color: "orange", size:"small" }}  />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2ba </Box>
                <Button style={{color:"white", backgroundColor:"orange", marginLeft:"10%", borderRadius: "0px"}} size="small">$6,500</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} md={4}>
          <Card sx={{ height:"300px",width: 250,boxShadow:"5px 5px 20px grey"}}>
              <CardMedia
                component="img"
                height="200"
                image={room6}
                alt="room6"
              />
              <CardContent sx={{ height: "20px"}}>
                <Typography gutterBottom fontSize="14px" fontFamily="Nunito" variant="h5" component="div">
                Fulton Street, Apt P101, New York
                </Typography>
               
              </CardContent>
              <CardActions>
                <BedroomParentOutlinedIcon sx={{ color: "orange", size:"small" }}   />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2bd </Box>
                <BathtubOutlinedIcon sx={{ color: "orange", size:"small" }}  />
                <Box sx={{ width:"100px", borderRight:"1px solid grey"}} size="small"> 2ba </Box>
                <Button style={{color:"white", backgroundColor:"orange", marginLeft:"10%", borderRadius: "0px"}} size="small">$6,500</Button>
              </CardActions>
            </Card>
          </Grid>
          
        </Grid>
        <Button sx={{bgcolor:"orange", textAlign:"center", marginX:"46%", marginY:"10%", width:"100px", color:"white", boxShadow:"1px 1px 20px grey"}} > View all ></Button>
      </Box>
        <Box className="feature-mask" >
        <Box sx={{display:"flex", flexGrow: 1}}  >
            <Box sx={{flexGrow: 0, order: 1}}>  <Line className="mask-line" /></Box>
             <Box sx={{order: 2}}> <Typography  className="mask-head" > Feature & Benefits</Typography></Box>
        </Box>

        <Box sx={{ marginX:"10%", marginY:"10%" , flexGrow: 1 }}>
        <Grid container maxWidth="lg" spacing={2}>
          <Grid item xs={6} sx={{marginY:"5%"}} >
              <Typography className="mask-lefthead" >This is how we Streamline our Process</Typography>
              <Typography className="mask-leftsub1" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</Typography>
              <Typography className="mask-leftsub2" >totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</Typography>
              <Button className="mask-leftbutton" >View all <ArrowForwardOutlinedIcon fontSize="small" /> </Button>         
              </Grid>
          <Grid  item xs={6}  >
              <TableRow  sx={{  flexGrow: 1 , display:"flex"}} >
                  <td>
                  <Box sx={{  order: 1}} className="mask-time" >
                      <Time className="time-logo" />
                  <Typography className="mask-timehead" > Time Effects</Typography>
                  <p className="mask-timesub">Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem ab illo  veritatis et quasi.</p>
                   </Box>
                   </td>

                   <td>
                   <Box sx={{order: 2}} className="mask-target" >
                      <Target className="target-logo" />
                  <Typography className="mask-targethead" > Target The Best</Typography>
                  <p className="mask-targetsub">Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem ab illo  veritatis et quasi.</p>
                   </Box>
                   </td>
              </TableRow>
              <td>
                   <Box sx={{order: 2}} className="mask-team" >
                      <Team className="team-logo" />
                  <Typography className="mask-teamhead" > Support Team</Typography>
                  <p className="mask-teamsub">Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem ab illo  veritatis et quasi.</p>
                   </Box>
                   </td>
              </Grid>
        </Grid>

        </Box>
        </Box>

      </div>
    );
}

export default Feature;