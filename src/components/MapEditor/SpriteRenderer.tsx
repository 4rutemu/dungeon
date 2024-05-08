'use client'

import { Box } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import { FunctionComponent } from "react";

interface SpriteRendererProps {
    imagePath: string,
    selectedImage: string,
    onImageClick: (color: string) => void
}
 
const SpriteRenderer: FunctionComponent<SpriteRendererProps> = ({imagePath, selectedImage, onImageClick}) => {
    return ( <Box 
            component={"img"}
            src={imagePath} 
            width= {'2rem'}
            height= {'2rem'}
            borderColor={blue[400]}
            sx={{border: () => imagePath === selectedImage ? 2 : 0}}
            onClick={() => onImageClick(imagePath)}
        ></Box> 
    );
}
 
export default SpriteRenderer;