'use client'

import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import SpriteRenderer from "./SpriteRenderer";
import imagePaths from "../utils/imagePaths"

interface SpritePickerProps {
    color: string,
    onChangeComplete: (color: string) => void
}
 
const SpritePicker: FunctionComponent<SpritePickerProps> = ({color, onChangeComplete}) => {
    return ( 
        <Box>
            {Object.values(imagePaths).map((sprite, index) => <SpriteRenderer key={index} imagePath={sprite as string} selectedImage={color}></SpriteRenderer>)}
        </Box>
    );
}
 
export default SpritePicker;