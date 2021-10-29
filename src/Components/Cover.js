import { Button,  Divider,  Drawer,    InputBase,  Link, List, ListItem, ListItemText, Menu, MenuItem,  TextField, Typography } from "@mui/material";
//import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./CSS/Cover.css";
import { ReactComponent as Logo} from "./SVG/Dravi.svg";
import { ReactComponent as Bank} from "./SVG/cover.svg";
import { ReactComponent as Money } from "./SVG/money.svg";
import { ReactComponent as Fund } from "./SVG/fund.svg";
import { ReactComponent as Estate } from "./SVG/estate.svg";
import { ReactComponent as BriefCase } from "./SVG/briefcase.svg";
import { ReactComponent as Safety } from "./SVG/safety.svg";
import { ReactComponent as GoldStack } from "./SVG/goldstack.svg";
import { ReactComponent as Build} from "./SVG/building.svg";
//import { ReactComponent as Menu1} from "./SVG/mainmenu.svg";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';




 function Cover (){
    const states = [
        {
          value: 'USD',
          label: 'Chennai',
        },
        {
          value: 'EUR',
          label: 'Madurai',
        },
        {
          value: 'BTC',
          label: 'Bangalore',
        },
        {
          value: 'JPY',
          label: 'Thrichi',
        },
      ];

      const types = [
        {
          value: '1',
          label: 'Type 1',
        },
        {
          value: '2',
          label: 'Property type',
        },
        {
          value: '3',
          label: 'Type 3',
        },
        {
          value: '4',
          label: 'Type 4',
        },
      ];

    // -----------------------------------------------------------------
    
    const toggleDrawer = (anchor, open) => (event) => {

      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Box>
    );
    

    // ----------------------------------------------------------------


    const [state, setState] = React.useState('USD');
    const [type, setType] = React.useState('2');
    const [menu, setMenuBar] = useState(null);
    const open = Boolean(menu);
    // const handleClick = (event) => {
    //   setMenuBar(event.currentTarget);
    // };
    const handleClose = () => {
      setMenuBar(null);
    };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };
        return(
                <div className="coverbody">
                   
        <Box sx={{ display: 'flex', p: 0, bgcolor: 'background.paper' }}>
        <Box sx={{ p: 1, flexGrow: 0, bgcolor: 'grey.300' }}> <Logo className="logo" /> </Box>
        <Box sx={{ p: 0, flexGrow: 1, }} className="logo-dravi"> Dravi </Box>

        <Link href="#" underline="none" sx={{ p: 1, }} className="buyer" >For Buyers</Link>
        <Link href="#" underline="none" sx={{ p: 1, }} className="owner">For Owner</Link>
        <Link href="#" underline="none" sx={{ p: 1, }} className="tenant">For Tenant</Link>
        <Link href="#" underline="none" sx={{ p: 1, }} className="builder">For Builder</Link>
        <Link href="#" underline="none" sx={{ p: 1, }} className="dealer">For Dealer</Link>

{/* ---------------Menu Icon-------------------------------- */}

        {/* <IconButton  sx={{ p: 1, }} 
        className="menu" 
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
        // onClick={handleClose}
        >  <Menu1  />  
       </IconButton> */}
{/* -------------------Menu Items-------------------------------- */}
     
<div className="menu"> 
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

 {/* ----------------------------------------------------- */}

        <Menu
        className="menu-item"
        id="normal-menu"
        anchorEl={menu}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   'Nunito': 'basic-button',
        // }}
      >
        <MenuItem onClick={handleClose}  > <ClearRoundedIcon className="cancle-icon" /> </MenuItem>
        <MenuItem href="#"  > <Typography classname="menu-1" >Home</Typography> </MenuItem>
        <MenuItem href="#"  >About Us</MenuItem>
        <MenuItem href="#"  >Service</MenuItem>
        <MenuItem href="#"  >Testimonials</MenuItem>
        <MenuItem href="#"  >Contact Us</MenuItem>
        <MenuItem href="#"  >
          <Box sx={{ display:"flex", flexGrow: 1 , }} >
              <InputBase sx={{flex: 1,}} type="email" outline="none" placeholder="Email Address"  className="menu-email-box" />
                            
              <Button  className="menu-email-button">Subscribe</Button> 
          </Box>  
          
        </MenuItem>
      </Menu>
      
      </Box>

{/* ------------Title---------------- */}

      <Typography className="cover-Title" >India's Number One Realtor Service Provider</Typography>

{/* -----------Cover Logos-------------- */}

      <Box sx={{ p: 3, flexGrow: 1,} }  > 
      <Bank className="bank" /> 
      <Money className="money" />
      <Fund className="fund"  />
      <Estate  className="estate" />
      <BriefCase className="case" />
      <Safety className="safe" />
      <GoldStack  className="gold" /> 
       </Box>

{/* -----------Logo defenition-------------- */}

      <Box sx={{ position:"absolute",    display: 'flex', p: 0, bgcolor: 'background.paper' }}>
      <Box sx={{ p: 0, flexGrow: 1, order: 1 }} className="property"> Property Documentation</Box>
      <Box  sx={{ p: 0, order: 2 }} className="revenue" >Revenue Records</Box>
      <Box  sx={{ p: 0, order: 3 }} className="land" >Land Service</Box>
      <Box  sx={{ p: 0, order: 4 }} className="realestate" >Real Estate</Box>
      <Box  sx={{ p: 0, order: 5 }} className="NRI" >NRI Corner</Box>
      <Box  sx={{ p: 0, order: 6 }} className="prop-manage" >Property Management</Box>
      <Box  sx={{ p: 0, order: 7 }} className="more-service" >More Services</Box>
          </Box>
{/* ---------------Search Field--------------------- */}

            <TextField inline
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
      <TextField  id="search" className="search" placeholder="Search using Property Name, Builder, Locality or Landmark" />
      <TextField inline
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

       <Build className="build" />
       
                </div>
       )

 }

 export default Cover;