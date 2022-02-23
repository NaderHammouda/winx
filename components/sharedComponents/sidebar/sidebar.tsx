import "bootstrap/dist/css/bootstrap.css";
import styles from "./sidebar.module.css";
import "react-dropdown/style.css";

function SidebarMenu() {
  return (
    <div className={`${styles.sidebarContainer}`}>
      <div className={`${"row"} ${styles.flexRow} ${styles.logoContainer}`}>
        <img className={`${styles.menuLogo}`} src="/logowinex.png" />
      </div>
      <div
        className={`${"row"} ${styles.flexRow}`}
        style={{ marginTop: "10%", marginBottom: "16%" }}
      >
        <div className={`${styles.sidebarFirstIcon}`}></div>
        <span className={`${styles.firstMenuItem}`}>My WinX</span>
      </div>
      <div
        className={`${"row"} ${styles.flexColumn}`}
        style={{ marginTop: "15px" }}
      >
        <span className={`${styles.firstMenuItem} ${styles.menuTitle}`}>
          Visualize
        </span>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Dashboards
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Reports
          </span>
        </div>
      </div>
      <div
        className={`${"row"} ${styles.flexColumn}`}
        style={{ marginTop: "15px" }}
      >
        <span className={`${styles.firstMenuItem} ${styles.menuTitle}`}>
          Sales
        </span>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Accounts
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Contacts
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Opportunities
          </span>
        </div>
      </div>
      <div
        className={`${"row"} ${styles.flexColumn}`}
        style={{ marginTop: "15px" }}
      >
        <span className={`${styles.firstMenuItem} ${styles.menuTitle}`}>
          RIA
        </span>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Risks
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Issues
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Activities
          </span>
        </div>
      </div>
      <div
        className={`${"row"} ${styles.flexColumn}`}
        style={{ marginTop: "15px" }}
      >
        <span className={`${styles.firstMenuItem} ${styles.menuTitle}`}>
          Enablers
        </span>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Documents
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Expenses
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Time
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Ressources
          </span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <div className={`${styles.sidebarGeneralIcon}`}></div>
          <span className={`${styles.firstMenuItem} ${styles.sidebarSpan}`}>
            Approvals
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
