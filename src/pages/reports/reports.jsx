import styles from "./reports.module.css";
import { useContext } from "react";
import ContextProvider from "../../context/context";

const Reports = () => {
  const { allJourneys } = useContext(ContextProvider);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <p>View the latest reports here. The most current is at the top.</p>
        <p>Click to view / save full report.</p>
        <div className={styles.container__report}>
          {allJourneys
            ?.sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map((journey, index) => {
              return (
                <div key={index} className={styles.summary}>
                  <div className={styles.date}>
                    <p>{journey.date.split("-").reverse().join("-")}</p>
                  </div>
                  <div className={styles.reason}>
                    <p>{journey.travelReason}</p>
                  </div>
                  <div className={styles.distance}>
                    <p>{journey.finalMileage - journey.startMileage}</p>
                    <p>Miles</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Reports;
