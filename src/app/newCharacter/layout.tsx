import PageLayout from "@/components/_public/PageLayout";
import { FunctionComponent } from "react";

interface NewCharacterLayoutProps {
  children: React.ReactElement;
}
 
const NewCharacterLayout: FunctionComponent<NewCharacterLayoutProps> = (props) => {
    return ( 
        <PageLayout label="Character">{props.children}</PageLayout>
     );
}
 
export default NewCharacterLayout;