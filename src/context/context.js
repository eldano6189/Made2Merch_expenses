import { createContext, useState } from "react";

const ContextProvider = createContext();

export const ContextWrapper = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "Daniel",
    lastName: "Hall",
    picture: "",
  });
  const [totalJourneys, setTotalJourneys] = useState(0);
  const [totalFuelCost, setTotalFuelCost] = useState(0);
  const [totalMileage, setTotalMileage] = useState(0);
  const [currentJourney, setCurrentJourney] = useState({});
  const [allJourneys, setAllJourneys] = useState([]);

  console.log([
    totalJourneys,
    totalFuelCost,
    totalMileage,
    currentJourney,
    allJourneys,
  ]);

  return (
    <ContextProvider.Provider
      value={{
        user,
        setUser,
        totalJourneys,
        setTotalJourneys,
        totalFuelCost,
        setTotalFuelCost,
        totalMileage,
        setTotalMileage,
        currentJourney,
        setCurrentJourney,
        allJourneys,
        setAllJourneys,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
