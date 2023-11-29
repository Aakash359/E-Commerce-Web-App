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
import {
  DELETE_USER_BY_ID,
  GET_USERS,
  UPDATE_USER_BY_ID,
} from "../Redux/types";

const MyTable = () => {
  const rows = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => dispatch({ type: GET_USERS }), [dispatch]);

  return (
    <TableContainer component={Paper} className="tableView">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange" }}
                  onClick={() => dispatch(setUserSlice(row))}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right">
                {" "}
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
