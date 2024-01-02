import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import { navLinks } from "@/data/config";

const Navbar = () => {
  const [activeNav, setActtiveNav] = useState(false);

  return (
    <div className=" mx-auto flex justify-between items-center md:px-20 lg:px-20 px-3">
      <div className=" flex items-center gap-2">
        <img src={"/kings_chippy_logo.png"}  className="w-12 h-12 "/>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl ">
          Kings <span className=" font-bold ">Chippy</span>
        </h1>
      </div>
      <div className="flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <nav className="md:flex hidden">
          <ul className=" flex flex-row gap-5 text-white p-4 text-gray-800 ">

            {navLinks.map((items) => (
              <a className="text-[18px] py-4 flex cursor-pointer font-light" href={items.link} key={items.id}>
                {items.title}
              </a>
            ))}
          </ul>
        </nav>

      </div>
      <div className="flex flex-wrap items-center">
      <a href="#contact-us" className="bg-orange-500 border-orange-500 border px-5 py-2 rounded-full text-[13px] font-medium md:flex hidden">Book A Table</a>
      <div onClick={() => setActtiveNav(!activeNav)} className=" cursor-pointer md:hidden flex ">
          <AiOutlineMenu size={30} />
        </div>
      </div>


      {/* Mobile menu overlay */}
      {activeNav ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0 ">
        </div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}

      <div
        className={
          activeNav
            ? " fixed top-0 right-0 w-[300px] bg-white z-10 h-screen duration-300 "
            : " fixed top-0 right-[-100%] w-[300px] bg-white z-10 h-screen duration-300 "
        }
      >
        <AiOutlineClose
          onClick={() => setActtiveNav(!activeNav)}
          size={30}
          className=" text-black absolute right-4 top-4 cursor-pointer "
        />
        <h2 className=" text-2xl p-4 text-black">
          Kings <span className=" font-bold ">Chippy</span>{" "}
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800 ">

            {navLinks.map((items) => (
              <a className="text-xl py-4 flex cursor-pointer" href={items.link} key={items.id} onClick={() => setActtiveNav(!activeNav)}>
                {items.title}
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
