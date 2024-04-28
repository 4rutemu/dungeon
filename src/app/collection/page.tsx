'use client'

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FunctionComponent } from "react";
import CollectionCard from "../components/CollectionCard";

interface CollectionProps {
    
}
 
const collection = [
    {
        id: "1",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "2",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "3",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "4",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "5",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "6",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "7",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "8",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
    {
        id: "9",
        level: 1,
        clas: "aboba",
        name: "loh",
        race: "chevpchich"
    },
]

const defaultTheme = createTheme();

const Collection: FunctionComponent<CollectionProps> = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={4}
                p={2}
                flexWrap={"wrap"}
            >
                {collection.map((card) => <CollectionCard key={card.id} id={card.id} level={card.level} clas={card.clas} cname={card.name} race={card.race}></CollectionCard>)}
            </Box>
        </ThemeProvider> 
    );
}
 
export default Collection;