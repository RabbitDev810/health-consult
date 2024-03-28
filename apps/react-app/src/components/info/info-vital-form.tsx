import {
  Checkbox,
  FormControlLabel,
  TextField,
  styled,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import { RowContainer, ColumnContainer } from "@/styles/common-styles";
import CustomButton from "../custom-button";
import { isMobileHook } from "@/utils";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getVitals } from "@/graphql/queries";
import { updateVitals } from "@/graphql/mutations";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5%;
  border-radius: 15px;
  border: 1px solid #e9ebec;
  width: 90%;
`;

const InfoVitalForm = () => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    id,
    weightChange: false,
    headache: false,
    pain: false,
    nippleDischarge: false,
    highBloodPressure: false,
    palpitation: false,
    constipation: false,
    diarrhea: false,
    dysuria: false,
    excessiveUrination: false,
    unusualColor: false,
    infertility: false,
    recentPregnancy: false,
    venerealDecease: false,
  });
  const [isWeightChange, setIsWeightChange] = useState(false);
  const [isHeadache, setIsHeadache] = useState(false);
  const [isPain, setIsPain] = useState(false);
  const [isNippleDischarge, setIsNippleDischarge] = useState(false);
  const [isHighBloodPressure, setIsHighBloodPressure] = useState(false);
  const [isPalpitation, setIsPalpitation] = useState(false);
  const [isConstipation, setIsConstipation] = useState(false);
  const [isDiarrhea, setIsDiarrhea] = useState(false);
  const [isDysuria, setIsDysuria] = useState(false);
  const [isExcessiveUrination, setIsExcessiveUrination] = useState(false);
  const [isUnusualColor, setIsUnusualColor] = useState(false);
  const [isInfertility, setIsInfertility] = useState(false);
  const [isVenerealDecease, setIsVenerealDecease] = useState(false);
  const [isRecentPregnancy, setIsRecentPregnancy] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isMobile = isMobileHook();
  const theme = useTheme();

  const styledCheckbox = {
    display: "flex",
    justifyContent: "space-between",
    width: isMobile ? "95%" : "45%",
  };

  useEffect(() => {
    const fetchVitals = async () => {
      try {
        const vitalsData: any = await API.graphql(
          graphqlOperation(getVitals, { id })
        );
        const vitals = vitalsData.data.getVitals;
        const { createdAt, updatedAt, __typename, ...newVitals } = vitals;
        if (vitals) {
          setFormValues(newVitals);
        }
      } catch (error) {
        console.error("Error fetching vitals:", error);
      }
    };

    fetchVitals();
  }, [id, showSuccess]);

  useEffect(() => {
    const saveInfoOnBlur = async () => {
      await API.graphql(graphqlOperation(updateVitals, { input: formValues }));
    };
    saveInfoOnBlur();
  }, [formValues]);

  const saveVitalsInfo = async () => {
    try {
      await API.graphql(
        graphqlOperation(updateVitals, {
          input: formValues,
        })
      );
      setShowSuccess(true);
    } catch (error) {
      console.error("Error saving information:", error);
    }
  };
  return (
    <Root>
      <TextField
        variant="outlined"
        placeholder="Enter your valid Id"
        value={id}
        disabled={true}
      />
      <ColumnContainer>
        <span>Constitutional:</span>
        <RowContainer
          style={{ border: "1px solid lightGrey", borderRadius: "5px" }}
        >
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="Weight Change"
            control={<Checkbox checked={formValues.weightChange} />}
            onChange={() =>
              setFormValues({
                ...formValues,
                weightChange: !formValues.weightChange,
              })
            }
            labelPlacement="start"
          />
        </RowContainer>
      </ColumnContainer>
      <ColumnContainer>
        <span>Head:</span>
        <RowContainer
          style={{
            border: "1px solid lightGrey",
            borderRadius: "5px",
            gap: isMobile ? "0px" : "3rem",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="HeadAche"
            control={<Checkbox checked={formValues.headache} />}
            onChange={() =>
              setFormValues({ ...formValues, headache: !formValues.headache })
            }
            labelPlacement="start"
          />
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="Pain"
            control={<Checkbox checked={formValues.pain} />}
            onChange={() =>
              setFormValues({ ...formValues, pain: !formValues.pain })
            }
            labelPlacement="start"
          />
        </RowContainer>
      </ColumnContainer>
      <ColumnContainer>
        <span>Breast:</span>
        <RowContainer
          style={{ border: "1px solid lightGrey", borderRadius: "5px" }}
        >
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="Nipple Discharge"
            control={<Checkbox checked={formValues.nippleDischarge} />}
            onChange={() =>
              setFormValues({
                ...formValues,
                nippleDischarge: !formValues.nippleDischarge,
              })
            }
            labelPlacement="start"
          />
        </RowContainer>
      </ColumnContainer>
      <ColumnContainer>
        <span>CardioVascular:</span>
        <RowContainer
          style={{
            border: "1px solid lightGrey",
            borderRadius: "5px",
            gap: isMobile ? "0px" : "3rem",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="High Blood Pressure"
            control={<Checkbox checked={formValues.highBloodPressure} />}
            onChange={() =>
              setFormValues({
                ...formValues,
                highBloodPressure: !formValues.highBloodPressure,
              })
            }
            labelPlacement="start"
          />
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="Palpitation"
            control={<Checkbox checked={formValues.palpitation} />}
            onChange={() =>
              setFormValues({
                ...formValues,
                palpitation: !formValues.palpitation,
              })
            }
            labelPlacement="start"
          />
        </RowContainer>
      </ColumnContainer>
      <ColumnContainer>
        <span>Gastrointestinal:</span>
        <RowContainer
          style={{
            border: "1px solid lightGrey",
            borderRadius: "5px",
            gap: isMobile ? "0px" : "3rem",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="Constipation"
            control={<Checkbox checked={formValues.constipation} />}
            onChange={() =>
              setFormValues({
                ...formValues,
                constipation: !formValues.constipation,
              })
            }
            labelPlacement="start"
          />
          <FormControlLabel
            style={{ ...styledCheckbox, gap: "2rem" }}
            label="Diarrhea"
            control={<Checkbox checked={formValues.diarrhea} />}
            onChange={() =>
              setFormValues({ ...formValues, diarrhea: !formValues.diarrhea })
            }
            labelPlacement="start"
          />
        </RowContainer>
      </ColumnContainer>
      <ColumnContainer>
        <span>Genitoueinary:</span>
        <RowContainer
          style={{
            border: "1px solid lightGrey",
            borderRadius: "5px",
            gap: isMobile ? "0px" : "3rem",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <ColumnContainer style={{ gap: "0px" }}>
            <RowContainer
              style={{
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
              }}
            >
              <FormControlLabel
                style={{ ...styledCheckbox, gap: "2rem" }}
                label="Dysuria"
                control={<Checkbox checked={formValues.dysuria} />}
                onChange={() =>
                  setFormValues({ ...formValues, dysuria: !formValues.dysuria })
                }
                labelPlacement="start"
              />
              <FormControlLabel
                style={{ ...styledCheckbox, gap: "2rem" }}
                label="Excessive Urination"
                control={<Checkbox checked={formValues.excessiveUrination} />}
                onChange={() =>
                  setFormValues({
                    ...formValues,
                    excessiveUrination: !formValues.excessiveUrination,
                  })
                }
                labelPlacement="start"
              />
            </RowContainer>
            <RowContainer>
              <FormControlLabel
                style={{ ...styledCheckbox, gap: "2rem" }}
                label="Unusual Color"
                control={<Checkbox checked={formValues.unusualColor} />}
                onChange={() =>
                  setFormValues({
                    ...formValues,
                    unusualColor: !formValues.unusualColor,
                  })
                }
                labelPlacement="start"
              />
            </RowContainer>
          </ColumnContainer>
        </RowContainer>
      </ColumnContainer>
      <ColumnContainer>
        <span>Interval:</span>
        <RowContainer
          style={{
            border: "1px solid lightGrey",
            borderRadius: "5px",
            gap: isMobile ? "0px" : "3rem",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <ColumnContainer style={{ gap: "0px" }}>
            <RowContainer
              style={{
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
              }}
            >
              <FormControlLabel
                style={{ ...styledCheckbox, gap: "2rem" }}
                label="Infertility"
                control={<Checkbox checked={formValues.infertility} />}
                onChange={() =>
                  setFormValues({
                    ...formValues,
                    infertility: !formValues.infertility,
                  })
                }
                labelPlacement="start"
              />
              <FormControlLabel
                style={{ ...styledCheckbox, gap: "2rem" }}
                label="Recent Pregnancy"
                control={<Checkbox checked={formValues.recentPregnancy} />}
                onChange={() =>
                  setFormValues({
                    ...formValues,
                    recentPregnancy: !formValues.recentPregnancy,
                  })
                }
                labelPlacement="start"
              />
            </RowContainer>
            <RowContainer>
              <FormControlLabel
                style={{ ...styledCheckbox, gap: "2rem" }}
                label="Venereal Decease"
                control={<Checkbox checked={formValues.venerealDecease} />}
                onChange={() =>
                  setFormValues({
                    ...formValues,
                    venerealDecease: !formValues.venerealDecease,
                  })
                }
                labelPlacement="start"
              />
            </RowContainer>
          </ColumnContainer>
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
      </ColumnContainer>
      <div style={{ alignSelf: "center", width: "150px" }}>
        <CustomButton
          label="Save"
          background={theme.palette.primary.main}
          textColor="white"
          onClick={saveVitalsInfo}
        />
      </div>
    </Root>
  );
};

export default InfoVitalForm;
