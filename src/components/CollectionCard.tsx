import { Card, CardContent, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface CollectionCardProps {
    id: string,
    level: number,
    clas: string,
    cname: string,
    race: string
}
 
const CollectionCard: FunctionComponent<CollectionCardProps> = ({id, level, clas, cname, race}) => {
    return ( 
        <Card sx={
            {
                cursor: "pointer",
                backgroundColor: "#fafafa",
                '&:hover': {
                    backgroundColor: "#f5f5f5"
                }
            }}
            variant="outlined"
        >
            <CardContent>
                <Typography variant="h3">{cname}</Typography>
                <Typography variant="body1">{race} {clas}</Typography>
                <Typography variant="body1">{level}</Typography>
            </CardContent>
        </Card>
    );
}
 
export default CollectionCard;