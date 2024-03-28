import {
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import { LocalHospital, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDrawerContext } from "@/hooks/useDrawer";
import RightDrawer from "@/components/right-drawer";

export const TopBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="w-full rounded-lg bg-blue-500 h-fit text-white flex justify-between items-center"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: 30,
          }}
        >
          Create A New Visit
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={() => navigate("/create-visit")}>
          <LocalHospital sx={{ fontSize: "32px", color: "white" }} />
        </IconButton>
        <IconButton onClick={() => navigate("/home")}>
          <History sx={{ fontSize: "32px", color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
export const NavList = () => {
  return (
    <Box
      className="w-full bg-blue-200 flex justify-center items-center rounded-lg"
      sx={{
        py: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        Visit Info
      </Typography>
    </Box>
  );
};
export const VisitInfo = () => {
  const theme = useTheme();
  return (
    <Box
      className="p-10 flex flex-col gap-5 bg-blue-50 w-full rounded-lg"
      sx={{
        flexDirection: "column",
      }}
    >
      <Box className="flex flex-col w-full">
        <TextField
          id="filled-basic"
          variant="outlined"
          label="Name"
          placeholder="Enter the patient name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: theme.palette.primary.main },
          }}
          InputProps={{
            style: { color: theme.palette.grey[900] },
          }}
        />
      </Box>
      <Box className="flex flex-col">
        <TextField
          id="filled-basic"
          variant="outlined"
          label="Address"
          placeholder="Enter the patient Address"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: theme.palette.primary.main },
          }}
          InputProps={{
            style: { color: theme.palette.grey[900] },
          }}
        />
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Box className="flex flex-col">
          <TextField
            id="filled-basic"
            variant="outlined"
            label="Sex"
            placeholder="Gender"
            fullWidth
            margin="normal"
            InputLabelProps={{
              style: { color: theme.palette.primary.main },
            }}
            InputProps={{
              style: { color: theme.palette.grey[900] },
            }}
          />
        </Box>
        <Box className="flex flex-col">
          <TextField
            id="filled-basic"
            variant="outlined"
            label="Date Of Birth"
            placeholder="Date Of Birth"
            fullWidth
            margin="normal"
            InputLabelProps={{
              style: { color: theme.palette.primary.main },
            }}
            InputProps={{
              style: { color: theme.palette.grey[900] },
            }}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          alignSelf: "center",
          px: 5,
          py: 1,
        }}
      >
        Save
      </Button>
    </Box>
  );
};
const CreateVisit = () => {
  const {
    isLeftDrawerOpen,
    toggleLeftDrawer,
    isRightDrawerOpen,
    toggleRightDrawer,
  } = useDrawerContext();

  return (
    <div className="flex flex-row justify-between">
      <Box
        sx={{
          flex: 3,
          margin: 1,
          display: isRightDrawerOpen ? "none" : "block",
        }}
      >
        <TopBar />
        <NavList />
        <VisitInfo />
      </Box>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <RightDrawer isOpen={isRightDrawerOpen} onToggle={toggleRightDrawer} />
      </Box>
    </div>
  );
};

export default CreateVisit;
