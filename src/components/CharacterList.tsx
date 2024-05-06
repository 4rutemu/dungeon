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
                    marginBottom={"13px"}
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

interface HealthCardProps {
    
}
 
const HealthCard: FunctionComponent<HealthCardProps> = () => {
    return ( 
        <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"400px"}
        borderRadius={"20px"}
        sx={{backgroundColor: "gray"}}
        padding={"10px 5px 10px 5px"}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                sx={{backgroundColor: "white"}}
                borderRadius={"20px"}
                marginBottom={"7px"}
                padding={"7px"}
            >
                <TextField label={"КЗ"} />
                <TextField label={"Инициатива"} />
                <TextField label={"Скорость"} />
            </Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                sx={{backgroundColor: "white"}}
                borderRadius={"20px"}
                padding={"7px"}
            >
                <TextField label={"Текущие хиты"} />
                <TextField label={"Кости хитов"} />
            </Box>
        </Box>
     );
}
 
const CharacterList: FunctionComponent<CharacterListProps> = () => {
    return ( 
    <Box 
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
    >
        {/* Шапка листа перса */}
        <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            padding={"15px"}
            width={"860px"}
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
        <Box padding={"15px"}
        display={"flex"}
        justifyContent={"left"}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={"140px"}
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
                    width={"140px"}
                    sx={{backgroundColor: "gray"}}
                    padding={"5px 5px 10px 5px"}
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
                    <Typography variant="body2">Спасброски</Typography>
                </Box>
                <Box
                    component="img"
                    marginTop={"60%"}
                    sx={{
                        height: 130,
                        width: 140,
                    }}
                    src="images/Wiki.png"
                />
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
            <Box marginLeft={"7px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={"20px"}
            sx={{backgroundColor: "gray"}}
            padding={"0px 5px 5px 5px"}
            >
                    <HealthCard/>
                    <Box 
                        display={"flex"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        sx={{backgroundColor: "white"}}
                        width={"400px"}
                        borderRadius={"20px"}
                        marginBottom={"7px"}
                        padding={"7px"}
                    >
                        <TextField sx={{marginBottom: "7px"}} id="atacks" label="Атаки" multiline minRows={5} fullWidth/>
                        <TextField sx={{marginBottom: "7px"}} id="features" label="Способности" multiline minRows={5} fullWidth/>
                        <Box sx={{marginBottom: "7px"}} display={"flex"}>
                            <TextField id="plat" type="number" label="ПМ"/>
                            <TextField id="gold" type="number" label="ЗМ"/>
                            <TextField id="silver" type="number" label="СМ"/>
                            <TextField id="copper" type="number" label="ММ"/>
                        </Box>
                        <TextField id="inventory" label="Снаряжение" multiline minRows={8} fullWidth/>
                    </Box>
            </Box>
        </Box>

    </Box> );
}
 
export default CharacterList;