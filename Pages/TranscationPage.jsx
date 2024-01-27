import Head from "../Components/Head";
import Tabs from "../Components/Tabs";
import styles from "./Transaction.module.css";
import { CiExport } from "react-icons/ci";
function TransactionPage() {
  return (
    <div className={styles.container}>
      <Head />
      <button id={styles.Exportbtn}>
        {" "}
        <CiExport style={{ color: "white" }} /> Export CSV
      </button>

      <div className={styles.TranInfo}>
        {" "}
        <Tabs />
      </div>
    </div>
  );
}

export default TransactionPage;
