import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_LIST } from "../Redux/types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Profile = () => {
  const product = useSelector((state) => state.ProductListReducer || []);

  const dispatch = useDispatch();
  const getProductList = () => {
    dispatch({ type: GET_PRODUCT_LIST });
  };

  useEffect(() => getProductList(), []);

  return (
    <TableContainer component={Paper} className="tableView">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Select</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Descriptions</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product &&
            product.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  <FormGroup>
                    <FormControlLabel align="center" control={<Checkbox />} />
                  </FormGroup>
                </StyledTableCell>
                <StyledTableCell align="center">{user.brand}</StyledTableCell>
                <StyledTableCell align="center">
                  {user.category}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.description}
                </StyledTableCell>
                <StyledTableCell align="center">{user.images}</StyledTableCell>
                <StyledTableCell align="center">{user.price}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Profile;
