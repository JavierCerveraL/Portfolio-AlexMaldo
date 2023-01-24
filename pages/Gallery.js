import React from 'react';
import Link from 'next/link';
import { BiLeftArrowCircle } from 'react-icons/bi';
import Navbar from '@/components/Navbar';

function Gallery() {
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
        Gallery
      </h3>

      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQlhlsfdO-vCWOf0eUNMmhoE1IhOCBb528wYyM018i_qh6CTCWwvMQjAGsWADXHd9_SWTrP-pN6Dfbld59M96w"
            />
            {/* <p className="card-text  bg-stone-900 text-sm text-stone-200  border-b-stone-900">
              Description
            </p> */}
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQlhlsfdO-vCWOf0eUNMmhoE1IhOCBb528wYyM018i_qh6CTCWwvMQjAGsWADXHd9_SWTrP-pN6Dfbld59M96w"
            />
            {/* <p className="card-text  bg-stone-900 text-sm text-stone-50  border-b-stone-900">
              Description
            </p> */}
          </div>

          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQlhlsfdO-vCWOf0eUNMmhoE1IhOCBb528wYyM018i_qh6CTCWwvMQjAGsWADXHd9_SWTrP-pN6Dfbld59M96w"
            />
            {/* <p className="card-text  bg-stone-900 text-sm text-stone-50  border-b-stone-900">
              Description
            </p> */}
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQlhlsfdO-vCWOf0eUNMmhoE1IhOCBb528wYyM018i_qh6CTCWwvMQjAGsWADXHd9_SWTrP-pN6Dfbld59M96w"
            />
            {/* <p className="card-text  bg-stone-900 text-sm text-stone-50  border-b-stone-900">
              Description
            </p> */}
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQlhlsfdO-vCWOf0eUNMmhoE1IhOCBb528wYyM018i_qh6CTCWwvMQjAGsWADXHd9_SWTrP-pN6Dfbld59M96w"
            />
            {/* <p className="card-text  bg-stone-900 text-sm text-stone-50  border-b-stone-900">
              Description
            </p> */}
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQlhlsfdO-vCWOf0eUNMmhoE1IhOCBb528wYyM018i_qh6CTCWwvMQjAGsWADXHd9_SWTrP-pN6Dfbld59M96w"
            />
            {/* <p className="card-text  bg-stone-900 text-sm text-stone-50  border-b-stone-900">
              Description
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
