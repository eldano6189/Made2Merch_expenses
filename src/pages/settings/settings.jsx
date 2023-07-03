import styles from "./settings.module.css";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import ContextProvider from "../../context/context";

const Settings = () => {
  const userTemplate = {
    firstName: "",
    lastName: "",
    picture: "",
  };
  const { appData, setAppData } = useContext(ContextProvider);
  const [changeUserDetails, setChangeUserDetails] = useState(userTemplate);
  const [file, setFile] = useState(null);

  const handleProfilePicture = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setChangeUserDetails({
            ...changeUserDetails,
            picture: result,
          });
          setChangeUserDetails({
            ...changeUserDetails,
            picture: result,
          });
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file, changeUserDetails]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAppData({ ...appData, user: changeUserDetails });
    setChangeUserDetails(userTemplate);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ transform: "translateY(1rem)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.section}>
        <p>Profile settings.</p>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className={styles.container__input}>
            <p>Upload a profile image.</p>
            <input
              required
              type="file"
              onChange={(e) => handleProfilePicture(e)}
            />
          </div>
          <div className={styles.container__input}>
            <p>Firstname.</p>
            <input
              value={changeUserDetails?.firstName}
              required
              type="text"
              onChange={(e) =>
                setChangeUserDetails({
                  ...changeUserDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.container__input}>
            <p>Lastname.</p>
            <input
              value={changeUserDetails?.lastName}
              required
              type="text"
              onChange={(e) =>
                setChangeUserDetails({
                  ...changeUserDetails,
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.container__input}>
            <button className="button">Save</button>
          </div>
        </form>
      </div>

      {/* <div className={styles.section}>
        <p>
          Any changes made past this point <b>CAN NOT</b> be reversed! Proceed
          with caution.
        </p>

        <button className="button">Clear Total Mileage. </button>
        <button className="button">Clear Total Journeys. </button>
        <button className="button">Clear Total Fuel Cost.</button>
        <button className="button">Clear All Journeys. </button>
      </div> */}
    </motion.div>
  );
};

export default Settings;
