import styles from "./navigation.module.css";

import { Link, useLocation } from "react-router-dom";

import Dash from "../../../assets/svgs/dash";
import Journey from "../../../assets/svgs/journey";
import Reports from "../../../assets/svgs/reports";
import Settings from "../../../assets/svgs/settings";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li
            className={styles.tab}
            style={{
              backgroundColor: location.pathname === "/" && "var(--clr-1)",
            }}
          >
            <Link to="/">
              <Dash />
            </Link>
          </li>
          <li
            className={styles.tab}
            style={{
              backgroundColor:
                location.pathname === "/journey" && "var(--clr-1)",
            }}
          >
            <Link to="/journey">
              <Journey />
            </Link>
          </li>
          <li
            className={styles.tab}
            style={{
              backgroundColor:
                location.pathname === "/reports" && "var(--clr-1)",
            }}
          >
            <Link to="/reports">
              <Reports />
            </Link>
          </li>
          <li
            className={styles.tab}
            style={{
              backgroundColor:
                location.pathname === "/settings" && "var(--clr-1)",
            }}
          >
            <Link to="/settings">
              <Settings />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
