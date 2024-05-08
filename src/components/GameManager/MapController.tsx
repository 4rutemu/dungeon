import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface MapControllerProps {
    imageSrc: string
}
 
const MapController: FunctionComponent<MapControllerProps> = ({imageSrc}) => {
    return ( <>
        <Box
            component={"img"}
            src={imageSrc}
            width={"100%"}
            height={"100%"}
        />
    </> );
}
 
export default MapController;