import Grid from "@mui/material/Grid";
import React from "react";
import MyForm from "../Component/MyForm";
import MyTable from "../Component/MyTable";
import { Provider } from "react-redux";
import store from "../store/configureStore";
const Dashboard = () => {
  return (
    <Provider store={store}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <MyForm />
        </Grid>
        <Grid item xs={4} md={8} lg={6}>
          <MyTable />
        </Grid>
      </Grid>
    </Provider>
  );
};

export default Dashboard;
