import styles from "./header.module.css";
import { useContext } from "react";
import ContextProvider from "../../../context/context";
import Logo from "../../../assets/svgs/logo";

const Header = () => {
  const { user } = useContext(ContextProvider);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.profile}>
        <div className={styles.profile__picture}>
          <img src={user?.picture} alt={user.lastName} />
        </div>
        <div className={styles.profile__name}>
          <p>{user.firstName.charAt(0)}</p>
          <p>{user.lastName.charAt(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
