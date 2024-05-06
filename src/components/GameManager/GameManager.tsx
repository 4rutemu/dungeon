"use client"

import { Box, Button, Drawer } from "@mui/material";
import { FunctionComponent, useState } from "react";
import MapController from "./MapController";
import PlayersCard from "./PlayersCard";
import DiceRoller from "./DIceRoller";
import InteractiveCharacterList from "./InteractiveCharacterList";

interface GameManagerProps {
    
}
 
const GameManager: FunctionComponent<GameManagerProps> = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer =
      (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
  
        setOpen(inOpen);
      };

    return ( 
    <Box
     display={"flex"}
     flexDirection={"row"}
     alignItems={"center"}
     justifyContent={"center"}
    >
        <Box width={"70%"}>
            <MapController/>
        </Box>
        <Box 
            width={"30%"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
        >
            <PlayersCard/>
            <DiceRoller/>

            <Button variant="outlined" onClick={toggleDrawer(true)} sx={{margin: 3}}>
            Open drawer
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                <InteractiveCharacterList/>
            </Drawer>
        </Box>
    </Box> );
}
 
export default GameManager;