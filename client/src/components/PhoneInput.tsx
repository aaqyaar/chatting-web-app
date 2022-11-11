import { forwardRef } from "react";
import { TextField } from "@mui/material";

type Props = {
  props: any;
  ref: any;
  InputProps: any;
};

const PhoneInput = ({ props, ref, InputProps }: Props) => {
  return (
    <TextField
      {...props}
      InputProps={InputProps}
      inputRef={ref}
      fullWidth
      size="large"
      label="Phone Number"
      variant="outlined"
      name="phone"
      type="number"
    />
  );
};
export default forwardRef(PhoneInput);
