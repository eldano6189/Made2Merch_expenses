import styles from "./reports.module.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextProvider from "../../context/context";
import Points from "../../assets/svgs/points";

const Reports = () => {
  const { appData } = useContext(ContextProvider);

  return (
    <motion.div
      className={styles.container}
      initial={{ transform: "translateY(1rem)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.section}>
        <p>View the latest reports here. The most current is at the top.</p>
        <p>Click to view / save full report.</p>
        <div className={styles.container__report}>
          {appData.allJourneys
            .sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map((journey, index) => {
              return (
                <Link to="/print" state={journey} key={index}>
                  <div className={styles.summary}>
                    <div className={styles.container__date}>
                      <div className={styles.mileage}>
                        <p>Miles</p>
                        <p>{journey.finalMileage - journey.startMileage}</p>
                      </div>
                      <div className={styles.date}>
                        <p>Date</p>
                        <p>{journey.date}</p>
                      </div>
                    </div>
                    <div className={styles.container__overview}>
                      <div className={styles.container__location}>
                        <div className={styles.svg}>
                          <Points />
                        </div>
                        <div className={styles.locations}>
                          <p>{journey.startDestination}</p>
                          <p>{journey.finalDestination}</p>
                        </div>
                      </div>
                      <div className={styles.container__reason}>
                        <p>{journey.travelReason}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;
