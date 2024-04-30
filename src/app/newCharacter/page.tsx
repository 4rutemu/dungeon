import { FunctionComponent } from "react";
import CharacterList from "../components/CharacterList";

interface NewCharacterProps {
    
}
 
const NewCharacter: FunctionComponent<NewCharacterProps> = () => {
    return ( 
        <>
            <CharacterList></CharacterList>
        </>
     );
}
 
export default NewCharacter;