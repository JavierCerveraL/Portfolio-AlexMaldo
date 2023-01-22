import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <div
        className=" h-screen grid  content-center justify-items-center justify-center fadeIn"
        id="main"
      >
        <div className=" alexHeading text-7xl lg:text-8xl md:text-6xl text-center  ">
          <div>
            {' '}
            <span className="animate__animated animate__fadeInDown inline-block   ">
              A
            </span>
            <span className="animate__animated animate__fadeInDown inline-block   ">
              l
            </span>
            <span className="animate__animated animate__fadeInDown inline-block  ">
              e
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-1s  ">
              j
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-1s  ">
              a
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-1s  ">
              n
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-2s  animate__slow">
              d
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-2s  animate__slow">
              r
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-2s  animate__slow">
              o
            </span>
            <span> </span>
          </div>
          <div>
            {' '}
            <span className="animate__animated animate__fadeInDown inline-block   ">
              M
            </span>
            <span className="animate__animated animate__fadeInDown inline-block   ">
              a
            </span>
            <span className="animate__animated animate__fadeInDown inline-block   ">
              l
            </span>
            <span className="animate__animated animate__fadeInDown inline-block   ">
              d
            </span>
            <span className="animate__animated animate__fadeInDown inline-block   ">
              o
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-1s  ">
              n
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-1s  ">
              a
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-2s  animate__slow">
              d
            </span>
            <span className="animate__animated animate__fadeInDown inline-block animate__delay-2s  animate__slow">
              o
            </span>
          </div>
        </div>
        <div className="flex gap-1 mt-2 animate__animated animate__bounce">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1KDjwOOzKbQ5P4RFac8rvANrJ4IYboDqd/view?usp=share_link"
            className="bg-none hover:bg-stone-400 text-stone-800 font-semibold py-1 px-5 border border-stone-400 rounded-sm shadow animate__animated animate__zoomIn  animate__delay-2s"
          >
            Portfolio
          </Link>
          <Link
            href="/Contact"
            className="bg-none hover:bg-stone-400 text-stone-800 font-semibold py-1 px-5 border border-stone-400 rounded-sm shadow animate__animated animate__zoomIn animate__delay-2s"
          >
            Contact me
          </Link>
          <Link
            href="/Gallery"
            className="bg-none hover:bg-stone-400 text-stone-800 font-semibold py-1 px-5 border border-stone-400 rounded-sm shadow animate__animated animate__zoomIn animate__delay-2s"
          >
            Gallery
          </Link>
        </div>

        <div className="flex gap-6 mt-2 animate__animated animate__bounce">
          <Link
            href="/Aboutme"
            className="bg-none hover:bg-stone-400 text-stone-800 font-semibold py-1 px-5 border border-stone-400 rounded-sm shadow animate__animated animate__zoomIn  animate__delay-2s"
          >
            About Me
          </Link>
          <Link
            href="/Services"
            className="bg-none hover:bg-stone-400 text-stone-800 font-semibold py-1 px-5 border border-stone-400 rounded-sm shadow animate__animated animate__zoomIn animate__delay-2s"
          >
            Services
          </Link>
        </div>
      </div>
    </>
  );
}
