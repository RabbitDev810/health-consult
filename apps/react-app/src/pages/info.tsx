import { useState, useRef, useLayoutEffect } from "react";
import Sidebar from "@/components/info/sidebar";
import InfoHeader from "@/components/info/info-header";
import InfoTabForm from "@/components/info/info-tab-form";
import { ColumnContainer, RowContainer } from "@/styles/common-styles";
import InfoVitalForm from "@/components/info/info-vital-form";
import InfoNotesForm from "@/components/info/info-notes-form";
import InfoEncounterForm from "@/components/info/info-encounter-form";
import MessageBox from "@/components/chatBox/message";
import { isMobileHook } from "@/utils";
import {
  LocalHospital,
  InfoOutlined,
  GroupsOutlined,
  TextSnippetOutlined,
} from "@mui/icons-material";
import { useConversationStore } from "@/store/conversation";

const Info = ({ isCreate }) => {
  const [sidebarHeight, setSidebarHeight] = useState("auto");
  const [containerHeight, setContainerHeight] = useState("100%");
  const [showChat, setShowChat] = useState(false);
  const isMobile = isMobileHook();
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const { activeKey, setActiveKey } = useConversationStore();

  useLayoutEffect(() => {
    const updateSidebarHeight = () => {
      // Get the viewport height
      const viewportHeight = window.innerHeight;

      // Get the content height
      const contentHeight = contentRef.current
        ? contentRef.current.offsetHeight
        : 0;

      // Set the sidebar height to the greater of the content height or the viewport height
      setSidebarHeight(`${Math.max(contentHeight, viewportHeight)}px`);
    };

    updateSidebarHeight();

    // Re-measure on window resize
    window.addEventListener("resize", updateSidebarHeight);
    return () => window.removeEventListener("resize", updateSidebarHeight);
  }, [activeKey]); // Dependency array includes activeKey to re-measure when it changes
  useLayoutEffect(() => {
    const updateContainerHeight = () => {
      // Get the height of the InfoHeader component
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;
      // Calculate the new height for the RowContainer

      const newHeight = `calc(100vh - ${headerHeight}px - 15px)`;
      setContainerHeight(newHeight);
    };

    updateContainerHeight();

    // Re-calculate on window resize
    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);

  const items = [
    {
      key: "1",
      label: "Info",
      content: <InfoTabForm />,
      active_image: <InfoOutlined style={{ color: "#53C1B2" }} />,
      inactive_image: <InfoOutlined />,
    },
    {
      key: "2",
      label: "Vitals",
      content: <InfoVitalForm />,
      active_image: <LocalHospital style={{ color: "#53C1B2" }} />,
      inactive_image: <LocalHospital />,
    },
    {
      key: "3",
      label: "Encounter",
      content: <InfoEncounterForm />,
      active_image: <GroupsOutlined style={{ color: "#53C1B2" }} />,
      inactive_image: <GroupsOutlined />,
    },
    {
      key: "4",
      label: "Notes",
      content: <InfoNotesForm />,
      active_image: <TextSnippetOutlined style={{ color: "#53C1B2" }} />,
      inactive_image: <TextSnippetOutlined />,
    },
  ];
  const onSidebarItemClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <ColumnContainer
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        gap: isMobile && showChat ? "0px" : "15px",
      }}
    >
      <div ref={headerRef}>
        <InfoHeader
          title={
            activeKey === "1"
              ? "Visitor's Information"
              : activeKey === "2"
              ? "Vitals"
              : activeKey === "3"
              ? "Encounter"
              : "Notes"
          }
          showChat={showChat} // Pass showChat state
          callback={setShowChat}
          showChatIcon={activeKey != "4"}
        />
      </div>
      <RowContainer
        style={{
          height: containerHeight,
        }}
      >
        {((isMobile && !showChat) || !isMobile) && (
          <Sidebar
            items={items}
            activeItem={activeKey}
            onClick={onSidebarItemClick}
            height={sidebarHeight}
          />
        )}
        {((isMobile && !showChat) || !isMobile) && (
          <ColumnContainer
            style={{
              flex: 2,
              alignItems: "center",
              marginLeft: isMobile ? "2px" : "50px",
              marginRight: isMobile ? "2px" : "50px",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                width: isMobile ? "100%" : "90%",
                maxWidth: isMobile ? "100%" : "90%",
                marginBottom: "10px",
              }}
              ref={contentRef}
            >
              {items[parseInt(activeKey) - 1].content}
            </div>
          </ColumnContainer>
        )}

        {activeKey != "4" && ((isMobile && showChat) || !isMobile) && (
          <div
            style={{ flex: 1, boxShadow: "10px 0 5px -5px rgba(0,0,0,0.03)" }}
          >
            <MessageBox
              maxHeight={containerHeight}
              isDoctor={activeKey === "3"}
              screen={items[parseInt(activeKey) - 1].label}
            />
          </div>
        )}
      </RowContainer>
    </ColumnContainer>
  );
};

export default Info;
