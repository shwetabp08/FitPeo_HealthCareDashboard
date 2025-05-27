import React from 'react';
import styles from './CalendarView.module.css';
import { calendarData } from '../../../data/calendarData';

function Calendar() {
  return (
    <div className={`container ${styles.calendarContainer}`}>
      <div className={styles.calendarHeader}>
        <h5>October 2021</h5>
        <div>
          <span className={styles.arrow}>&lt;</span>
          <span className={styles.arrow}>&gt;</span>
        </div>
      </div>
      <div className="row text-center justify-content-between">
        {calendarData.map(({ id, day, date, times, isActive, isDisabled, selectedTime }) => (
          <div key={id} className={`col p-0 ${styles.dayColumn}`}>
            <div className={`${styles.dayBox} ${isActive ? styles.activeDay : ''} ${isDisabled ? styles.disabled : ''}`}>
              <div className={styles.dayText}>{day}</div>
              <div className={styles.dateText}>{date}</div>
            </div>
            {times.map((time, i) => (
              <div key={i} className={styles.timeWrapper}>
                {time ? (
                  <span className={`${styles.timeSlot} ${selectedTime === time ? styles.selectedTime : ''}`}>
                    {time}
                  </span>
                ) : (
                  <span className={styles.dash}>-</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
