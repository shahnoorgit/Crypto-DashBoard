import styles from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SelectedAction } from "../storeRedux/Store";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const activebtn = (option) => {
    dispatch(SelectedAction.change(option));
    Navigate(`/${option}`);
    console.log(option);
  };
  const { selectedval } = useSelector((store) => store.selectedtab);
  return (
    <>
      <div
        className={`${styles.bar} d-flex flex-column flex-shrink-0 p-4 text-bg-dark`}
        style={{ width: "256px", minHeight: "729px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span id={styles.barname} className="fs-4">
            ShanCrypt
          </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className={`${styles.option} nav-item`}>
            <a
              onClick={() => activebtn("Dashboard")}
              href="#"
              className={`nav-link text-white ${
                selectedval === "Dashboard" && styles.active
              }`}
              aria-current="page"
            >
              <MdSpaceDashboard className={styles.dashicon} />
              Dashboard
            </a>
          </li>
          <li>
            <a
              onClick={() => activebtn("Transaction")}
              href="#"
              className={`nav-link text-white ${
                selectedval === "Transaction" && styles.active
              }`}
            >
              <AiOutlineTransaction className={styles.dashicon} />
              Transactions
            </a>
          </li>
        </ul>
        <div className={styles.support}>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className={`${styles.option} nav-item`}>
              <a
                onClick={() => activebtn("support")}
                href="#"
                className={`nav-link text-white ${
                  selectedval === "support" && styles.active
                }`}
                aria-current="page"
              >
                <BiSupport className={styles.dashicon} />
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
