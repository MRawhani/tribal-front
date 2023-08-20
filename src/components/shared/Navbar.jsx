"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/nav-links";
import Image from "next/image";
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
        className={`header fixed top-0 left-0 w-full z-10 transition-all duration-400  md:bg-white 
        ${scrolled ? "scrolled bg-white  " : ""}`}
      >
        <div className="overlay"></div>

        <div className="container not-hidden">
          <div className="row align-center justify-between">
            <div className=" col md:hidden">
              {/* <img
                src="images/icons/menu.svg"
                alt=" menu icon"
                className="header__menu-icon"
              /> */}
            </div>
            <div className="col ">
              <div className="header__logo relative">
                <Image
                  className=""
                  src="/logo.png"
                  alt="Logo"
                  fill={true}
                  priority
                />
              </div>
            </div>
            <div className="col flex-1 md:block">
              <ul className="header__menu relative  mx-4 row gutter-big align-center justify-end">
                {links.map((link) =>
                  link.children ? (
                    <li key={link.id} className="header__dropdown col">
                      <a href="#" className="nav-link flex items-center">
                        <span>My Writting</span>
                      
                        <svg
                         className="mx-3  "
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7043 0.667501C10.5169 0.481251 10.2635 0.376709 9.99929 0.376709C9.73511 0.376709 9.48166 0.481251 9.29429 0.667501L5.70429 4.2075L2.16429 0.667501C1.97693 0.481251 1.72348 0.376709 1.45929 0.376709C1.19511 0.376709 0.941657 0.481251 0.754294 0.667501C0.660566 0.760464 0.586171 0.871065 0.535403 0.992925C0.484634 1.11478 0.458496 1.24549 0.458496 1.3775C0.458496 1.50951 0.484634 1.64022 0.535403 1.76208C0.586171 1.88394 0.660566 1.99454 0.754294 2.0875L4.99429 6.3275C5.08726 6.42123 5.19786 6.49562 5.31972 6.54639C5.44158 6.59716 5.57228 6.6233 5.70429 6.6233C5.83631 6.6233 5.96701 6.59716 6.08887 6.54639C6.21073 6.49562 6.32133 6.42123 6.41429 6.3275L10.7043 2.0875C10.798 1.99454 10.8724 1.88394 10.9232 1.76208C10.974 1.64022 11.0001 1.50951 11.0001 1.3775C11.0001 1.24549 10.974 1.11478 10.9232 0.992925C10.8724 0.871065 10.798 0.760464 10.7043 0.667501Z"
                            fill="currentColor"                          />
                        </svg>
                      </a>
                      <div
                        className="header__dropdown-list absolute p-4 left-0 mt-4 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 
                      transition-all duration-490 translate-y-4 invisible"
                      >
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
                    key={link.id}
                      className={`col ${
                        pathname === link.path ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" href={link.path}>
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
                <li className={`col `}>
                  <Image
                    className="hover:scale-110 transition-transform duration-300"
                    src="/icons/search.svg"
                    alt="search icon"
                    width={20}
                    height={20}
                    priority
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
