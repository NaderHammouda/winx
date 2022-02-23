import "bootstrap/dist/css/bootstrap.css";
import styles from "./header.module.css";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useEffect } from "react";
import "react-dropdown/style.css";

function Header() {
  const languageOptions = [
    { key: "Arabic", text: "Arabic", value: "Arabic" },
    { key: "Chinese", text: "Chinese", value: "Chinese" },
  ];
  const profileOptions = [
    {
      key: "Abdullah Gahtani",
      text: "Abdullah Gahtani     ",
      value: "Abdullah Gahtani",
      image: { avatar: true, src: "/51xoxGI9PAL._AC_UL1001_.jpg" },
    },
    {
      key: "Abdullah Gahtani",
      text: "Abdullah Gahtani",
      value: "Abdullah Gahtani",
      image: { avatar: true, src: "/cv__29__generated.jpg" },
    },
  ];

  useEffect(() => {
    customizeDropdown();
  });
  const customizeDropdown = () => {
    document
      .getElementById("language-dropdown")
      ?.children[2].setAttribute(
        "style",
        "background-color: rgb(241,235,231) !important;position: absolute;left: 21%;"
      );
    document
      .getElementById("profil-dropdown")
      ?.children[0].setAttribute("style", "color: rgb(146,145,144);");
    document
      .getElementsByClassName("avatar")[0]
      .setAttribute("style", "position: relative;left: 104%;");
    document
      .getElementById("profil-dropdown")
      ?.children[1].setAttribute("style", "position: relative;left: 21%;");
  };

  return (
    <div className={`${styles.navContainer}`}>
      <nav className={`${"row"} ${styles.navClass}`}>
        <div className={`${"col-6"}`}>
          <div
            className={`${"form-outline"} ${styles.searchInput}`}
            style={{ display: "flex" }}
          >
            <input
              type="search"
              className={`${"form-control"}`}
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className={`${"bi"} ${"bi-search"} ${styles.searchIcon}`}
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <div className={`${"col-6"}`}>
          <ul className={`${styles.ulClass}`}>
            <li className={`${styles.firstLi}`} style={{ display: "flex" }}>
              <Dropdown
                button
                className="icon"
                floating
                labeled
                icon="world"
                options={languageOptions}
                search
                text="English"
                id="language-dropdown"
                style={{
                  backgroundColor: "rgb(241,235,231)",
                  color: "rgb(146,145,144)",
                }}
              />
            </li>
            <li className={`${styles.secondLi}`}>
              <Dropdown
                inline
                options={profileOptions}
                defaultValue={profileOptions[0].value}
                className={`${styles.profileDropdown}`}
                id="profil-dropdown"
              />
            </li>
            <li className={`${"active"} ${styles.liButton}`}>
              <button
                type="button"
                className={`${"btn"} ${styles.navButton} ${styles.rightButton}`}
              >
                Ask WinX
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
