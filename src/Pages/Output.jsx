import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Output = () => {
  const location = useLocation();
  const result = location.state?.result || [];
  if (result.error) {
    return (
      <>
        <Navbar />
        <h1 className="text-3xl font-serif text-center mt-10">No flights are available at given route</h1>
        <Button variant="contained" sx={{marginX:"auto",marginTop:3,display:"block"}}>
          <Link to="/">Search for another route</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <TableContainer
        component={Paper}
        sx={{ width: 650, marginX: "auto", marginTop: 5 }}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">FightName</TableCell>
              <TableCell align="center">FlightPrice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.flightName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" sx={{marginX:"auto",marginTop:3,display:"block"}}>
          <Link to="/">Search for another route</Link>
        </Button>
    </>
  );
};

export default Output;
