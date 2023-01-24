import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center justify-end flex-wrap ">
      <ul className="flex gap-5 relative bottom-20 ">
        <li className="text-stone-900 hover:text-stone-600 ">
          {' '}
          <Link href="/Contact">
            <p>Contact</p>
          </Link>
        </li>
        <li className="text-stone-900 hover:text-stone-600 ">
          {' '}
          <Link href="/Gallery">
            <p>Gallery</p>
          </Link>
        </li>
        <li className="text-stone-900 hover:text-stone-600 ">
          {' '}
          <Link href="/Aboutme">
            <p>About </p>
          </Link>
        </li>
        <li className="text-stone-900 hover:text-stone-600 ">
          {' '}
          <Link href="/Services">
            <p>Services</p>
          </Link>
        </li>
        <li className="text-stone-900 hover:text-stone-600  ">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1KDjwOOzKbQ5P4RFac8rvANrJ4IYboDqd/view?usp=share_link"
          >
            <button className="">Portfolio</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
