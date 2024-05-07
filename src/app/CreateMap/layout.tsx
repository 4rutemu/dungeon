import PageLayout from "@/components/_public/PageLayout";
import { FunctionComponent } from "react";

interface CreateMapLayoutProps {
  children: React.ReactElement;
}
 
const CreateMapLayout: FunctionComponent<CreateMapLayoutProps> = (props) => {
    return ( 
        <PageLayout label="MapEditor">{props.children}</PageLayout>
     );
}
 
export default CreateMapLayout;