import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Image
        src="/assets/book1.jpg"
        height={144}
        width={144}
        alt="Book Image"
      />
    </div>
  );
};

export default Home;
