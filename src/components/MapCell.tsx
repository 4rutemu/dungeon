'use client'

import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface MapCellProps {
    selectedColor: string;
}
 
const MapCell: FunctionComponent<MapCellProps> = (props) => {
    const { selectedColor } = props;

    const [pixelColor, setPixelColor] = useState("haha");//TODO: Добавить картинку пустого поля
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
  
    function applyColor() {
      setPixelColor(selectedColor);
      setCanChangeColor(false);
    }
  
    function changeColorOnHover() {
      setOldColor(pixelColor);
      setPixelColor(selectedColor);
    }
  
    function resetColor() {
      if (canChangeColor) {
        setPixelColor(oldColor);
      }
  
      setCanChangeColor(true);
    }
  
    return (
      <Box
        component={"img"}
        className="map-cell"
        onClick={applyColor}
        onMouseEnter={changeColorOnHover}
        onMouseLeave={resetColor}
        width= {'1.5rem'}
        height= {'1.5rem'}
        src={pixelColor}
      ></Box>
    );
}
 
export default MapCell;