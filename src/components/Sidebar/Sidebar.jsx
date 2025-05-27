import React from "react";
import styles from "./Sidebar.module.css";
import { NAV_LINKS } from "../../data/navLinks";
import { MdSettings, MdClose } from "react-icons/md";

export default function Sidebar({
  activeSegment,
  setActiveSegment,
  isOpen,
  toggleSidebar,
}) {
  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : ""} d-lg-block`}
    >
      {/* Mobile top header */}
      <div className="d-flex justify-content-between align-items-center p-3 d-lg-none">
        <h5 className={styles.logo}>
          Health<span>care.</span>
        </h5>
        <button className="btn" onClick={toggleSidebar}>
          <MdClose size={24} />
        </button>
      </div>

      <ul className="list-unstyled">
        {NAV_LINKS.map((item, index) =>
          item.kind === "header" ? (
            <li key={index} className={`mt-3 fw-bold ${styles.navHeader}`}>
              {item.title}
            </li>
          ) : (
            <li
              key={item.segment}
              className={`fw-semibold ${styles.navItem} ${activeSegment === item.segment ? styles.active : ""}`}
              onClick={() => setActiveSegment(item.segment)}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          )
        )}
      </ul>

      <div className={`${styles.settings} py-2`}>
        <MdSettings className={"me-2 "} size={20} />
        <span className="fw-semibold">Setting</span>
      </div>
    </div>
  );
}
