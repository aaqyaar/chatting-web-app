import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Drawer, TextField, Typography } from "@mui/material";
import useResponsive from "hooks/useResponsive";
import Scrollbar from "components/Scrollbar";
import { LatestChatList } from "views/latest-chats";
import { latestContacts } from "data/latest";
import Iconify from "components/Iconify";

const DRAWER_WIDTH = 300;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

type Props = {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
};

export default function ChattedContacts({
  isOpenSidebar,
  onCloseSidebar,
}: Props) {
  const { pathname } = useLocation();
  const [latestContacted, setLatestContacted] = useState("");
  const isDesktop = useResponsive({ query: "up", key: "lg" });

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const dataFiltered = filteredLatestContacts({
    array: latestContacts && latestContacts,
    latestContacted,
  });

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 1 }}>
        <TextField
          fullWidth
          placeholder="Search contacts"
          size="small"
          value={latestContacted}
          onChange={(e) => setLatestContacted(e.target.value)}
          InputProps={{
            startAdornment: (
              <Iconify
                icon="eva:search-outline"
                sx={{ color: "text.disabled" }}
                width={22}
                height={22}
              />
            ),
          }}
        />
      </Box>
      {dataFiltered && dataFiltered.length > 0 ? (
        <LatestChatList navConfig={dataFiltered} />
      ) : (
        <Box sx={{ p: 2.5, textAlign: "center" }}>
          <Iconify
            icon="eva:alert-circle-outline"
            sx={{ color: "text.disabled", mb: 1 }}
            width={24}
            height={24}
          />
          <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
            No contacts found
          </Typography>
        </Box>
      )}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH, position: "relative" },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              position: "relative",
              bgcolor: "background.none",
              borderRightStyle: "solid",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}

function filteredLatestContacts({
  array,
  latestContacted,
}: {
  array: any[];
  latestContacted: string;
}) {
  return array?.filter((item: any) => {
    const { name } = item;
    return name.toLowerCase().includes(latestContacted.toLowerCase());
  });
}
