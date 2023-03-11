import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const createData = (name, value) => ({ name, value })
const data = [
	createData('Number', 110023451003),
	createData('IP Type', 'Patents'),
	createData('Applicant Name', 'Company Ltd'),
	createData('Inventor Name', 'Company Ltd'),
	createData('Invention Title', 'Suspension Controller'),
	createData('Status', 'Registered'),
	createData('Priority Date', '1996-06-10'),
	createData('Owner', 'John Doe')
]

function HeadlessTable() {
  return (
    <div>
      <h1>Headless Table</h1>
    </div>
  );
}

export default HeadlessTable;
