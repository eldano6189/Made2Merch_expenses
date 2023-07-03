import styles from "./header.module.css";
import { useContext } from "react";
import ContextProvider from "../../../context/context";
import Logo from "../../../assets/svgs/logo";

const Header = () => {
  const { appData } = useContext(ContextProvider);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.profile}>
        <div className={styles.profile__picture}>
          {appData.user.picture ? (
            <img src={appData.user.picture} alt={appData.user.lastName} />
          ) : (
            <img
              src={require("../../../assets/images/user.webp")}
              alt={appData.user.lastName}
            />
          )}
        </div>
        <div className={styles.profile__name}>
          <p>{appData.user.firstName.charAt(0)}</p>
          <p>{appData.user.lastName.charAt(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
