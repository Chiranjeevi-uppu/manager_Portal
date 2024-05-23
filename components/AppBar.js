import React from 'react'
import  { useState } from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import GroupIcon from '@mui/icons-material/Groups2Sharp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DescriptionIcon from '@mui/icons-material/Description';

export default function AppBar({ handleLinkClick }) {
  const [isSpaceVisible, setSpaceVisible] = useState(false);

  const toggleSpaceVisibility = () => {
    setSpaceVisible(!isSpaceVisible);
  };

  return (
    <div>
    <div style={{ display: 'flex'}}>
      {/* Arrow icon on the left side */}
      <IconButton onClick={toggleSpaceVisibility} style={{
       right: 1210, zIndex: 999 , 
       position:'fixed',
       transition: 'left 0.5s ease-in-out',
       bottom:257 , left: isSpaceVisible ? 200 : 0,  }}>
        {/* <ArrowBackIcon  /> */}
        <NavigateNextIcon sx={{background:'#1f1b13' , color:'white' , height:45 , borderTopRightRadius:8 , borderBottomRightRadius:8}}/>
      </IconButton>

     
      <Box
        sx={{
           
            
            left: 8,
            top: 105,          
            width:isSpaceVisible ? 150 : 0,
            height: '75vh', // Adjust height to fill the viewport
            backgroundColor: '#d6e7f1', // Color of the empty space
            transition: 'width 0.5s ease-in-out', overflow:'hidden',
            zIndex: 998, // Ensure the empty space is behind the main content
            p:3,
            overflowY:'auto',
            a: {
              color: 'black',
              textDecoration: 'none', // Remove underline from links
              display: 'block', // Ensure links are block-level elements
              marginBottom: '10px', // Add margin between links
              maxWidth:'100%'
            },
          }}
          
      >
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
           <a href='#' onClick={() => handleLinkClick(1)}>
            <PersonAddAltIcon sx={{ fontSize: 30 , position:'absolute', left:-14 ,top:-3}} /></a>
           <span style={{ marginLeft: 10 ,position:'absolute', left:18 , top:9 }}>Add User</span>          
        </div>
         
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <a href='#' onClick={() => handleLinkClick(2)}> <GroupIcon sx={{position:'absolute', left:-14 ,top:60 ,fontSize: 30 }}/></a>
            <span style={{ marginLeft: 10 ,position:'absolute', top:70 , left:17  }}>People</span>
        </div> 

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
         <a href='#' onClick={() => handleLinkClick(3)}> <DescriptionIcon sx={{position:'absolute', left:-14 ,top:120 ,fontSize: 30  }}/> </a>
         <span style={{ marginLeft: 10 ,position:'absolute', top:130 , left:17  }}>Leaves</span>
        </div>       
      </Box>
        
    </div>
    
    </div>   
    

  )
}

