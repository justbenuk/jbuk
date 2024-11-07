"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navItems } from "@/data/navItems";
import Link from "next/link";
import { NavItem } from "@/types";
export default function NavigationBar() {
  //set the mobile nav state
  const [nav, setNav] = useState(false);

  //toggle the navar when responsive
  function toggleNav() {
    setNav(!nav);
  }
  return (
    <>
      <header className="bg-black/10 flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="w-full font-bold text-green-400 text-2xl uppercase italic"
        >
          jbuk
        </Link>

        {/*Desktop Nav*/}
        <ul className="hidden md:flex w-full justify-end gap-8">
          {navItems.map((navItem: NavItem) => (
            <li key={navItem.id}>
              <Link
                className="font-semibold text-lg uppercase hover:text-green-400"
                href={navItem.href}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navbar icon*/}
        <div className="block md:hidden" onClick={() => toggleNav()}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>

          {/* Mobile Navigation Items */}
          {navItems.map((navItem: NavItem) => (
            <li
              key={navItem.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
