import React from 'react';
import Link from 'next/link'
import Image from "next/image";

const HomeContent: React.FC = () => {
  return (
    <div>
        home content right here
        <Image
          src="/assets/book1.jpg"
          width={200}
          height={100}
          alt="Book Image"
        />
    </div>
  );
};

export default HomeContent;