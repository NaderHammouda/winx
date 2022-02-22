import "bootstrap/dist/css/bootstrap.css";
import styles from "./sidebar.module.css";
import { useEffect } from "react";
import "react-dropdown/style.css";

function SidebarMenu() {
  return (
    <div>
        <div className={`${"row"} ${styles.flexRow}`}>
        <img
          className={`${styles.menuLogo}`}
          src="/logowinex.png"
        />
      </div>
      <div className={`${"row"} ${styles.flexRow}`}>
        <img
          className={`${styles.menuIcon}`}
          src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
        />
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
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Dashboards</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Reports</span>
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
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Accounts</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Contacts</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Opportunities</span>
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
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Risks</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Issues</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Activities</span>
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
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Documents</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Expenses</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Time</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Ressources</span>
        </div>
      </div>
      <div className={`${"row"} ${styles.flexColumn}`}>
        <div className={`${"row"} ${styles.flexRow}`}>
          <img
            className={`${styles.menuIcon}`}
            src="https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
          />
          <span className={`${styles.firstMenuItem}`}>Approvals</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
