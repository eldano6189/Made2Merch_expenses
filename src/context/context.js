import { createContext, useState, useEffect } from "react";

const ContextProvider = createContext();

export const ContextWrapper = ({ children }) => {
  const [appData, setAppData] = useState(() => {
    const saved = localStorage.getItem("m2mData");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        user: { firstName: "Not", lastName: "Known", picture: "" },
        totalJourneys: 0,
        totalFuelCost: 0,
        totalMileage: 0,
        allJourneys: [],
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("m2mData", JSON.stringify(appData));
  }, [appData]);

  return (
    <ContextProvider.Provider
      value={{
        appData,
        setAppData,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
