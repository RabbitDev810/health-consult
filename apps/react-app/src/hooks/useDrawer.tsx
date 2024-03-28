import React, { createContext, useContext, useState } from "react";

interface DrawerContextType {
  isLeftDrawerOpen: boolean;
  isRightDrawerOpen: boolean;
  toggleLeftDrawer: () => void;
  toggleRightDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({ children }) => {
  const [isLeftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setRightDrawerOpen] = useState(false);

  const toggleLeftDrawer = () => {
    setLeftDrawerOpen(!isLeftDrawerOpen);
  };

  const toggleRightDrawer = () => {
    setRightDrawerOpen(!isRightDrawerOpen);
  };

  const contextValue: DrawerContextType = {
    isLeftDrawerOpen,
    isRightDrawerOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
  };
  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => useContext(DrawerContext);
