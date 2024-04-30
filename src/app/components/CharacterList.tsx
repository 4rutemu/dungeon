'use client'

import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface CharacterListProps {
    
}

interface StatCardProps {
    label: string,
    value: number
}
 
const StatCard: FunctionComponent<StatCardProps> = ({label, value}) => {
    return ( 
        <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    borderRadius={"20px"}
                    minWidth={"100%"}
                    marginBottom={"5px"}
                    sx={{backgroundColor: "white"}}
                >
                    <Typography variant="body2">{label}</Typography>
                    <Typography variant="h3">+3</Typography>
                    <TextField sx={{maxWidth: "47px"}} size="small" id="strength" variant="outlined" value={value}></TextField>
        </Box>
    );
}

interface SpecialisationCardProps {
    label: string,
    masteryBonus: number,
    statBonus: number
}
 
const SpecialisationCard: FunctionComponent<SpecialisationCardProps> = ({label, masteryBonus, statBonus}) => {
    const [currentBonus, setCurrentBonus] = useState(0 + statBonus)

    const handleChange = (toggle: boolean) => {
        if (toggle) {
            setCurrentBonus((prev) => prev + masteryBonus)
        } else {
            setCurrentBonus((prev) => prev - masteryBonus)
        }
    }

    return ( 
        <>
            <FormControlLabel label={" +" + currentBonus + " " + label} control={
                <Checkbox color="default" onChange={event => handleChange(event.target.checked)}></Checkbox>
            }></FormControlLabel>
        </>
     );
}
 
const CharacterList: FunctionComponent<CharacterListProps> = () => {
    return ( <Box padding={"0 20%"}>
    {/* Шапка листа перса */}
        <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            padding={"15px"}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                width={"25%"}
            >
                <TextField id="characterName" size={"small"} variant="outlined" label="Имя персонажа"></TextField>
            </Box>
            <Box
                width={"65%"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                border={"solid 2px #9f9f9f"}
                borderRadius={"15px"}
                padding={"15px"}
            >
                <Box
                    marginBottom={"7px"}
                    display={"flex"}
                    width={"75%"}
                    justifyContent={"space-evenly"}
                >
                    <TextField id="race" size={"small"} variant="outlined" label="Раса"></TextField>
                    <TextField id="story" size={"small"} variant="outlined" label="Предыстория"></TextField>
                </Box>
                <Box 
                    display={"flex"}
                    width={"75%"}
                    justifyContent={"space-evenly"}
                >
                    <TextField id="clas" size={"small"} variant="outlined" label="Класс"></TextField>
                    <TextField id="level" size={"small"} variant="outlined" label="Уровень"></TextField>
                </Box>
            </Box>
        </Box>
        {/* Статки */}
        <Box padding={"15px"} display={"flex"}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={"15%"}
                justifyContent={"space-between"}
                borderRadius={"20px"}
                sx={{backgroundColor: "gray"}}
                padding={"10px 5px 5px 5px"}
            >
                <StatCard label="Сила" value={15}></StatCard>
                <StatCard label="Ловкость" value={15}></StatCard>
                <StatCard label="Телосложение" value={15}></StatCard>
                <StatCard label="Интеллект" value={15}></StatCard>
                <StatCard label="Мудрость" value={15}></StatCard>
                <StatCard label="Харизма" value={15}></StatCard>
            </Box>
            <Box marginLeft={"7px"}>
                <Box 
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    borderRadius={"20px"}
                    sx={{backgroundColor: "gray"}}
                    padding={"10px 5px 5px 5px"}
                    marginBottom={"7px"}
                >
                    <FormControlLabel label="Вдохновение" sx={{marginLeft: "7px"}} control={
                        <Checkbox color="default" id="vdohnovenie"></Checkbox>
                    }></FormControlLabel>
                    <TextField type="number" id="mastery" sx={{maxWidth: "70px"}}></TextField>
                    <Typography variant="body2">Бонус мастрерства</Typography>
                </Box>
                <Box 
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    borderRadius={"20px"}
                    sx={{backgroundColor: "gray"}}
                    padding={"10px 5px 5px 5px"}
                >
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <Typography variant="body2">Спасброски</Typography>
                </Box>
            </Box>
            <Box marginLeft={"7px"}>
                <Box 
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    borderRadius={"20px"}
                    width={"140px"}
                    sx={{backgroundColor: "gray"}}
                    padding={"10px 5px 5px 5px"}
                >
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <SpecialisationCard label="haha" masteryBonus={1} statBonus={1}></SpecialisationCard>
                    <Typography variant="body2">Навыки</Typography>
                </Box>
            </Box>
        </Box>

    </Box> );
}
 
export default CharacterList;