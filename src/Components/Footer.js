import { Button, Container, Divider, Grid, InputBase, Link,    Typography } from "@mui/material";
import { Box     } from "@mui/system";
import React from "react";
import { ReactComponent as Dravi } from "./SVG/Dravi.svg";
import { ReactComponent as Facebook } from "./SVG/fb.svg";
import { ReactComponent as Twitter } from "./SVG/twit.svg";
import { ReactComponent as GooglePlus } from "./SVG/googleplus.svg";
import { ReactComponent as Instagram } from "./SVG/insta.svg";
import "./CSS/Footer.css";

 function Footer() {
     return(

         <div className="footer-body">

        {/* ------------------------------------------------------------------------------ */}

             <Container maxWidth="lg" >

{/* ------------------------------------------------ */}

                 <Typography className="footer-head" >Want to Buy or Sell Your Property? </Typography>
                 <p className="footer-sub">Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the lorem ipsum dolor sit amet. sed diam nonumy  ut labore et dolore s the magna aliquyam. </p>

                <Box sx={{display:"flex", flexGrow: 1}} >
                    <Button className="buy-button" >Buying Property</Button>
                    <Divider orientation="horizontal" className="div-line" />
                    <Button className="sell-button" >Selling Property</Button>
                </Box>

 {/*-------------------------------------------------  */}
                
                <Divider className="div-line2" />

{/* --------------------------------------------------- */}

                <Box sx={{ width:"100%", flexGrow: 1 , marginY:"5%" , marginX:"5%"}} maxWidth="lg">
                <Grid container spacing={2}>
                 <Grid item xs={2}>
                <Dravi className="dravi-logo" />    
                <Typography sx={{flexGrow: 1, order: 1}} className="logo-name" > Dravi</Typography>
                
                <Box sx={{display:"flex", flexGrow: 1 , marginX:"-30%"}} >
                <Link href="#" underline="none" > <Facebook className="icon-fb" /> </Link>
                <Link href="#" underline="none" > <Twitter className="icon-twit"  /> </Link>
                <Link href="#" underline="none" > <GooglePlus className="icon-google"  /> </Link>
                <Link href="#" underline="none" > <Instagram className="icon-insta"  /> </Link>
                   
                </Box>
                
                 </Grid>
                <Grid item xs={2}>
                  
                        <Typography className="quick">Quick Links</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                    <Box sx={{marginX:"-20%" ,  marginY:"10%"    }} >
                     <ul>   <Link href="#" underline="none" className="link-home">- Home</Link> </ul>
                     <ul>   <Link href="#" underline="none" className="link-about">- About Us</Link> </ul> 
                     <ul>   <Link href="#" underline="none" className="link-service">- Service</Link>   </ul> 
                     <ul>   <Link href="#" underline="none" className="link-testimony">- Testimonials</Link></ul>
                     <ul>   <Link href="#" underline="none" className="link-contact">- Contact Us</Link>  </ul>
                     </Box>
                </Grid>
                <Grid item xs={2} sx={{ marginX:"0%" }}>
                <Typography className="site">Sitemap</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                    <Box sx={{marginX:"-20%" ,  marginY:"10%"}} >
                     <ul>   <Link href="#" underline="none" className="link-process">- Our Process</Link> </ul>
                     <ul>   <Link href="#" underline="none" className="link-do">- What We Do</Link> </ul> 
                     <ul>   <Link href="#" underline="none" className="link-location">- Location</Link>   </ul> 
                     <ul>   <Link href="#" underline="none" className="link-testimony">- Sell</Link></ul>
                     <ul>   <Link href="#" underline="none" className="link-purchase">- Purchase</Link>  </ul>
                     </Box>
                    
                </Grid>
                <Grid item xs={2} sx={{ marginX:"0%" }}>
                <Typography className="quick">Discover</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                    <Box sx={{marginX:"-20%", marginY:"10%"}} >
                     <ul>   <Link href="#" underline="none" className="link-home">- Privacy Policy</Link> </ul>
                     <ul>   <Link href="#" underline="none" className="link-about">- Terms & Conditions</Link> </ul> 
                     <ul>   <Link href="#" underline="none" className="link-service">- Owners</Link>   </ul> 
                     <ul>   <Link href="#" underline="none" className="link-testimony">- Houses</Link></ul>
                     {/* <ul>   <Link href="#" underline="none" className="link-contact">-Contact Us</Link>  </ul> */}
                     </Box>
                    
                </Grid>
                <Grid item xs={3} sx={{ marginX:"4%" }} >
                <Typography className="quick">Subscribe</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                        <Box sx={{ display:"flex", flexGrow: 1 , marginY:"-15%" }} >
                            <InputBase sx={{flex: 1,}} type="email" outline="none" placeholder="Email Address"  className="email-box" />
                            
                            <Button  className="email-button">Subscribe</Button> 
                        </Box>
                </Grid>
                </Grid>
                </Box>
             </Container>

         </div>
     )
     
 }


 export default Footer;