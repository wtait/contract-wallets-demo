import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import Fingerprint from '@mui/icons-material/Fingerprint';

const Account = () => 

   <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
    {/* <ButtonGroup variant="outlined"> */}
      <IconButton aria-label="fingerprint" variant="outlined" sx={{color: 'black', borderColor: 'black'}}>
        <Fingerprint />
      </IconButton>
      <Button variant="outlined" sx={{color: 'black', borderColor: 'black'}}>Connect</Button>
    {/* </ButtonGroup> */}
   </Box>


export default Account;
