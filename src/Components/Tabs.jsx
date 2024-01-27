import React, { useState } from "react";
import styles from "./Tabs.module.css";
import { CiSearch } from "react-icons/ci";
import TranTable from "./TranTable";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "all":
        return (
          <div className={styles.Tablediv}>
            <TranTable />
          </div>
        );
      case "deposit":
        return (
          <div className={styles.Tablediv}>
            <TranTable />
          </div>
        );
      case "Trade":
        return (
          <div className={styles.Tablediv}>
            <TranTable />
          </div>
        );
      case "withdraw":
        return <div>Content for Withdraw Transactions</div>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.table}>
      <div className={styles.tabs_container}>
        <ul className={styles.tabs}>
          <li
            className={`${styles.lists} ${
              selectedTab === "all" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("all")}
          >
            All
          </li>
          <li
            className={`${styles.lists} ${
              selectedTab === "deposit" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("deposit")}
          >
            Deposit
          </li>
          <li
            className={`${styles.lists} ${
              selectedTab === "withdraw" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("withdraw")}
          >
            Withdraw
          </li>
          <li
            className={`${styles.lists} ${
              selectedTab === "Trade" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Trade")}
          >
            Trade
          </li>
          <div id={styles.SearchCon}>
            <CiSearch style={{ fontSize: "xx-large" }} />
            <input
              id={styles.Search}
              type="text"
              placeholder="Search by ID or destination"
            />
          </div>
        </ul>

        <div className={styles.tab_content}>{renderContent()}</div>
      </div>
    </div>
  );
}

export default Tabs;
