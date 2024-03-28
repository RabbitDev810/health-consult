import { useEffect, useState } from "react";
import { ThemeProvider, createTheme, styled, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import CustomButton from "../custom-button";
import { RowContainer } from "@/styles/common-styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { isMobileHook } from "@/utils";
import { API, graphqlOperation } from "aws-amplify";
import { updateInfo } from "../../graphql/mutations";
import { useParams } from "react-router-dom";
import { getInfo } from "@/graphql/queries";
import Loading from "../general/loading";
import FormField from "./form-field";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5%;
  border-radius: 15px;
  border: 1px solid #e9ebec;
  /* width: 100%; */
`;

const InfoTabForm = () => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    id: id,
    name: "",
    date: null,
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    loggedInUserEmail: localStorage.getItem("email"),
  });
  const [loading, setLoading] = useState(true);
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
  const saveInfo = async () => {
    try {
      await API.graphql(graphqlOperation(updateInfo, { input: formValues }));
      setShowSuccess(true);
      // Optionally, clear the form or navigate the user elsewhere
    } catch (error) {
      console.error("Error saving information:", error);
    }
  };
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const infoData: any = await API.graphql(
          graphqlOperation(getInfo, { id })
        );
        const infoItem = infoData.data.getInfo;
        const { createdAt, updatedAt, __typename, ...newInfoItem } = infoItem;
        if (infoItem) {
          setFormValues(newInfoItem);
        }
      } catch (error) {
        console.error("Error fetching information:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfo();
  }, [id]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Root>
          <TextField
            variant="outlined"
            placeholder="Enter your valid Id"
            value={id}
            disabled={true}
          />
          <FormField
            label="Name"
            placeholder="Enter your full name"
            value={formValues.name}
            onChange={(value) => setFormValues({ ...formValues, name: value })}
            formValues={{ mutationString: updateInfo, values: formValues }}
          />
          <ThemeProvider theme={calendarTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DatePicker"]}> */}
              <DatePicker
                label="MM/DD/YYYY"
                value={formValues.date}
                onChange={(value) =>
                  setFormValues({ ...formValues, date: value })
                }
              />
              {/* </DemoContainer> */}
            </LocalizationProvider>
          </ThemeProvider>
          {/* <div>Address</div> */}
          <FormField
            label="Address 1"
            placeholder="Address 1"
            value={formValues.address1}
            onChange={(value) =>
              setFormValues({ ...formValues, address1: value })
            }
            labelShrink={true}
            formValues={{ mutationString: updateInfo, values: formValues }}
          />
          <FormField
            label="Address 2"
            placeholder="Address 2"
            value={formValues.address2}
            onChange={(value) =>
              setFormValues({ ...formValues, address2: value })
            }
            labelShrink={true}
            formValues={{ mutationString: updateInfo, values: formValues }}
          />
          <RowContainer
            style={{ gap: "10px", flexDirection: isMobile ? "column" : "row" }}
          >
            <FormField
              label="City"
              placeholder="City"
              value={formValues.city}
              onChange={(value) =>
                setFormValues({ ...formValues, city: value })
              }
              labelShrink={true}
              width={isMobile ? "100%" : "48%"}
              formValues={{ mutationString: updateInfo, values: formValues }}
            />
            <FormField
              label="State"
              placeholder="State"
              value={formValues.state}
              labelShrink={true}
              width={isMobile ? "100%" : "48%"}
              onChange={(value) =>
                setFormValues({ ...formValues, state: value })
              }
              formValues={{ mutationString: updateInfo, values: formValues }}
            />
          </RowContainer>
          <RowContainer
            style={{ gap: "10px", flexDirection: isMobile ? "column" : "row" }}
          >
            <FormField
              type="number"
              label="Zip Code"
              placeholder="Zip Code"
              value={formValues.zipCode}
              width={isMobile ? "100%" : "48%"}
              onChange={(value) =>
                setFormValues({ ...formValues, zipCode: value })
              }
              labelShrink={true}
              formValues={{ mutationString: updateInfo, values: formValues }}
            />
            <FormField
              label="Country"
              placeholder="Country"
              value={formValues.country}
              width={isMobile ? "100%" : "48%"}
              onChange={(value) =>
                setFormValues({ ...formValues, country: value })
              }
              labelShrink={true}
              formValues={{ mutationString: updateInfo, values: formValues }}
            />
          </RowContainer>
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
              onClick={saveInfo}
            />
          </div>
        </Root>
      )}
    </>
  );
};
export default InfoTabForm;
