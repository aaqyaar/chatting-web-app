import { Stack, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Stack
      sx={{ height: "90vh", alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700 }}>
        404 | Page Not Found
      </Typography>
    </Stack>
  );
}
