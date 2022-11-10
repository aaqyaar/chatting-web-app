import { forwardRef, ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar as MUIAvatar } from "@mui/material";

type AvatarProps = {
  children: ReactNode;
  sx?: any;
  color?: string;
  other?: any;
};

const Avatar = forwardRef(
  ({ color = "default", children, sx, ...other }: AvatarProps, ref: any) => {
    const theme: any = useTheme();

    if (color === "default") {
      return (
        <MUIAvatar ref={ref} sx={sx} {...other}>
          {children}
        </MUIAvatar>
      );
    }

    return (
      <MUIAvatar
        ref={ref}
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
          ...sx,
        }}
        {...other}
      >
        {children}
      </MUIAvatar>
    );
  }
);

export default Avatar;
