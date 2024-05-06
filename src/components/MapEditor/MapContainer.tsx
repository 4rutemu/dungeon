'use client'

import { FunctionComponent, useRef } from "react";
import MapRow from "./MapRow";
import { exportComponentAsPNG } from "react-component-export-image";
import { Box, Button } from "@mui/material";

interface MapContainerProps {
    width: number,
    height: number,
    selectedColor: string
}
 
const MapContainer: FunctionComponent<MapContainerProps> = (props) => {
    const { width, height, selectedColor } = props;

    const panelRef = useRef();
  
    let rows = [];
  
    for (let i = 0; i < height; i++) {
      rows.push(<MapRow key={i} width={width} selectedColor={selectedColor} />);
    }
  
    return (
      <Box id="drawingPanel">
        <Box id="pixels" ref={panelRef}>
          {rows}
        </Box>
        <Button onClick={() => exportComponentAsPNG(panelRef as any)} className="button">
          Export as PNG
        </Button>
      </Box>
    );
}
 
export default MapContainer;