import styles from "./Head.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
function Head() {
  const obj = useSelector((store) => store.selectedtab);
  const { selectedval } = obj;
  console.log(obj);
  return (
    <div className={styles.head}>
      <h3 id={styles.dash3}>{selectedval}</h3>{" "}
      <FaRegUserCircle style={{ width: "50px", height: "45px" }} />
    </div>
  );
}

export default Head;
