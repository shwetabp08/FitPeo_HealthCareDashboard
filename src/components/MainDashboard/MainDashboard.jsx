import React from "react";
import styles from "./MainDashboard.module.css";
import { anatomyIndicators, healthCards } from "../../data/healthData";
import { activityData } from "../../data/appointmentData";
import appointmentData from "../../data/appointmentData";
import AnatomySection from "./AnatomySection/AnatomySection ";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

export default function MainDashboard() {
  return (
    <div className={`container`}>
      <div className="row justify-content-center g-4">
        {/* Left Section: Anatomy and Activity */}
        <div className="col-lg-6">
          <div className="row my-2 mb-1 align-items-center">
            <h5 className="col-8 ps-4 fw-bold" style={{ color: "#292594" }}>
              Dashboard
            </h5>
            <Link
              to="/"
              className={`col-4 text-decoration-none text-end small fw-semibold ${styles.Detailslink}`}
            >
              This Week{" "}
              <span className="ms-1">
                <MdArrowForward />
              </span>
            </Link>
          </div>
          <div
            className={`row gy-4 justify-content-center  ${styles.leftContentWrapper}`}
          >
            <div className="col-md-8">
              <AnatomySection indicators={anatomyIndicators} />
            </div>
            <div className="col-md-4">
              <HealthStatusCards cards={healthCards} />
            </div>
          </div>

          <div className="">
            <ActivityFeed data={activityData} />
          </div>
        </div>

        {/* Right Section: Health Cards, Calendar, Upcoming Schedule */}
        <div className="col-lg-6 px-0">
          <div className={`d-flex flex-column ${styles.rightContentWrapper}`}>
            <CalendarView />
            <div className="d-flex px-4 flex-wrap gap-2">
              <div
                className={`rounded-4 p-3 px-4 m-2 ${styles.dentist}`}
                style={{ minWidth: "240px" }}
              >
                <h6 className="fw-bold mb-1 text-white d-flex align-items-center justify-content-between">
                  Dentist <span style={{ fontSize: "1.5rem" }}>🦷</span>
                </h6>
                <div className="text-white fw-semibold">09:00-11:00</div>
                <div className={`small text-white fw-semibold`}>
                  Dr. Cameron Williamson
                </div>
              </div>

              <div
                className={`rounded-4 p-3 px-4 m-2 ${styles.physiotherapy}`}
                style={{ minWidth: "240px" }}
              >
                <h6
                  className="fw-bold mb-1 d-flex align-items-center justify-content-between"
                  style={{ color: "#292594" }}
                >
                  Physiotherapy Appointment{" "}
                  <span className="ms-2" style={{ fontSize: "1.5rem" }}>
                    {" "}
                    💪
                  </span>
                </h6>
                <div className={`small fw-semibold text-secondary `}>
                  11:00-12:00
                </div>
                <div className={`small fw-semibold text-secondary `}>
                  Dr. Kevin Djones
                </div>
              </div>
            </div>
            <div className="px-4 py-2">
              {/* Upcoming Schedule */}
              <h5
                className="fw-bold text-start px-4"
                style={{ color: "#292594" }}
              >
                The Upcoming Schedule
              </h5>
              {appointmentData.map((dayItem, index) => (
                <div key={index} className="px-2">
                  <div className="text-secondary fw-semibold px-3 my-2">
                    On {dayItem.day}
                  </div>
                  <div className="d-flex flex-wrap gap-4 justify-content-evenly">
                    {dayItem.schedule.map((appt, idx) => (
                      <UpcomingSchedule key={idx} {...appt} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
