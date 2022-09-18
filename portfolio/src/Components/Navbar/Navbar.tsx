import React, { ReactElement } from 'react';

import styles from "./Navbar.module.css";

// type NavbarProps = {
//     name: string;
//     number: number;
// }

function Navbar():ReactElement {
  return (
    <div className={styles.navbar}>
        <div className={styles.navLogo}>C<span>R</span>R</div>
        <div className={styles.navItems}>
            <div className={styles.navItem}>Home</div>
            <div className={styles.navItem}>Home</div>
            <div className={styles.navItem}>Home</div>
            <div className={styles.navItem}>Home</div>
        </div>
    </div>
  )
}

export default Navbar