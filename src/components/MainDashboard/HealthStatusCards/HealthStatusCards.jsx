import React from "react";
import { healthCards } from "../../../data/healthData";
import lungIcon from "../../../assets/lung.png";
import teethIcon from "../../../assets/teeth.png";
import boneIcon from "../../../assets/bone.png";
import styles from "./HealthStatusCards.module.css";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

const cardImageMap = {
  "lungs-icon": lungIcon,
  "teeth-icon": teethIcon,
  "bone-icon": boneIcon,
};

function HealthStatusCards() {
  return (
    <div className="d-flex flex-column align-items-center gap-3 me-xl-3">
      {healthCards.map((card) => {
        const ImageComponent = cardImageMap[card.icon];
        const progressColor = card.status === "healthy" ? "#7ecdc0" : "#fd7e5e";

        return (
          <div
            key={card.id}
            className={`p-4 py-3 rounded-4 ${styles.cardbgColor}`}
          >
            {/* Row 1: Icon + Name */}
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center gap-2">
                {ImageComponent && (
                  <img
                    src={ImageComponent}
                    alt={card.name}
                    className={`${styles.cardImg}`}
                  />
                )}
                <h6 className={`mb-0 ms-2 fw-bold ${styles.cardName}`}>
                  {card.name}
                </h6>
              </div>
            </div>

            {/* Row 2: Date + Progress Bar */}
            <div>
              <small className={` fw-semibold ${styles.cardDate}`}>
                Date: {card.date}
              </small>
              {card.progress && (
                <div className="progress mt-2" style={{ height: "6px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${card.progress}%`,
                      backgroundColor: progressColor,
                    }}
                    aria-valuenow={card.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div className="row ">
        <Link
          to="/"
          className={`col-12 text-end text-decoration-none small fw-semibold  ${styles.Detailslink}`}
          style={{ marginLeft: "35px" }}
        >
          Details{" "}
          <span className="ms-1" >
            <MdArrowForward />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HealthStatusCards;
