import React from "react";
import { Card, Stack, Box } from "@mui/material";
import { Navbar } from "layouts";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          margin: 2,
          padding: 0,
          borderRadius: 0,
        }}
      >
        <Navbar />
        <Box sx={{ flexGrow: 1, overflow: "auto", mb: 2 }}>{children}</Box>
      </Card>
    </Stack>
  );
}
