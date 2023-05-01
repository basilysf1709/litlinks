import React from 'react';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>LitLinks</div>
      <Link href="/">Home</Link>
      <Link href="/aboutus">About us</Link>
      <Link href="/contactus">Contact us</Link>
    </div>
  );
};

export default Navbar;