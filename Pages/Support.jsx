import Head from "../Components/Head";
import Form from "../Components/Form";
import styles from "./Support.module.css";
function Support() {
  return (
    <div className={styles.Container}>
      <Head />
      <div className={styles.supportCon}>
        <div className={styles.Contus}>
          <div className={styles.Contusmain}>
            <img src="./Images/messIcon.svg" alt="msgICON" />
            <h1 id={styles.H_id}>Contact Us</h1>
            <p id={styles.P_id}>
              Have a question or just want to know more? Feel free to reach out
              to us.
            </p>
          </div>
        </div>
        <div className={styles.Contusform}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Support;
