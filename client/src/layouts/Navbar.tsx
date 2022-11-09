import { Typography, Stack, Link } from "@mui/material";
import Image from "components/Image";

function Navbar() {
  return (
    <Stack
      direction="row"
      flexDirection={"row"}
      sx={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        height: 64,
        alignItems: "center",
        paddingX: 3,
      }}
      justifyContent="space-between"
    >
      <Stack
        spacing={2}
        direction="row"
        justifyContent={"center"}
        alignItems="center"
      >
        <Image
          src="https://www.pngall.com/wp-content/uploads/2016/04/Chat-PNG.png"
          alt="Chat Logo"
          width={30}
          height={30}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          letterSpacing={1}
        >
          Chat
          <Typography variant="h6" fontFamily={"Poppins"} component={"span"}>
            Ty
          </Typography>
        </Typography>
      </Stack>

      <Stack
        spacing={2}
        direction="row"
        justifyContent={"center"}
        alignItems="center"
        fontFamily={"Space Grotesk"}
        color={"inherit"}
      >
        <Link color={"inherit"}>Chat</Link>
        <Link color={"inherit"}>Contacts</Link>
        <Link color={"inherit"}>Settings</Link>
        <Link color={"inherit"}>FAQS</Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
