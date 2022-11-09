import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
// import { Counter } from "features/counter/Counter";

function App() {
  return (
    <Grid container spacing={3} p={4}>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="secondary" disabled>
            Disabled
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
