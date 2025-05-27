import React from 'react';
import styles from './ActivityFeed.module.css';
import { FiActivity } from 'react-icons/fi';

const activityData = [
  [10, 30, 20], // Monday
  [15, 25, 10], // Tuesday
  [20, 40, 15], // Wednesday
  [10, 35, 25], // Thursday
  [5, 20, 10],  // Friday
  [18, 28, 12], // Saturday
  [8, 22, 17],  // Sunday
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function ActivityFeed() {
  return (
    <div className={` ${styles.activityFeed}`}>
      {/* First Row: Header */}
      <div className={styles.headerRow}>
        <div className={styles.title}>
          <FiActivity style={{ marginRight: '6px' }} />
          Activity
        </div>
        <p className={styles.subtitle}>3 appointments this week</p>
      </div>

      {/* Second Row: Chart */}
      <div className={styles.chartWrapper}>
        {activityData.map((bars, index) => (
          <div className={styles.dayColumn} key={index}>
            <div className={styles.barsContainer}>
              {bars.map((value, idx) => (
                <div
                  key={idx}
                  className={`${styles.chartBar} ${idx === 1 ? styles.middleBar : idx === 0 ? styles.firstBar : styles.lastBar}`}
                  style={{ height: `${value * 1.2}px` }}
                ></div>
              ))}
            </div>
            <span className={styles.dayLabel}>{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
