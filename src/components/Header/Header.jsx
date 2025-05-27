import React from 'react';
import styles from './Header.module.css';
import { MdMenu, MdSearch, MdNotifications, MdAdd } from 'react-icons/md';

export default function Header({ toggleSidebar }) {
  return (
    <div className={`d-flex justify-content-between align-items-center gx-0 py-0 ${styles.header} ${styles.rightbgColor}`}>

      {/* Left: Logo & Menu */}
      <div className="col-2 d-flex align-items-center  justify-content-center">
        <button className="btn d-lg-none" onClick={toggleSidebar}>
          <MdMenu size={25} />
        </button>
        <h5 className={`d-none d-lg-block text-center ${styles.logo}`}>Health<span>care.</span></h5>
      </div>

      {/* Center: Search & Notifications */}
      <div className="col-5">
  <div className={`${styles.searchSection}`}>
    <div className={`input-group ${styles.searchBox}`}>
      <span className="input-group-text bg-white border-end-0 border-0">
        <MdSearch size={25} />
      </span>
      <input type="text" className="form-control border-start-0 border-0 p-0" placeholder="Search" />
    </div>
    <div className={`d-flex align-items-center justify-content-center ${styles.bellIcon}`}>
      <MdNotifications size={25} />
    </div>
  </div>
</div>

      {/* Right: Avatar & Add */}
      <div className={`col-5 d-flex align-items-center justify-content-end gap-2 pe-lg-5`}>
        <div className={`d-flex align-items-center justify-content-center ms-1 ${styles.rightIcon} ${styles.avatarIcon}`}>
          <img src="src/assets/avatar.png" alt="Avatar" className={`rounded-circle ${styles.avatar}`} />
        </div>
        <div className={`d-flex align-items-center justify-content-center ${styles.rightIcon} ${styles.plusIcon}`}>
          <MdAdd size={25} />
        </div>
      </div>
    </div>
  );
}
