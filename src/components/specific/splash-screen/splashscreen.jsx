import styles from "./splashscreen.module.css";
import AnimatedLogo from "../../../assets/svgs/animatedlogo/animatedLogo";
import { useContext, useEffect, useState } from "react";
import ContextProvider from "../../../context/context";

const SplashScreen = () => {
  const { appData } = useContext(ContextProvider);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={styles.container}
      style={{ display: isActive ? "grid" : "none" }}
    >
      <div className={styles.container__box}>
        <div className={styles.container__img}>
          <AnimatedLogo />
        </div>
        <div className={styles.container__text}>
          {appData.user.firstName !== "Not" ? (
            <p>
              Welcome back{" "}
              {appData.user.firstName.charAt(0).toUpperCase() +
                appData.user.firstName.slice(1)}
            </p>
          ) : (
            <p>
              Welcome to Made2Merch finances! Please feel free to click into
              settings and personalise your profile!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
