"use client"

import { FunctionComponent, useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { nanoid } from "nanoid";

interface DiceRollerProps {
}

const DiceRoller: FunctionComponent<DiceRollerProps> = () => {
  const [results, setResults] = useState<number[]>([]);
  const [numDice, setNumDice] = useState<number>(1);
  const [numSides, setNumSides] = useState<number>(20);

  const rollDice = () => {
    const rolls: number[] = [];
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      rolls.push(roll);
    }
    setResults(rolls);
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
        <Select value={numDice} onChange={e => setNumDice(Number(e.target.value))} fullWidth>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{margin: 3}}>
        <InputLabel>Number of sides</InputLabel>
        <Select value={numSides} onChange={e => setNumSides(Number(e.target.value))} fullWidth>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={rollDice}>
        Roll dice
      </Button>
      <ul>
        {results.map(result => (
          <li key={nanoid()}>{result}</li>
        ))}
      </ul>
    </Box>
  );
};

export default DiceRoller;