'use client'

import { Box } from "@mui/material";
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
            sx={{border: () => imagePath === selectedImage ? 2 : 0}}
            onClick={() => onImageClick(imagePath)}
        ></Box> 
    );
}
 
export default SpriteRenderer;