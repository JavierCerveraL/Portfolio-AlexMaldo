import React from 'react';
import Link from 'next/link';
import { BiLeftArrowCircle } from 'react-icons/bi';
import Navbar from '@/components/Navbar';
function Services() {
  return (
    <div className=" container my-24 px-6 mx-auto">
      <Navbar />
      <Link href="/">
        <div className=" text-stone-900 hover:text-stone-600  cursor-pointer ">
          <h4 className="relative flex gap-1   text-stone-900 hover:text-stone-600 text-lg font-bold md:right-20 lg:right-20  right-15 bottom-16 ">
            <BiLeftArrowCircle className="content-center justify-items-center justify-center top-1.5 relative" />
            Go back
          </h4>
        </div>
      </Link>
      <h3 className="text-4xl animate__animated animate__fadeInDown font-bold text-stone-800 md:text-5xl  pb-5 mb-5 lg:pb-10 text-center  ">
        Services
      </h3>
    </div>
  );
}

export default Services;
