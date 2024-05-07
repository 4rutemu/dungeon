import PageLayout from "@/components/_public/PageLayout";
import { FunctionComponent } from "react";

interface GameLayoutProps {
  children: React.ReactElement;
}
 
const GameLayout: FunctionComponent<GameLayoutProps> = (props) => {
    return ( 
        <PageLayout label="Game">{props.children}</PageLayout>
     );
}
 
export default GameLayout;