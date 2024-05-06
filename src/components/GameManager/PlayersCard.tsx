import { List, ListItem } from "@mui/material";
import { FunctionComponent } from "react";

interface PlayersCardProps {
    
}
 
const PlayersCard: FunctionComponent<PlayersCardProps> = () => {
    return ( <>
        <List>
            <ListItem>Player 1</ListItem>
            <ListItem>Player 2</ListItem>
            <ListItem>Player 3</ListItem>
            <ListItem>Player 4</ListItem>
        </List>
    </> );
}
 
export default PlayersCard;