import styles from "./TranTable.module.css";
import { useSelector } from "react-redux";
function TranTable() {
  const { Details } = useSelector((store) => store.Details);

  return (
    <table className="table">
      <thead className={styles.headtbl}>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Date&Time</th>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {Details.map((items) => (
          <tr>
            {" "}
            <td style={{ padding: "1.5rem 0.5rem" }}> {items.id}</td>
            <td style={{ padding: "1.5rem 0.5rem" }}>{items.timeDate}</td>
            <td style={{ padding: "1.5rem 0.5rem" }}>{items.type}</td>
            <td style={{ padding: "1.5rem 0.5rem" }}>{items.amount}</td>
            <td style={{ padding: "1.5rem 0.5rem" }}>
              {" "}
              <label id={styles.label}>{items.status}</label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TranTable;
