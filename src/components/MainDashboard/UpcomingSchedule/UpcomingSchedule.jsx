import React from 'react';
import styles from './UpcomingSchedule.module.css';

const UpcomingSchedule = ({ title, time, icon }) => {
  return (
    <div className={`rounded-4 p-3 px-4  ${styles.bglight}`} style={{ width:'260px'}}>
      <h6 className="fw-bold mb-1 d-flex align-items-center justify-content-between" style={{color:'#292594'}}>
        {title}
        <span className="ms-2" style={{ fontSize: '1.5rem' }}>{icon}</span>
      </h6>
      <div className="text-secondary fw-semibold">{time}</div>
    </div>
  );
};

export default UpcomingSchedule;
