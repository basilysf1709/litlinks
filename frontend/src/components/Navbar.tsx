import React from 'react';
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/aboutus">About us</Link>
      <Link href="/contactus">Contact us</Link>
    </div>
  );
};

export default Navbar;