import { createContext, useState } from "react";

export const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const [selectedSection, setSelectedSection] =
    useState("dataStructures");

  return (
    <DashboardContext.Provider
      value={{
        selectedSection,
        setSelectedSection,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;