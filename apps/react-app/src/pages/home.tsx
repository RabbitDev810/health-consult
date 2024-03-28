import CustomButton from "../components/custom-button";
import visit from "../assets/image/newVisit.png";
import history from "../assets/image/history.png";
import { getCurrentDateTime, isMobileHook } from "../utils";
import { historyBoxH1Style, historyImgStyle } from "@/assets/styles/History";
import { ColumnContainer } from "@/styles/common-styles";
import Header from "@/components/home/header";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import {
  createConversation,
  createEncounter,
  createInfo,
  createVitals,
} from "@/graphql/mutations";

const History = () => {
  const isMobile = isMobileHook();
  const id = uuidv4();
  const cards = [
    {
      cardImg: visit,
      cardTitle: "Create New Visit",
      buttonText: "Start",
      buttonClick: async () => {
        const infoDetails = {
          id: `visit${id}`,
          loggedInUserEmail: localStorage.getItem("email"),
        };

        try {
          await API.graphql(
            graphqlOperation(createInfo, { input: infoDetails })
          );
          await API.graphql(
            graphqlOperation(createVitals, { input: { id: `visit${id}` } })
          );
          await API.graphql(
            graphqlOperation(createEncounter, { input: { id: `visit${id}` } })
          );
          await API.graphql(
            graphqlOperation(createConversation, {
              input: { id: `visit${id}`, screen: "Info" },
            })
          );
          await API.graphql(
            graphqlOperation(createConversation, {
              input: { id: `visit${id}`, screen: "Vitals" },
            })
          );
          await API.graphql(
            graphqlOperation(createConversation, {
              input: { id: `visit${id}`, screen: "Encounter" },
            })
          );
          // Optionally, clear the form or navigate the user elsewhere
        } catch (error) {
          console.error("Error saving information:", error);
        }
      },
      navigationLink: "/info/" + `visit${id}`,
    },
    {
      cardImg: history,
      cardTitle: "History",
      buttonText: "Open",
      navigationLink: "/visit",
    },
  ];
  return (
    <section>
      <div>
        <Header />
      </div>
      <ColumnContainer
        style={{
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
        }}
      >
        {cards.map((card, index) => (
          <div
            style={{
              height: "auto",
              backgroundColor: "#52c1b3",
              textAlign: "center" as React.CSSProperties["textAlign"],
              border: "none",
              marginTop: "90px", // This will be overridden by the margin shorthand below
              borderRadius: "25px",
              margin: "80px 30px 0 30px",
              padding: "0 0 40px 0",
              boxShadow: "2px 4px 5px rgba(128, 128, 128, 0.49)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              minWidth: isMobile ? "80%" : "520px",
            }}
            key={index}
          >
            {!isMobile && (
              <img src={card.cardImg} alt="" style={historyImgStyle} />
            )}
            <h1 style={historyBoxH1Style}>{card.cardTitle}</h1>
            <center>
              <CustomButton
                label={card.buttonText}
                onClick={card.buttonClick}
                to={card.navigationLink}
                background="white"
                width="50%"
              />
            </center>
          </div>
        ))}
      </ColumnContainer>
    </section>
  );
};

export default History;
