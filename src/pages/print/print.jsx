import styles from "./print.module.css";
import { Link, useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import ContextProvider from "../../context/context";

const Print = () => {
  const location = useLocation();
  const propsData = location.state;
  const { appData } = useContext(ContextProvider);

  console.log(appData);

  const handleReport = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      html: "#report-table",
      useCss: true,
      bodyStyles: { minCellHeight: 15 },
      headStyles: { minCellHeight: 20, halign: "center", valign: "top" },
      footStyles: { halign: "right", valign: "bottom", minCellHeight: 30 },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: "auto" },
      },

      didParseCell: (data) => {
        if (data.row.index === 1) {
          data.cell.styles.lineColor = "rgb(30, 30, 30)";
          data.cell.styles.lineWidth = { bottom: 0.2 };
        }
      },

      didDrawCell: (data) => {
        if (
          data.section === "body" &&
          data.column.index === 0 &&
          data.row.index === 1
        ) {
          var base64Img = logo;
          doc.addImage(
            base64Img,
            "JPEG",
            data.cell.x + 0,
            data.cell.y - 30,
            50,
            20
          );
        }
      },
    });
    doc.save(`${propsData.date}_Made2Merch_Travel.pdf`);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ transform: "translateY(1rem)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.3 }}
    >
      <table id="report-table" className={styles.table}>
        <thead>
          <tr>
            <td colSpan={2}>
              <p>MADE2MERCH JOURNEY REPORT</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <img src={logo} alt="logo" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Date: </p>
            </td>
            <td>
              <p>{propsData.date}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Registration: </p>
            </td>
            <td>
              <p>{propsData.registration.toUpperCase()}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Starting Mileage: </p>
            </td>
            <td>
              <p>{propsData.startMileage} (Miles)</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Starting Location: </p>
            </td>
            <td>
              <p>{propsData.startDestination}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Reason for Travel: </p>
            </td>
            <td>
              <p>{propsData.travelReason}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Final Mileage: </p>
            </td>
            <td>
              <p>{propsData.finalMileage} (Miles)</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Final Destination: </p>
            </td>
            <td>
              <p>{propsData.finalDestination}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Fuel Cost (if fuel purchased): </p>
            </td>
            <td>
              <p>£{propsData.fuelCost}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Fuel Amount (if fuel purchased): </p>
            </td>
            <td>
              <p>{propsData.fuelLitres} (Litres)</p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                Electronical signed: {propsData.date}_
                {appData.user.lastName.toUpperCase()}
              </p>
            </td>
          </tr>
        </tfoot>
      </table>

      <div className={styles.header}>
        <Link className="button" to="/reports">
          Back
        </Link>
      </div>
      <div className={styles.body}>
        <div className={styles.item}>
          <p>Date:</p>
          <p>{propsData.date}</p>
        </div>
        <div className={styles.item}>
          <p>Registration:</p>
          <p>{propsData.registration.toUpperCase()}</p>
        </div>
        <div className={styles.item}>
          <p>Starting Mileage:</p>
          <p>{propsData.startMileage}</p>
        </div>
        <div className={styles.item}>
          <p>Starting Location:</p>
          <p>{propsData.startDestination}</p>
        </div>
        <div className={styles.item}>
          <p>Reason for Travel:</p>
          <p>{propsData.travelReason}</p>
        </div>
        <div className={styles.item}>
          <p>Final Mileage:</p>
          <p>{propsData.finalMileage}</p>
        </div>
        <div className={styles.item}>
          <p>Final Destination:</p>
          <p>{propsData.finalDestination}</p>
        </div>
        <div className={styles.item}>
          <p>Fuel Cost:</p>
          <p>£{propsData.fuelCost}</p>
        </div>
        <div className={styles.item}>
          <p>Fuel Purchased:</p>
          <p>{propsData.fuelLitres} L</p>
        </div>
      </div>

      <div className={styles.footer}>
        <button className="button" onClick={handleReport}>
          Save
        </button>
      </div>
    </motion.div>
  );
};

export default Print;
