import "bootstrap/dist/css/bootstrap.css";
import styles from "./floatButton.module.css";
function FloatButton() {
  return (
    <div className={`${styles.floatButton}`}>
      <svg
        id={styles.floatIcon}
        xmlns="http://www.w3.org/2000/svg"
        fill="rgb(180,172,167)"
        className={`${"bi"} ${"bi-plus-circle-fill"}`}
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    </div>
  );
}

export default FloatButton;
