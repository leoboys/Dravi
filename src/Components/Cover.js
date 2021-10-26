import { Link, MenuItem, TextField, Typography } from "@mui/material";
//import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CSS/Cover.css";
import { ReactComponent as Logo} from "./SVG/Dravi.svg";
import { ReactComponent as Bank} from "./SVG/banklogo.svg";
import { ReactComponent as Build} from "./SVG/building.svg";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



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

     


    const [state, setState] = React.useState('USD');
    const [type, setType] = React.useState('2');

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
        <Link href="#" underline="none" sx={{ p: 1, }} className="menu"><MenuOutlinedIcon /></Link>
      </Box>

      <Typography className="cover-Title" >India's Number One Realtor Service Provider</Typography>
      <Box sx={{ p: 3, flexGrow: 0,}}> <Bank className="bank" /> </Box>
      <Box sx={{ position:"absolute",    display: 'flex', p: 0, bgcolor: 'background.paper' }}>
      <Box sx={{ p: 0, flexGrow: 1, order: 1 }} className="property"> Property Documentation</Box>
      <Box  sx={{ p: 0, order: 2 }} className="revenue" >Revenue Records</Box>
      <Box  sx={{ p: 0, order: 3 }} className="land" >Land Service</Box>
      <Box  sx={{ p: 0, order: 4 }} className="realestate" >Real Estate</Box>
      <Box  sx={{ p: 0, order: 5 }} className="NRI" >NRI Corner</Box>
      <Box  sx={{ p: 0, order: 6 }} className="prop-manage" >Property Management</Box>
      <Box  sx={{ p: 0, order: 7 }} className="more-service" >More Services</Box>
          </Box>

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
       <Build className="build" />
                </div>
       )

 }

 export default Cover;