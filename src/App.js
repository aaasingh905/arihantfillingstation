import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Machine from "./component/Machine/Machine";

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Machine key={1} number={1} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Machine key={2} number={2} />
        </Grid>
      </Grid>
    </Box>
  );
}
