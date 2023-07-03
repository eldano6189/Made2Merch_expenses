import styles from "./statistics.module.css";
import { useContext } from "react";
import ContextProvider from "../../context/context";
import { motion } from "framer-motion";

const Statistics = () => {
  const { appData } = useContext(ContextProvider);

  return (
    <motion.div
      className={styles.container}
      initial={{ transform: "translateY(1rem)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.3 }}
    >
      <h3>Your combined data.</h3>
      <ul className={styles.statistics}>
        <li className={styles.item}>
          <p>Total Journeys.</p>
          <p>{appData.totalJourneys}</p>
        </li>
        <li className={styles.item}>
          <p>Total Fuel Cost.</p>
          <p>£{appData.totalFuelCost}</p>
        </li>
        <li className={styles.item}>
          <p>Total Mileage.</p>
          <p>{appData.totalMileage.toFixed(2)}</p>
        </li>
        <li className={styles.item}>
          <p>Average Mileage.</p>
          <p>
            {(appData.totalMileage / appData.allJourneys.length).toFixed(2)}
          </p>
        </li>
        <li className={styles.item}>
          <p>Average Fuel Cost.</p>
          <p>
            £{(appData.totalFuelCost / appData.allJourneys.length).toFixed(2)}
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Statistics;
