import Grid from "@mui/material/Grid";
import React from "react";
import MyForm from "../Component/MyForm";
import MyTable from "../Component/MyTable";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <MyForm />
      <Grid>
        <MyTable />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
