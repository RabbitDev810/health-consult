import { RowContainer } from "@/styles/common-styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";

import EditIcon from "../../assets/image/edit.svg?react";
import CustomButton from "../custom-button";
import { isMobileHook } from "@/utils";
import FormField from "./form-field";
import { useParams } from "react-router-dom";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5% 3%;
  border-radius: 15px;
  border: 1px solid #e9ebec;
  width: 90%;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 94%;
  gap: 2rem;
  padding: 3%;
`;

const Label = styled("span")`
  background-color: white;
  padding: 0 4px;
  position: absolute;
  top: -10px;
  left: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const IconWrapper = styled("div")`
  position: absolute;
  top: 5px;
  right: 8px;
`;

const InfoEncounterForm = () => {
  const { id } = useParams();
  const [officeName, setOfficeName] = useState("");
  const [visitType, setVisitType] = useState("");
  const [procedure, setProcedure] = useState("");
  const [cycle, setCycle] = useState("");
  const [provider, setProvider] = useState("");
  const [encounterDate, setEncounterDate] = useState();
  const [encounterType, setEncounterType] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [visitorId, setVisitorId] = useState("");
  const [visitorDob, setVisitorDob] = useState();
  const [address, setAddress] = useState("");
  const [HPI, setHPI] = useState("");
  const [ROS, setROS] = useState("");
  const [procedures, setProcedures] = useState("");
  const [plan, setPlan] = useState("");
  const [orders, setOrders] = useState("");
  const [diagnosisCode, setDiagnosisCode] = useState("");
  const [billingCode, setBillingCode] = useState("");

  const isMobile = isMobileHook();

  const theme = useTheme();
  const calendarTheme = (calendarTheme) =>
    createTheme({
      ...calendarTheme,
      components: {
        MuiDateCalendar: {
          styleOverrides: {
            root: {
              color: "white",
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "#e91e63",
              border: "1px solid",
              backgroundColor: "white",
              // theme.palette.primary.main,
            },
          },
        },
        MuiPickersCalendarHeader: {
          styleOverrides: {
            label: {
              color: "black",
            },
          },
        },
      },
    });
  const dropdownTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            "&.css-wjjlnc-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
              backgroundColor: "white",
            },
          },
        },
      },
    },
  });
  return (
    <Root>
      <TextField
        variant="outlined"
        placeholder="Enter your valid Id"
        value={id}
        disabled={true}
      />
      <Container>
        <Label>General</Label>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Office"
            placeholder="Enter your Office"
            value={officeName}
            onChange={setOfficeName}
            width={isMobile ? "100%" : "50%"}
          />
          <FormField
            label="Visit Type"
            placeholder="Enter your Visit Type"
            value={visitType}
            onChange={(e) => setVisitType(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Procedure"
            placeholder="Enter your Procedure"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />
          <FormField
            label="Cycle"
            placeholder="Enter your Cycle"
            value={cycle}
            onChange={(e) => setCycle(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Provider"
            placeholder="Enter your Provider"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />

          <ThemeProvider theme={calendarTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DatePicker"]}> */}
              <DatePicker
                sx={{ width: isMobile ? "100%" : "50%" }}
                label="MM/DD/YYYY"
                value={encounterDate}
                onChange={(newValue) => setEncounterDate(newValue)}
              />
              {/* </DemoContainer> */}
            </LocalizationProvider>
          </ThemeProvider>
        </RowContainer>
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <ThemeProvider theme={dropdownTheme}>
            <Select
              style={{ width: isMobile ? "100%" : "50%" }}
              value={encounterType}
              label="Age"
              onChange={(event) =>
                setEncounterType(event.target.value as string)
              }
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </ThemeProvider>
        </FormControl>
      </Container>
      <Container>
        <Label>Visitors</Label>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Name"
            placeholder="Enter your Name"
            value={visitorName}
            onChange={(e) => setVisitorName(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />
          <FormField
            label="Sex"
            placeholder="Enter your Sex"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Phone Number"
            placeholder="Enter your valid Phone Number"
            value={gender}
            onChange={(e) => setPhoneNumber(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />

          <TextField
            variant="outlined"
            placeholder="Enter your valid Id"
            value={id}
            disabled={true}
            style={{ width: isMobile ? "100%" : "50%" }}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <ThemeProvider theme={calendarTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DatePicker"]}> */}
              <DatePicker
                sx={{ width: isMobile ? "100%" : "50%" }}
                label="MM/DD/YYYY"
                value={visitorDob}
                onChange={(newValue) => setVisitorDob(newValue)}
              />
              {/* </DemoContainer> */}
            </LocalizationProvider>
          </ThemeProvider>
          <FormField
            label="Address"
            placeholder="Enter your Address"
            value={gender}
            onChange={(e) => setAddress(e.target.value)}
            width={isMobile ? "100%" : "50%"}
          />
        </RowContainer>
      </Container>
      <Container>
        <Label>HPI</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="HPI"
          placeholder="Enter your HPI"
          value={HPI}
          multiline
          minRows={3}
          onChange={(e) => setHPI(e.target.value)}
        />
      </Container>
      <Container>
        <Label>ROS</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="ROS"
          placeholder="Enter your ROS"
          value={ROS}
          multiline
          minRows={3}
          onChange={(e) => setROS(e.target.value)}
        />
      </Container>
      <Container>
        <Label>Procedures</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="Procedures"
          placeholder="Enter your Procedures"
          value={procedures}
          multiline
          minRows={3}
          onChange={(e) => setProcedures(e.target.value)}
        />
      </Container>
      <Container>
        <Label>Plan</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="Plan"
          placeholder="Enter your Plan"
          value={plan}
          multiline
          minRows={3}
          onChange={(e) => setPlan(e.target.value)}
        />
      </Container>
      <Container>
        <Label>Plan</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="Orders"
          placeholder="Enter your Orders"
          value={orders}
          multiline
          minRows={3}
          onChange={(e) => setOrders(e.target.value)}
        />
      </Container>
      <Container>
        <Label>Diagnosis Code</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="Diagnosis Code"
          placeholder="Enter your Diagnosis Code"
          value={diagnosisCode}
          multiline
          minRows={3}
          onChange={(e) => setDiagnosisCode(e.target.value)}
        />
      </Container>
      <Container>
        <Label>Billing Code</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="Billing Code"
          placeholder="Enter your Billing Code"
          value={billingCode}
          multiline
          minRows={3}
          onChange={(e) => setBillingCode(e.target.value)}
        />
      </Container>
      <div style={{ alignSelf: "center", width: "150px" }}>
        <CustomButton
          label="save"
          background={theme.palette.primary.main}
          textColor="white"
        />
      </div>
    </Root>
  );
};

export default InfoEncounterForm;
