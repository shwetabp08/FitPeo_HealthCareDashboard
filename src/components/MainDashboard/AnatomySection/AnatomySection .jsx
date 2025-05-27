import React from 'react';
import styles from './AnatomySection.module.css';
import { anatomyIndicators } from '../../../data/healthData';
import HumanBody from '../../../assets/anatomy1.png'; 

function AnatomySection() {
  return (
    <>
    
    <div className={`ms-xl-3`}>
      <div className={`position-relative d-flex align-items-center justify-content-center py-3 rounded-4 ${styles.anatomyIllustrationContainer}`}>
        <img src={HumanBody} alt="Human Body Illustration" className={styles.humanBodyImage} />

        {anatomyIndicators.map((indicator) => (
  <React.Fragment key={indicator.id}>
    {indicator.icon && (
      <div
        className={`py-1 px-2 d-flex align-items-center justify-content-center ${styles.indicator}`}
        style={{
          top: indicator.position.top,
          left: indicator.position.left,
          backgroundColor: indicator.bgColor,
          border: indicator.border,
          color: indicator.color,
        }}
      >
        <span className='me-2'>{indicator.icon}</span>
        <p className={`small fw-bold mb-0 ${styles.indicatorText}`}>{indicator.name}</p>
      </div>
    )}

    {indicator.scan && (
      <span
      key={indicator.id}
        className="position-absolute z-2"
        style={{ top: indicator.position.top, left: indicator.position.left }}
      >
        {indicator.scan}
      </span>
    )}
  </React.Fragment>
))}

      </div>
    </div>
    
    </>
  );
}

export default AnatomySection;