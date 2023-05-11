import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Machine from "./component/Machine/Machine";
import Header from "./component/Header";

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} md={12}>
          <Header />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Machine key={1} machine={"machine1"} shift={"shift1"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Machine key={2} machine={"machine2"} shift={"shift1"} />
        </Grid>
      </Grid>
    </Box>
  );
}
