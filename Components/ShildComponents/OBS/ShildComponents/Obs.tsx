import React from "react";
import styles from "./Obs.module.css";

import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
const Obs = () => {
  return (
    <div className={`container-fluid ${styles.ObsSection}`}>
      <div className={`row`}>
        <div className={styles.cards}>
          <div className={styles.imgBx}>
            <img src="http://www.kashdev.com/wp-content/uploads/2018/04/ceo-sign-desk-close-man-background.jpg" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2>Nassim Khlifi </h2>
              <div className={styles.spanSection}>
           <span className={styles.span}>Ceo</span>
              <ul className={styles.socialIcons} id={styles.socilaMedia}>
                <li>
                  <OverlayTrigger
                    key={`bottom`}
                    placement={`bottom`}
                    overlay={
                      <Tooltip id={`tooltip-${`bottom`}`}>
                        {" "}
                        93 717 083 .
                      </Tooltip>
                    }
                  >
                    <Button className={styles.pop}>
                      <svg
                        id={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>{" "}
                    </Button>
                  </OverlayTrigger>
                </li>{" "}
                <li>
                  <OverlayTrigger
                    key={`bottom`}
                    placement={`bottom`}
                    overlay={
                      <Tooltip id={`tooltip-${`bottom`}`}>
                        {" "}
                        Nassimkhlifi@gmail.com .
                      </Tooltip>
                    }
                  >
                    <Button className={styles.pop}>
                      <svg
                        id={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                      </svg>{" "}
                    </Button>
                  </OverlayTrigger>
                </li>
              </ul>
          
           </div>
              <ul className={styles.socialIcons} id={styles.crud}>
                <li>
                  <a href="#">
                    <svg
                      id={styles.svg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      id={styles.svg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-person-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      id={styles.svg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obs;
