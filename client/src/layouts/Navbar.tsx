import { Typography, Stack, Divider, Link } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import Image from "components/Image";

function Navbar() {
  return (
    <>
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
        >
          <Link to="/" component={RouterLink}>
            Home
          </Link>
          <Link component={RouterLink} to="/about">
            About
          </Link>
          <Link component={RouterLink} to="/contacts">
            Contact
          </Link>
          <Link component={RouterLink} to="/settings">
            Settings
          </Link>
          <Link component={RouterLink} to="/faqs">
            FAQS
          </Link>
        </Stack>
      </Stack>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: 5,
          bgcolor: "divider",
          mb: 2,
        }}
      />
    </>
  );
}

export default Navbar;
