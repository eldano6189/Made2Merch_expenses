import styles from "./settings.module.css";
import { useContext, useState } from "react";
import ContextProvider from "../../context/context";

const Settings = () => {
  const userTemplate = {
    firstName: "",
    lastName: "",
    picture: "",
  };
  const { setUser } = useContext(ContextProvider);
  const [changeUserDetails, setChangeUserDetails] = useState(userTemplate);

  const handleProfilePicture = (e) => {
    console.log(e.target.files);
    setChangeUserDetails({
      ...changeUserDetails,
      picture: URL.createObjectURL(e.target.files[0]),
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUser(changeUserDetails);
    setChangeUserDetails(userTemplate);
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Settings;
