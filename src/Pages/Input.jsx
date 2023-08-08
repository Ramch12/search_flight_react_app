import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Input = () => {
  const [input, setInput] = useState({});

  const nevigate = useNavigate();

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    fetch("https://flight-data-k0hf.onrender.com/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        if (result.data) {
          nevigate("/data", { state: { result: result.data } });
        } else {
          nevigate("/data", { state: { result:result } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Navbar />
      <Grid>
        <form
          action=""
          className="flex flex-col w-1/2 mx-auto mt-10"
          onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Source"
            variant="outlined"
            margin="normal"
            required
            onChange={handleChange}
            name="Source"
          />
          <TextField
            id="outlined-basic"
            label="Destination"
            variant="outlined"
            margin="normal"
            required
            name="Destination"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            margin="normal"
            required
            name="Date"
            type="date"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ width: "200px", marginBlock: "20px", marginX: "auto" }}
            type="submit">
            Search
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default Input;
