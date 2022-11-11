import { useState } from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { MuiTelInput as PhoneInput } from "mui-tel-input";
import Image from "components/Image";

export default function LoginForm() {
  const [value, setValue] = useState<any>("");

  const handleChange = (event: any) => {
    setValue(event);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
        >
          <Image
            src="https://www.pngall.com/wp-content/uploads/2016/04/Chat-PNG.png"
            alt="logo"
            width={30}
            height={30}
          />
          <Typography
            variant="h4"
            component="h1"
            fontFamily={"Poppins"}
            align="center"
          >
            Welcome to ChatTy
          </Typography>
        </Stack>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Typography variant="body2" fontFamily={"Space Grotesk"} gutterBottom>
            Enter your phone number to login or create an account to continue to
            the app. We will send you a verification code. Please enter the code
            to verify your phone number.
          </Typography>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            forceCallingCode
            focusOnSelectCountry
            disableFormatting
            variant="outlined"
            onChange={handleChange}
          />

          <LoadingButton fullWidth variant="contained" size="large">
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </Grid>
  );
}
