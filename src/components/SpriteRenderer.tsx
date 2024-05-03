'use client'

import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface SpriteRendererProps {
    imagePath: string,
    selectedImage: string
}
 
const SpriteRenderer: FunctionComponent<SpriteRendererProps> = ({imagePath, selectedImage}) => {
    return ( <Box component={"img"} src={imagePath} sx={{border: () => imagePath === selectedImage ? 2 : 0}}></Box> );
}
 
export default SpriteRenderer;