export default function Home() {
  return (
    <>
      <div className=" h-screen grid  content-center justify-items-center justify-center bg-stone-200">
        <div className=" alexHeading text-7xl lg:text-8xl md:text-6xl text-center  ">
          <div>
            {' '}
            <span className="animate__animated animate__slideInDown inline-block  ">
              A
            </span>
            <span className="animate__animated animate__slideInDown inline-block ">
              l
            </span>
            <span className="animate__animated animate__slideInDown inline-block ">
              e
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-1s">
              j
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-1s">
              a
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-1s">
              n
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-2s">
              d
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-2s">
              r
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-2s">
              o
            </span>{' '}
            <span> </span>
          </div>
          <div>
            {' '}
            <span className="animate__animated animate__slideInDown inline-block ">
              M
            </span>
            <span className="animate__animated animate__slideInDown inline-block ">
              a
            </span>
            <span className="animate__animated animate__slideInDown inline-block ">
              l
            </span>
            <span className="animate__animated animate__slideInDown inline-block ">
              d
            </span>
            <span className="animate__animated animate__slideInDown inline-block ">
              o
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-1s">
              n
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-1s">
              a
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-2s">
              d
            </span>
            <span className="animate__animated animate__slideInDown inline-block animate__delay-2s">
              o
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <button className="bg-none hover:bg-gray-100 text-stone-800 font-semibold py-1 px-5 border border-gray-400 rounded shadow">
            Portfolio
          </button>
          <button className="bg-none hover:bg-gray-100 text-stone-800 font-semibold py-1 px-5 border border-gray-400 rounded shadow">
            Contact me
          </button>
          <button className="bg-none hover:bg-gray-100 text-stone-800 font-semibold py-1 px-5 border border-gray-400 rounded shadow">
            Gallery
          </button>
        </div>
      </div>
    </>
  );
}
