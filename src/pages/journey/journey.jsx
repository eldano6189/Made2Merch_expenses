import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const {
    setTotalJourneys,
    setTotalFuelCost,
    setTotalMileage,
    setCurrentJourney,
    setAllJourneys,
  } = useContext(ContextProvider);
  const [newJourney, setNewJourney] = useState(initialJourneyTemplate);

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setNewJourney({ ...newJourney, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTotalJourneys((prevState) => prevState + 1);
    setTotalFuelCost((prevState) => prevState + Number(newJourney.fuelCost));
    setTotalMileage(
      (prevState) =>
        prevState +
        (Number(newJourney.finalMileage) - Number(newJourney.startMileage))
    );
    setCurrentJourney(newJourney);
    setAllJourneys((prevState) => [...prevState, newJourney]);
    setNewJourney(initialJourneyTemplate);
    navigate("/reports");
  };

  return (
    <div className={styles.container}>
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
            <p>Fuel Cost (If fuel purchased)</p>
            <input
              name="fuelCost"
              type="number"
              value={newJourney?.fuelCost}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Fuel Litres (If fuel purchased)</p>
            <input
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
    </div>
  );
};

export default Journey;
