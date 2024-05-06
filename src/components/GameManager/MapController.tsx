import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface MapControllerProps {
    
}
 
const MapController: FunctionComponent<MapControllerProps> = () => {
    return ( <>
        <Box
            component={"img"}
            src={"/images/map.png"}
        />
    </> );
}
 
export default MapController;