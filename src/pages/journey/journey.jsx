import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./journey.module.css";
import ContextProvider from "../../context/context";

const Journey = () => {
  const initialJourneyTemplate = {
    registration: "",
    startMileage: "",
    startDestination: "",
    travelReason: "",
    date: "",
    finalMileage: "",
    finalDestination: "",
    fuelCost: "",
    fuelLitres: "",
  };
  const { setAppData, appData } = useContext(ContextProvider);
  const [newJourney, setNewJourney] = useState(() => {
    const saved = localStorage.getItem("current-journey");
    const initialValue = JSON.parse(saved);
    return initialValue || initialJourneyTemplate;
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setNewJourney({ ...newJourney, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("current-journey", JSON.stringify(newJourney));
  }, [newJourney]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setAppData({
      user: appData.user,
      totalJourneys: appData.totalJourneys + 1,
      totalFuelCost: appData.totalFuelCost + Number(newJourney.fuelCost),
      totalMileage:
        appData.totalMileage +
        (Number(newJourney.finalMileage) - Number(newJourney.startMileage)),
      allJourneys: [...appData.allJourneys, newJourney],
    });

    setNewJourney(initialJourneyTemplate);
    navigate("/reports");
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ transform: "translateY(1rem)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className={styles.section}>
          <p>Start of journey.</p>
          <div className={styles.container__input}>
            <p>Vehicle Registration*</p>
            <input
              required
              name="registration"
              type="text"
              value={newJourney?.registration}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Starting Mileage*</p>
            <input
              required
              name="startMileage"
              type="number"
              value={newJourney?.startMileage}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Starting Destination*</p>
            <input
              required
              name="startDestination"
              type="text"
              value={newJourney?.startDestination}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Reason for Travel*</p>
            <input
              required
              name="travelReason"
              type="text"
              value={newJourney?.travelReason}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Date*</p>
            <input
              required
              name="date"
              type="date"
              value={newJourney?.date}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
        </div>

        <div className={styles.section}>
          <p>End of journey.</p>
          <div className={styles.container__input}>
            <p>Closing Mileage*</p>
            <input
              required
              name="finalMileage"
              type="number"
              value={newJourney?.finalMileage}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Final Destination*</p>
            <input
              required
              name="finalDestination"
              type="text"
              value={newJourney?.finalDestination}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Fuel Cost* (If fuel purchased)</p>
            <input
              required
              name="fuelCost"
              type="number"
              value={newJourney?.fuelCost}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Fuel Litres* (If fuel purchased)</p>
            <input
              required
              name="fuelLitres"
              type="number"
              value={newJourney?.fuelLitres}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.section}>
            <button className="button">Submit</button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Journey;
