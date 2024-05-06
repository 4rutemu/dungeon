import { FunctionComponent } from "react";
import CharacterList from "../CharacterList";

interface InteractiveCharacterListProps {
    
}
 
const InteractiveCharacterList: FunctionComponent<InteractiveCharacterListProps> = () => {
    return ( <>
        <CharacterList/>
    </> );
}
 
export default InteractiveCharacterList;