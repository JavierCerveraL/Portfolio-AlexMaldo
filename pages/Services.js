import React from 'react';
import Link from 'next/link';
import { BiLeftArrowCircle } from 'react-icons/bi';
import Navbar from '@/components/Navbar';

import { service1 } from '../public/bgone.jpg';

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

      <div className="grid grid-flow-col gap-1">
        <div className="cards">
          <Link
            href="/"
            class="flex flex-col items-center bg-stone-300 border border-stone-500 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-stone-500"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-10 md:rounded-none md:rounded-l-lg"
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-stone-900 ">
                Services
              </h5>
              <p class="mb-3 font-normal text-stone-900 ">
                Zombie ipsum reversus ab viral inferno nam, rick bursting
                caeruleum feeding imo walking, virus z? brains terrore
                braaaiiiins.
              </p>
            </div>
          </Link>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="#">
            <img class="rounded-t-lg" src={service1} alt="" />
          </Link>
          <div class="p-5">
            <Link href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
