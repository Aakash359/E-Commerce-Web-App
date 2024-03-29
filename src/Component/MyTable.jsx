import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../Redux/slice/user";
import { DELETE_USER_BY_ID, GET_USERS } from "../Redux/types";

const MyTable = () => {
  const rows = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUserList = () => {
    dispatch({ type: GET_USERS });
  };

  useEffect(() => getUserList(), [dispatch]);

  return (
    <TableContainer component={Paper} className="tableView">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.password}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange" }}
                  onClick={() => dispatch(setUserSlice(row))}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange" }}
                  onClick={() =>
                    dispatch({ type: DELETE_USER_BY_ID, id: row.id })
                  }
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
