'use client'

import { FunctionComponent, useState } from "react";
import MapContainer from "./MapContainer";
import { Box, Button, Input, Typography } from "@mui/material";
import SpritePicker from "./SpritePicker";
import { imagePaths } from "@/utils/imagePaths";

interface MapEditorProps {
    
}
 
const MapEditor: FunctionComponent<MapEditorProps> = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState(imagePaths.grass);

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }

  function changeColor(color: string) {
    setColor(color);
  }

  return (
    <Box id="editor" 
      border="1px solid red"
      border-radius="0.25rem"
      padding="1rem 4rem 2rem 4rem"
      margin-top="2rem"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <Typography>Pixel Editor</Typography>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <Box id="options">
          <Box className="option">
            <Input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(Number(e.target.value));
              }}
            />
            <span>Width</span>
          </Box>
          <Box className="option">
            <Input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(Number(e.target.value));
              }}
            />
            <span>Height</span>
          </Box>
        </Box>
      )}

      <Button onClick={initializeDrawingPanel} className="button">
        {buttonText}
      </Button>

      {hideOptions && (
        <SpritePicker color={selectedColor} onChangeComplete={changeColor} />
      )}

      {hideOptions && (
        <MapContainer
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </Box>
  );
}
 
export default MapEditor;