"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/nav-links";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        // You can adjust the offset value to your needs
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* styles are converted from scss to tailwind, see chat triabl-voices-project */}
      <header
        className={`header fixed top-0 left-0 w-full z-10 transition-all duration-400 py-7   md:py-11 md:bg-white 
        ${scrolled ? "scrolled bg-white  md:py-[1.6rem] py-[1.6rem]" : ""}`}
      >
        <div className="overlay"></div>

        <div className="container not-hidden">
          <div className="row align-center justify-between">
            <div className=" col md:hidden">
              <img
                src="images/icons/menu.svg"
                alt=" menu icon"
                className="header__menu-icon"
              />
            </div>
            <div className="col bg-black">
              <img src="images/logo.png" alt=" logo" className="header__logo relative" />
            </div>
            <div className="col flex-1 md:block">
              <ul className="header__menu relative my-0 mx-4 row align-center justify-end">
                {links.map((link) =>
                  link.children ? (
                    <li className=" header__dropdown">
                      <a href="#" className="nav-link">
                        My Writting
                      </a>
                      <div className="header__dropdown-list absolute p-4 left-0 mt-4 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 
                      transition-all duration-490 translate-y-4 invisible">
                        {link.children.map((child) => (
                          <Link
                            className=" block px-4 py-2 hover:bg-gray-200"
                            href={child.path}
                            key={child.id}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </li>
                  ) : (
                    <li
                      className={` ${pathname === link.path ? "active" : ""}`}
                    >
                      <Link className="nav-link" href={link.path}>
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
