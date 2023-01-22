import { BiLeftArrowCircle } from 'react-icons/bi';
import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <div class="container my-24 px-6 mx-auto">
      <Link href="/">
        <div className=" text-stone-900 hover:text-stone-600  cursor-pointer ">
          <h4 className="relative flex gap-1   text-stone-900 hover:text-stone-600 text-lg font-bold md:right-20 lg:right-20  right-15 bottom-16 ">
            <BiLeftArrowCircle className="content-center justify-items-center justify-center top-1.5 relative" />
            Go back
          </h4>
        </div>
      </Link>
      <section class="mb-32 text-center text-stone-800">
        <div class="max-w-[700px] mx-auto px-3 lg:px-6">
          <h3 className="text-4xl animate__animated animate__fadeInDown font-bold text-stone-800 md:text-5xl  pb-5 lg:pb-10 text-center  ">
            CONTACT ME
          </h3>
          <form>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-stone-700
            bg-white bg-clip-padding
            border border-solid border-stone-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-stone-700 focus:bg-white focus:border-black focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-stone-700
            bg-white bg-clip-padding
            border border-solid border-stone-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-stone-700 focus:bg-white focus:border-black focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="subject"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-stone-700
            bg-white bg-clip-padding
            border border-solid border-stone-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-stone-700 focus:bg-white focus:border-black focus:outline-none"
                id="exampleInput8"
                placeholder="Subject"
              />
            </div>

            <div class="form-group mb-6">
              <textarea
                class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-stone-700
            bg-white bg-clip-padding
            border border-solid border-stone-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-stone-700 focus:bg-white focus:border-black focus:outline-none
          "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-group form-check text-center mb-6"></div>

            <button
              type="submit"
              className="bg-none hover:bg-stone-100 text-stone-800 font-semibold py-1 px-5 pt-1 border border-stone-400 rounded-sm shadow  "
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
