import { NavLink as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Chip, List, ListItemButton } from "@mui/material";
import MyAvatar from "components/MyAvatar";
import type { LatestContactsType } from "data/latest";

// ----------------------------------------------------------------------
const ListItemStyle = styled((props: any) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 50,
  padding: "0 16px",
  margin: "15px 0",
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: "0",
  transition: theme.transitions.create("all"),
  "&:hover": {
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------
type NavSectionProps = {
  navConfig: any;
  other?: any;
};

export default function LatestChatList({
  navConfig,
  ...other
}: NavSectionProps) {
  // const match = (path: string) =>
  //   path ? !!matchPath({ path, end: false }) : false;

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item: LatestContactsType) => (
          <LatestChatItem
            key={item._id}
            item={item}
            // active={match}
          />
        ))}
      </List>
    </Box>
  );
}

function LatestChatItem({
  item,
}: //  active
LatestChatItemProps) {
  // const theme = useTheme();

  // const activeRootStyle = {
  //   color: "primary.main",
  //   fontWeight: "fontWeightMedium",
  //   bgcolor: alpha(
  //     theme.palette.primary.main,
  //     theme.palette.action.selectedOpacity
  //   ),
  // };

  return (
    <ListItemStyle
      component={RouterLink}
      sx={
        {
          // ...(isActiveRoot && activeRootStyle),
        }
      }
    >
      <MyAvatar displayName={item.name} avatar={item.avatarUrl} />
      <Box sx={{ ml: 2 }}>
        <Box
          sx={{
            typography: "subtitle2",
            color: "text.primary",
            fontWeight: "fontWeightMedium",
          }}
        >
          {item.name}
        </Box>
        <Box
          sx={{
            typography: "body2",
            color: "text.secondary",
            fontFamily: "Space Grotesk",
          }}
        >
          {item.messages[0]}
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Chip
            label={item.messages.length}
            size="small"
            color={item.messages.length > 0 ? "primary" : "default"}
            sx={{
              fontWeight: "fontWeightMedium",
              fontFamily: "Space Grotesk",
            }}
          />
        </Box>
      </Box>
    </ListItemStyle>
  );
}

type LatestChatItemProps = {
  item: LatestContactsType;
  active?: (v: string) => boolean;
};
