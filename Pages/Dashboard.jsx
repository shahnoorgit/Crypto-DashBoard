import styles from "./Dashboard.module.css";
import { PiCurrencyBtc } from "react-icons/pi";
import { TbCoinRupee } from "react-icons/tb";
import { MdOutlineUpload } from "react-icons/md";
import { MdOutlineDownload } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from "react";
import Head from "../Components/Head";
import { useSelector } from "react-redux";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { TbCoinRupeeFilled } from "react-icons/tb";

function Dashboard({ Tran }) {
  const timestap = ["4:55", "5:55", "6:55", "7:55", "8:55"];
  let [selectedtime, setselectedtime] = useState("1H");
  const Selectedway = (time) => {
    setselectedtime(time);
  };

  const { tran } = useSelector((store) => store.tran);
  console.log(tran);

  return (
    <>
      {" "}
      <div className={styles.container}>
        <Head />
        <div className={styles.allinfo}>
          <div className={styles.balance}>
            <div className={styles.total}>
              <p className={styles.ttl}>Total Portfolio Value</p>{" "}
              <h5 className={styles.ttlh3}>₹ 112,312.24</h5>
            </div>
            <div className={styles.walllet}>
              <p className={styles.ttl}>Wallet Balances</p>
              <div className={styles.wlt}>
                <h5 className={styles.ttlh3}>
                  22.39401000
                  <PiCurrencyBtc id={styles.xs} />
                </h5>
                <h5 className={styles.ttlh3}>
                  ₹ 1,300.00
                  <TbCoinRupee id={styles.xs} />
                </h5>
              </div>
            </div>
            <div className={styles.action}>
              <button className={styles.actionbtn}>
                {" "}
                <MdOutlineUpload /> Deposit{" "}
              </button>
              <button className={styles.actionbtn}>
                {" "}
                <MdOutlineDownload /> withdraw{" "}
              </button>
            </div>
          </div>
          <div className={styles.currCon}>
            <div className={styles.currsub}>
              <div className={styles.currprice}>
                <div className={styles.currpricetxt}>
                  <div className={styles.price}>
                    <p className={styles.ttl}>current price</p>
                  </div>
                  <div className={styles.priceinfo}>
                    <h5 className={styles.ttlh3}>₹26,670.25</h5>
                    <div className={styles.graf}>
                      <GoArrowUpRight style={{ color: "green" }} />
                      <p id={styles.stockgraf}>0.04%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.btnsellbuy}>
                  <button className={styles.sellbuybtn}>
                    <CiCirclePlus className={styles.buysellicons} /> Buy
                  </button>
                  <button className={styles.sellbuybtn}>
                    <CiCircleMinus className={styles.buysellicons} /> Sell
                  </button>
                </div>
              </div>
              <div className={styles.Tabs}>
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a
                      onClick={() => Selectedway("1H")}
                      class={`nav-link ${
                        selectedtime == "1H" && styles.active
                      }`}
                      aria-current="page"
                      href="#"
                    >
                      1H
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      onClick={() => Selectedway("1D")}
                      class={`nav-link ${
                        selectedtime == "1D" && styles.active
                      }`}
                      aria-current="page"
                      href="#"
                    >
                      1D
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      onClick={() => Selectedway("1W")}
                      class={`nav-link ${
                        selectedtime == "1W" && styles.active
                      }`}
                      aria-current="page"
                      href="#"
                    >
                      1W
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      onClick={() => Selectedway("1M")}
                      class={`nav-link ${
                        selectedtime == "1M" && styles.active
                      }`}
                      aria-current="page"
                      href="#"
                    >
                      1M
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.timeCon}>
                <img src="./Images/Graph.svg" alt="" />
                <div className={styles.timestap}>
                  {timestap.map((items) => (
                    <li id={styles.tiemstapLI}>{items}</li>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.currsub}>
              <div className={styles.currTran}>
                <p className={styles.ttl}>Recent Transactions</p>
                <div className={styles.TranList}>
                  {" "}
                  {tran.map((items) => {
                    const iconComponent = items.iconName;

                    console.log(iconComponent);

                    return (
                      <div className={styles.recentTran}>
                        <div className={styles.iconTran}>
                          {iconComponent === "TbCoinRupeeFilled" ? (
                            <TbCoinRupeeFilled />
                          ) : (
                            <FaBitcoin />
                          )}
                        </div>
                        <div className={styles.Traninfo}>
                          <div>
                            <p id={styles.listHead}>{items.text}</p>
                            <p id={styles.listTime}>{items.timestamp}</p>
                          </div>
                          <div>
                            <p id={styles.listAmount}>{items.amount}</p>
                            <br />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <button id={styles.viewall}>View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.currloan_contactCon}>
          <div
            className={styles.loan_contactCon}
            style={{ backgroundImage: "url(./Images/Shapes.png)" }}
          >
            <a className={styles.loanConLabel} href="#">
              Loan
            </a>
            <p className={styles.loanConPara}>
              Learn more about Loans – Keep your Bitcoin, access it’s value
              without selling it
            </p>
          </div>
          <div
            style={{ backgroundImage: "url(./Images/Visual.svg)" }}
            className={styles.loan_contactCon2}
          >
            <a className={styles.loanConLabel2} href="#">
              Contact
            </a>
            <p className={styles.loanConPara2}>
              Learn more about our real estate, mortgage, and corporate account
              services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
