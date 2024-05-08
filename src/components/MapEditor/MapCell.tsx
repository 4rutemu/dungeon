'use client'

import { imagePaths } from "@/utils/imagePaths";
import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface MapCellProps {
    selectedColor: string;
}
 
const MapCell: FunctionComponent<MapCellProps> = (props) => {
    const { selectedColor } = props;

    const [pixelColor, setPixelColor] = useState(imagePaths.grass);//TODO: Добавить картинку пустого поля
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
        width= {'2rem'}
        height= {'2rem'}
        src={pixelColor}
      ></Box>
    );
}
 
export default MapCell;