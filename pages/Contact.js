import { BiLeftArrowCircle } from 'react-icons/bi';
import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <Link href="/">
        <div className=" text-stone-900 hover:text-stone-600  cursor-pointer ">
          <h4 className="relative flex gap-1   text-stone-900 hover:text-stone-600 text-lg font-bold md:right-20 lg:right-20  right-15 bottom-16 ">
            <BiLeftArrowCircle className="content-center justify-items-center justify-center top-1.5 relative" />
            Go back
          </h4>
        </div>
      </Link>
      <h3 className="text-4xl animate__animated animate__fadeInDown font-bold text-stone-800 md:text-5xl  pb-5 mb-5 lg:pb-10 text-center  ">
        CONTACT ME
      </h3>
      <section className="mb-32 text-stone-800">
        <div className="flex justify-center">
          <div className="text-center lg:max-w-3xl md:max-w-xl"></div>
        </div>

        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
            <form>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
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
                focus:text-stone-700 focus:bg-white focus:border-stone-700 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
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
                focus:text-stone-700 focus:bg-white focus:border-stone-700 focus:outline-none"
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
              <div className="form-group mb-6">
                <textarea
                  className="
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
                focus:text-stone-700 focus:bg-white focus:border-stone-700 focus:outline-none
              "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
              w-full
              px-6
              py-1
           
          
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:shadow-lg
              focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-stone-400 active:shadow-lg
              transition
              duration-150
              ease-in-out
              bg-none hover:bg-stone-100 text-stone-800 pt-1 border border-stone-400 "
              >
                Send
              </button>
            </form>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-stone-700 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-10 text-white"
                      >
                        {' '}
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Instagram</p>
                    <p className="text-stone-500">@username</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-stone-700 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="text-white w-6 bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        {' '}
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">LinkedIn</p>
                    <p className="text-stone-500">www.link/maldo</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-stone-700 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 text-white bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        {' '}
                        <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                          fill="white"
                        ></path>{' '}
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Facebook</p>
                    <p className="text-stone-500">@username</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-stone-700 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-google w-5 text-white"
                        viewBox="0 0 16 16"
                      >
                        {' '}
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Gmail</p>
                    <p className="text-stone-500">
                      alexmaldonado1094@gmail.com{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
