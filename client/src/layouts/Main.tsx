import { useState } from "react";
import { styled } from "@mui/material/styles";
import { LatestChats } from "../views/latest-chats";

const RootStyle = styled("div")({
  display: "flex",
  overflow: "hidden",
  position: "relative",
});

// ----------------------------------------------------------------------

export default function Main() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <LatestChats isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
    </RootStyle>
  );
}
