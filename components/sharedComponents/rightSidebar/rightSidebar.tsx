import "bootstrap/dist/css/bootstrap.css";
import styles from "./rightSidebar.module.css";
function RightSidebar() {
  return (
    <div className={`${styles.rightSidebar}`}>
      <div id={styles.leftIconContainer}>
        <svg
          id={styles.circleIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className={`${"bi"} ${"bi-circle-fill"}`}
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className={`${"bi"} ${"bi-chat-left-fill"} ${styles.centerIcon}`}
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        </svg>
      </div>
      <div id={styles.leftIconContainer}>
        <svg
          id={styles.circleIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className={`${"bi"} ${"bi-circle-fill"}`}
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className={`${"bi"} ${"bi-bell-fill"} ${styles.centerIcon}`}
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
      </div>
      <div id={styles.leftIconContainer}>
        <svg
          id={styles.circleIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className={`${"bi"} ${"bi-circle-fill"}`}
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`${"bi"} ${"bi-journal-minus"} ${styles.centerIcon}`}
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
          />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
        </svg>
      </div>
    </div>
  );
}

export default RightSidebar;
