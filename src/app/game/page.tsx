"use client"

import GameManager from "@/components/GameManager/GameManager";
import { FunctionComponent } from "react";

interface GamePageProps {
    
}
 
const GamePage: FunctionComponent<GamePageProps> = () => {
    return ( <>
        <GameManager/>
    </> );
}
 
export default GamePage;