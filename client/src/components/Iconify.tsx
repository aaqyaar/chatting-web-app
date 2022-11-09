// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

interface IIconify {
  icon: any;
  width?: number;
  height?: number;
  color?: string;
  sx?: any;
}

export default function Iconify({ icon, sx, ...other }: IIconify) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
