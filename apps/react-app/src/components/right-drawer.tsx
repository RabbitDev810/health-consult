import React, { useState } from "react";
import { Box, Typography, Drawer, IconButton, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { RecordAudio } from "./record-audio";
import { Messages } from "./messages";
import { useDrawerContext } from "@/hooks/useDrawer";

const RightDrawer = ({ isOpen, onToggle }) => {
  const {isLeftDrawerOpen} = useDrawerContext();
  const theme = useTheme();
  const drawerWidth = isOpen ? isLeftDrawerOpen? "85vw": "95vw" : "30%";

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        transition: "width 0.3s",
        width: "100%",
        minWidth: drawerWidth
      }}
    >
        <IconButton
          onClick={onToggle}
          sx={{
            float:"left",
            position: "absolute",
            top: "7vh",
            left:"-16px",
            transition: "all 0.3s",
            width: "32px",
            height: "32px",
            zIndex: 20001,
            color: theme.palette.primary.main,
            background: theme.palette.grey[100],
            padding: 1,
            "&:hover": {
              color: theme.palette.secondary.main,
              background: theme.palette.grey[50],
            },
          }}
        >
          {isOpen ? <ArrowForwardIos /> : <ArrowBackIos />}
        </IconButton>
        <Box className="flex" sx={{
          flexDirection: "column",
          minWidth: isOpen?drawerWidth:'98%',
          maxWidth: isOpen ? drawerWidth : '98%'
        }}>
        <Box className="w-full rounded-lg bg-blue-500 h-fit text-white flex flex-row justify-between content-between items-center">
          <Box>
            <Typography
              variant="h3"
              sx={{
                ml: "1vw",
                fontSize: 30,
              }}
            >
              Start Recording
            </Typography>
          </Box>
          <RecordAudio showText={false} />
        </Box>
        <Box className="flex overflow-scroll" maxHeight={"90vh"}>
          <Messages className={""} />
        </Box>
      </Box>
    </Box>
  );
};

export default RightDrawer;
