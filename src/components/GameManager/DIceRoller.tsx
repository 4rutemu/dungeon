"use client"

import { FunctionComponent, use, useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Snackbar } from "@mui/joy";

interface DiceRollerProps {
}

const DiceRoller: FunctionComponent<DiceRollerProps> = () => {
  const [results, setResults] = useState<number[]>([20]);
  const [numDice, setNumDice] = useState<number>(1);
  const [numSides, setNumSides] = useState<number>(20);
  const [open, setOpen] = useState<boolean>(false)

  const rollDice = () => {
    const rolls: number[] = [];
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      rolls.push(roll);
    }
    setResults(rolls);
    setOpen(true);
  };

  return (
    <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"50%"}
    >
      <FormControl fullWidth>
        <InputLabel>Number of dice</InputLabel>
        <Select sx={{textAlign: "center"}} variant="standard" value={numDice} onChange={e => setNumDice(Number(e.target.value))}>
          <MenuItem sx={{textAlign: "center"}} value={1}>1</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={2}>2</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={3}>3</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={4}>4</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={5}>5</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={6}>6</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={7}>7</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={8}>8</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={9}>9</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{margin: 3}}>
        <InputLabel>Number of sides</InputLabel>
        <Select sx={{textAlign: "center"}} variant="standard" value={numSides} onChange={e => setNumSides(Number(e.target.value))}>
          <MenuItem sx={{textAlign: "center"}} value={4}>4</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={6}>6</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={8}>8</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={10}>10</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={12}>12</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={20}>20</MenuItem>
          <MenuItem sx={{textAlign: "center"}} value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={rollDice}>
        Roll dice
      </Button>
      <Snackbar
        sx={{alignContent: "center"}}
        autoHideDuration={3000}
        open={open}
        variant={"solid"}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setOpen(false);
        }}
      >
        <Typography variant="h5" textAlign={"center"}>
            {open && results.length > 1 ? results.join(" + ") + " = " + results.reduce((prev, curr) => prev + curr) : results.reduce((prev, curr) => prev + curr)}
        </Typography>
      </Snackbar>
    </Box>
  );
};

export default DiceRoller;