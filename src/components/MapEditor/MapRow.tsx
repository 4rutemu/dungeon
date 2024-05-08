'use client'

import { FunctionComponent } from "react";
import MapCell from "./MapCell";
import { Box } from "@mui/material";

interface MapRowProps {
    width: number,
    selectedColor: string
}
 
const MapRow: FunctionComponent<MapRowProps> = (props) => {
    const { width, selectedColor } = props;

    let pixels = [];
  
    for (let i = 0; i < width; i++) {
      pixels.push(<MapCell key={i} selectedColor={selectedColor} />);
    }
  
    return <Box className="row" height={"32px"}>{pixels}</Box>;
}
 
export default MapRow;