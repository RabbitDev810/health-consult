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
import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";

import EditIcon from "../../assets/image/edit.svg?react";
import CustomButton from "../custom-button";
import { isMobileHook } from "@/utils";
import FormField from "./form-field";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getEncounter } from "@/graphql/queries";
import { updateEncounter } from "@/graphql/mutations";

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
  const [formValues, setFormValues] = useState({
    id,
    office: "",
    visitType: "",
    procedure: "",
    cycle: "",
    provider: "",
    encounterDate: "",
    encounterType: "",
    name: "",
    sex: "",
    phoneNumber: "",
    visitorId: "",
    visitorDate: "",
    address: "",
    HPI: "",
    ROS: "",
    procedures: "",
    plan: "",
    orders: "",
    diagnosisCode: "",
    billingCode: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

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

  const saveEncounterInfo = async () => {
    try {
      await API.graphql(
        graphqlOperation(updateEncounter, {
          input: formValues,
        })
      );
      setShowSuccess(true);
    } catch (error) {
      console.error("Error saving information:", error);
    }
  };

  useEffect(() => {
    const fetchEncounterInfo = async () => {
      try {
        const encounterData: any = await API.graphql(
          graphqlOperation(getEncounter, { id })
        );
        const encounter = encounterData.data.getEncounter;
        const { createdAt, updatedAt, __typename, ...encounterItem } =
          encounter;
        if (encounter) {
          setFormValues(encounterItem);
        }
      } catch (error) {}
    };
    fetchEncounterInfo();
  }, [id, showSuccess]);
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
            value={formValues.office}
            onChange={(value) =>
              setFormValues({ ...formValues, office: value })
            }
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />
          <FormField
            label="Visit Type"
            placeholder="Enter your Visit Type"
            value={formValues.visitType}
            onChange={(value) =>
              setFormValues({ ...formValues, visitType: value })
            }
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Procedure"
            placeholder="Enter your Procedure"
            value={formValues.procedure}
            onChange={(value) =>
              setFormValues({ ...formValues, procedure: value })
            }
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />
          <FormField
            label="Cycle"
            placeholder="Enter your Cycle"
            value={formValues.cycle}
            onChange={(value) => setFormValues({ ...formValues, cycle: value })}
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Provider"
            placeholder="Enter your Provider"
            value={formValues.provider}
            onChange={(value) =>
              setFormValues({ ...formValues, provider: value })
            }
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />

          <ThemeProvider theme={calendarTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DatePicker"]}> */}
              <DatePicker
                sx={{ width: isMobile ? "100%" : "48%" }}
                label="MM/DD/YYYY"
                value={formValues.encounterDate}
                onChange={(value) =>
                  setFormValues({ ...formValues, encounterDate: value })
                }
              />
              {/* </DemoContainer> */}
            </LocalizationProvider>
          </ThemeProvider>
        </RowContainer>
        <FormControl fullWidth>
          <InputLabel>Encounter Type</InputLabel>
          <ThemeProvider theme={dropdownTheme}>
            <Select
              style={{ width: isMobile ? "100%" : "48%" }}
              value={formValues.encounterType}
              label="Encounter type"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  encounterType: e.target.value as string,
                })
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
            value={formValues.name}
            onChange={(value) => setFormValues({ ...formValues, name: value })}
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />
          <FormField
            label="Sex"
            placeholder="Enter your Sex"
            value={formValues.sex}
            onChange={(value) => setFormValues({ ...formValues, sex: value })}
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <FormField
            label="Phone Number"
            placeholder="Enter your valid Phone Number"
            value={formValues.phoneNumber}
            onChange={(value) =>
              setFormValues({ ...formValues, phoneNumber: value })
            }
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />

          <FormField
            label="Id"
            placeholder="Enter your valid Id"
            value={formValues.visitorId}
            width={isMobile ? "100%" : "48%"}
            onChange={(value) =>
              setFormValues({ ...formValues, visitorId: value })
            }
            formValues={{ mutationString: updateEncounter, values: formValues }}
          />
        </RowContainer>
        <RowContainer
          style={{ gap: "1rem", flexDirection: isMobile ? "column" : "row" }}
        >
          <ThemeProvider theme={calendarTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DatePicker"]}> */}
              <DatePicker
                sx={{ width: isMobile ? "100%" : "48%" }}
                label="MM/DD/YYYY"
                value={formValues.visitorDate}
                onChange={(value) =>
                  setFormValues({ ...formValues, visitorDate: value })
                }
              />
              {/* </DemoContainer> */}
            </LocalizationProvider>
          </ThemeProvider>
          <FormField
            label="Address"
            placeholder="Enter your Address"
            value={formValues.address}
            onChange={(value) =>
              setFormValues({ ...formValues, address: value })
            }
            width={isMobile ? "100%" : "48%"}
            formValues={{ mutationString: updateEncounter, values: formValues }}
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
          value={formValues.HPI}
          multiline
          minRows={3}
          onChange={(value) => setFormValues({ ...formValues, HPI: value })}
          formValues={{ mutationString: updateEncounter, values: formValues }}
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
          value={formValues.ROS}
          multiline
          minRows={3}
          onChange={(value) => setFormValues({ ...formValues, ROS: value })}
          formValues={{ mutationString: updateEncounter, values: formValues }}
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
          value={formValues.procedures}
          multiline
          minRows={3}
          onChange={(value) =>
            setFormValues({ ...formValues, procedures: value })
          }
          formValues={{ mutationString: updateEncounter, values: formValues }}
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
          value={formValues.plan}
          multiline
          minRows={3}
          onChange={(value) => setFormValues({ ...formValues, plan: value })}
          formValues={{ mutationString: updateEncounter, values: formValues }}
        />
      </Container>
      <Container>
        <Label>Orders</Label>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
        <FormField
          label="Orders"
          placeholder="Enter your Orders"
          value={formValues.orders}
          multiline
          minRows={3}
          onChange={(value) => setFormValues({ ...formValues, orders: value })}
          formValues={{ mutationString: updateEncounter, values: formValues }}
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
          value={formValues.diagnosisCode}
          multiline
          minRows={3}
          onChange={(value) =>
            setFormValues({ ...formValues, diagnosisCode: value })
          }
          formValues={{ mutationString: updateEncounter, values: formValues }}
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
          value={formValues.billingCode}
          multiline
          minRows={3}
          onChange={(value) =>
            setFormValues({ ...formValues, billingCode: value })
          }
          formValues={{ mutationString: updateEncounter, values: formValues }}
        />
      </Container>
      {showSuccess && (
        <span
          style={{
            color: theme.palette.primary.main,
            fontWeight: "600",
          }}
        >
          Information saved successfully!
        </span>
      )}
      <div style={{ alignSelf: "center", width: "150px" }}>
        <CustomButton
          label="save"
          background={theme.palette.primary.main}
          textColor="white"
          onClick={saveEncounterInfo}
        />
      </div>
    </Root>
  );
};

export default InfoEncounterForm;
