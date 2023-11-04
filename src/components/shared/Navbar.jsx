"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/nav-links";
import Image from "next/image";

// desktop
const DesktopNavbarItems = () => {
  const pathname = usePathname();

  return links.map((link) => {
    if (link.children)
      return (
        <li key={link.id} className="header__dropdown col">
          <div className="nav-link flex items-center">
            <span>My Writing</span>

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
                fill="currentColor"
              />
            </svg>
          </div>

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
      );

    return (
      <li
        key={link.id}
        className={`col ${pathname === link.path ? "active" : ""}`}
      >
        <Link className="nav-link" href={link.path}>
          {link.name}
        </Link>
      </li>
    );
  });
};

const MobileNavbarDropdownItem = ({ link, closeMobileNavbar }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <li className="menu__item header__dropdown header__dropdown-wrapper">
      <div className="w-full">
        <div
          className="nav-link flex justify-between items-center"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <span>{link.name}</span>
          <svg
            className={`mx-3 transition-transform ${
              openDropdown ? "rotate-180" : ""
            }`}
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7043 0.667501C10.5169 0.481251 10.2635 0.376709 9.99929 0.376709C9.73511 0.376709 9.48166 0.481251 9.29429 0.667501L5.70429 4.2075L2.16429 0.667501C1.97693 0.481251 1.72348 0.376709 1.45929 0.376709C1.19511 0.376709 0.941657 0.481251 0.754294 0.667501C0.660566 0.760464 0.586171 0.871065 0.535403 0.992925C0.484634 1.11478 0.458496 1.24549 0.458496 1.3775C0.458496 1.50951 0.484634 1.64022 0.535403 1.76208C0.586171 1.88394 0.660566 1.99454 0.754294 2.0875L4.99429 6.3275C5.08726 6.42123 5.19786 6.49562 5.31972 6.54639C5.44158 6.59716 5.57228 6.6233 5.70429 6.6233C5.83631 6.6233 5.96701 6.59716 6.08887 6.54639C6.21073 6.49562 6.32133 6.42123 6.41429 6.3275L10.7043 2.0875C10.798 1.99454 10.8724 1.88394 10.9232 1.76208C10.974 1.64022 11.0001 1.50951 11.0001 1.3775C11.0001 1.24549 10.974 1.11478 10.9232 0.992925C10.8724 0.871065 10.798 0.760464 10.7043 0.667501Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div
          className={`transition-all duration-500 overflow-hidden 
      ${openDropdown ? "mt-2 h-auto opacity-100 visible" : "h-0 opacity-0"}`}
        >
          {link.children.map((child) => (
            <Link
              className=" block px-2 py-2 hover:bg-gray-200"
              href={child.path}
              key={child.id}
              onClick={closeMobileNavbar}
            >
              - {child.name}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
};

const MobileNavbarItems = ({ closeMobileNavbar }) => {
  const pathname = usePathname();

  return links.map((link) => {
    if (link.children)
      return (
        <MobileNavbarDropdownItem
          key={link.id}
          link={link}
          closeMobileNavbar={closeMobileNavbar}
        />
      );

    return (
      <li
        key={link.id}
        className={`menu__item ${pathname === link.path ? "active" : ""}`}
      >
        <Link className="nav-link" href={link.path} onClick={closeMobileNavbar}>
          {link.name}
        </Link>
      </li>
    );
  });
};

const MobileNavbar = ({ isMobileNavOpen, closeMobileNavbar }) => {
  if (!isMobileNavOpen) return null;

  return (
    <div className="mobile-header">
      <div className="container">
        <div className="mobile-header__logo flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo-primary-color.svg"
              width={160}
              height={70}
              alt="Logo"
              priority
            />
          </Link>

          <button onClick={closeMobileNavbar}>
            <Image
              src="/icons/icon-x.svg"
              height={16}
              width={16}
              alt="Logo"
              priority
            />
          </button>
        </div>

        <ul className="mobile-header__menu align-center justify-end">
          <MobileNavbarItems closeMobileNavbar={closeMobileNavbar} />
        </ul>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isHomePagePath = usePathname() === "/";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      setScrolled(offset > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isHomePagePath ? "" : "is-home-page"}>
      {/* styles are converted from scss to tailwind, see chat triabl-voices-project */}
      <header
        className={`header sticky top-0 left-0 w-full z-10 transition-all duration-400  md:bg-white 
        ${scrolled ? "scrolled bg-white  " : ""}`}
      >
        <div className="overlay"></div>

        <div className="container not-hidden">
          <div className="flex align-center justify-between">
            <div className="flex justify-between items-center">
              <Link href="/" className="relative">
                <Image
                  src={
                    isHomePagePath
                      ? "/logo-primary-color.svg"
                      : "/logo-white-color.svg"
                  }
                  width={160}
                  height={70}
                  alt="Logo"
                  priority
                />
              </Link>
            </div>
            {/* desktop */}
            <div className="col flex-1 hidden xl:block">
              <ul className="header__menu relative  mx-4 flex gutter-big align-center justify-end">
                <DesktopNavbarItems />
              </ul>
            </div>

            <div className="flex gap-3 justify-between items-center">
              <Link href="/search">
                <Image
                  src="/icons/search-primary-color.svg"
                  height={24}
                  width={24}
                  alt="menu icon"
                />
              </Link>

              <button
                className="xl:hidden"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                <Image
                  src={
                    isHomePagePath ? "/icons/menu.svg" : "/icons/menu-white.svg"
                  }
                  height={40}
                  width={40}
                  alt="menu icon"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="xl:hidden">
          <MobileNavbar
            isMobileNavOpen={isMobileNavOpen}
            closeMobileNavbar={() => setIsMobileNavOpen(false)}
          />
        </div>
      </header>
    </div>
  );
}
