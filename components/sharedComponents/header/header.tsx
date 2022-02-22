import "bootstrap/dist/css/bootstrap.css";
import styles from "./header.module.css";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { useEffect } from "react";
import "react-dropdown/style.css";

function Header() {
  const options = ["English", "Arab"];
  const languageOptions = [
    { key: "Arabic", text: "Arabic", value: "Arabic" },
    { key: "Chinese", text: "Chinese", value: "Chinese" },
  ];
  const profileOptions = [
    {
      key: "Abdullah Gahtani",
      text: "Abdullah Gahtani",
      value: "Abdullah Gahtani",
      image: { avatar: true, src: "/cv__29__generated.jpg" },
    },
    {
      key: "Abdullah Gahtani",
      text: "Abdullah Gahtani",
      value: "Abdullah Gahtani",
      image: { avatar: true, src: "/cv__29__generated.jpg" },
    },
  ];
  const onSelect = () => {
    console.log("selected language");
  };

  useEffect(() => {
    customizeDropdown();
  });
  const customizeDropdown = () => {
      console.log(document
        .querySelectorAll(".world-icon")[0])
    /*document
      .querySelectorAll(".world icon")[0]
      .setAttribute(
        "style",
        "background-color: #e7e4e4 !important;"
      );*/
  };

  return (
    <div className={`${styles.navContainer}`}>
      <nav
        className={`${"navbar"} ${"navbar-expand-lg"} ${"navbar-light"} ${"bg-light"}`}
        style={{backgroundColor: "#e7e4e4 !important"}}
      >
        <div className={`${"input-group"}`}>
          <div
            className={`${"form-outline"} ${styles.searchInput}`}
            style={{ display: "flex" }}
          >
            <input type="search" className={`${"form-control"}`} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className={`${"bi"} ${"bi-search"} ${styles.searchIcon}`}
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>

        <button
          className={`${"navbar-toggler"}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`${"navbar-toggler-icon"}`}></span>
        </button>
        <div
          className={`${"collapse"} ${"navbar-collapse"}`}
          id="navbarSupportedContent"
        >
          <ul className={`${"navbar-nav"} ${"mr-auto"}`}>
          <li
              className={`${"nav-item"} ${"dropdown"}`}
              style={{ display: "flex", position: "relative", left: "-32%" }}
            >
              <Dropdown
                button
                className="icon"
                floating
                labeled
                icon="world"
                options={languageOptions}
                search
                text="English"
                style={{backgroundColor:"#e7e4e4"}}
              />
            </li>
            <li className={`${"nav-item"} ${"dropdown"}`} style={{width:"200px",position: "relative",left: "-13%"}}>
                <Dropdown
                  inline
                  options={profileOptions}
                  defaultValue={profileOptions[0].value}
                  className={`${styles.profileDropdown}`}
                />
     
            </li>
            <li className={`${"nav-item"} ${"active"}`}>
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
