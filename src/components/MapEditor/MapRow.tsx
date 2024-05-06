'use client'

import { FunctionComponent } from "react";
import MapCell from "./MapCell";

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
  
    return <div className="row">{pixels}</div>;
}
 
export default MapRow;