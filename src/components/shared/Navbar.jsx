"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/nav-links";
import Image from "next/image";

const onLinkClick = () => {
  const event = new CustomEvent("router-link", { bubbles: true });

  window.dispatchEvent(event);
};

// desktop
const DesktopNavbarItems = () => {
  const pathname = usePathname();

  return links.map((link) => {
    if (link.children)
      return (
        <li key={link.id} className="header__dropdown">
          <div className="nav-link flex items-center">
            <span className="nav-link-title">My Writing</span>

            <svg
              className="me-3 dropdown-svg "
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
            className="header__dropdown-list absolute p-3 left-0 rounded-md shadow-lg opacity-0 
      transition-all duration-490 translate-y-4 invisible"
          >
            {link.children.map((child) => (
              <div
                className={`${
                  pathname === child.path ? "active-sub-nav" : ""
                } header__dropdown-item flex items-center justify-between   `}
                key={child.id}
              >
                <Link
                  className={`${
                    pathname === child.path ? "active-sub-nav" : ""
                  } text-sm flex whitespace-nowrap items-center px-4 py-2 hover:bg-gray-200`}
                  href={child.path}
                  key={child.id}
                  onClick={onLinkClick}
                >
                  {child.name}
                </Link>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9199 0.62C12.8185 0.375651 12.6243 0.181475 12.3799 0.0799999C12.2597 0.028759 12.1306 0.00157999 11.9999 0H1.99994C1.73472 0 1.48037 0.105357 1.29283 0.292893C1.1053 0.48043 0.999939 0.734784 0.999939 1C0.999939 1.26522 1.1053 1.51957 1.29283 1.70711C1.48037 1.89464 1.73472 2 1.99994 2H9.58994L1.28994 10.29C1.19621 10.383 1.12182 10.4936 1.07105 10.6154C1.02028 10.7373 0.994141 10.868 0.994141 11C0.994141 11.132 1.02028 11.2627 1.07105 11.3846C1.12182 11.5064 1.19621 11.617 1.28994 11.71C1.3829 11.8037 1.4935 11.8781 1.61536 11.9289C1.73722 11.9797 1.86793 12.0058 1.99994 12.0058C2.13195 12.0058 2.26266 11.9797 2.38452 11.9289C2.50638 11.8781 2.61698 11.8037 2.70994 11.71L10.9999 3.41V11C10.9999 11.2652 11.1053 11.5196 11.2928 11.7071C11.4804 11.8946 11.7347 12 11.9999 12C12.2652 12 12.5195 11.8946 12.707 11.7071C12.8946 11.5196 12.9999 11.2652 12.9999 11V1C12.9984 0.869323 12.9712 0.740222 12.9199 0.62Z"
                    fill="current"
                  />
                </svg>
              </div>
            ))}
          </div>
        </li>
      );

    return (
      <li key={link.id} className={`${pathname === link.path ? "active" : ""}`}>
        <Link
          className="nav-link nav-link-title"
          href={link.path}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      </li>
    );
  });
};

const MobileNavbarDropdownItem = ({ link, closeMobileNavbar }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleLink = () => {
    closeMobileNavbar();
    onLinkClick();
  };

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
              onClick={handleLink}
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

  const handleLink = () => {
    closeMobileNavbar();
    onLinkClick();
  };

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
        <Link className="nav-link" href={link.path} onClick={handleLink}>
          {link.name}
        </Link>
      </li>
    );
  });
};

const MobileNavbar = ({ isMobileNavOpen, closeMobileNavbar }) => {
  // if (!isMobileNavOpen) return null;

  return (
    <div
      className={`mobile-header ${isMobileNavOpen ? "is--open" : "is--close"}`}
    >
      <div className="container">
        <div className="mobile-header__logo flex justify-between items-center">
          <Link href="/" onClick={onLinkClick}>
            <Image
              src="/logo-primary-color.svg"
              width={160}
              height={70}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={closeMobileNavbar}
            className="menu__close-btn flex justify-center items-center w-10 h-10"
          >
            <Image
              src="/icons/icon-x.svg"
              height={24}
              width={24}
              alt="Logo"
              priority
              className="opacity-75"
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

export default function Navbar({ className = "", isHomePage = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isHomePagePath = usePathname() === "/" && isHomePage;
  const isSearchPagePath = usePathname() === "/search";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      setScrolled(offset > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${isHomePagePath ? "" : "is-not-home-page"} ${
        isSearchPagePath ? "is-search-page" : ""
      }  ${className} `}
    >
      {/* styles are converted from scss to tailwind, see chat triabl-voices-project */}
      <header
        className={`header sticky top-0 left-0 w-full z-10 transition-all duration-400  md:bg-white 
        ${scrolled ? "scrolled bg-white  " : ""}`}
      >
        <div className="overlay"></div>

        <div className="container not-hidden">
          <div className="flex align-center justify-between">
            <div className="flex justify-between items-center">
              <Link href="/" className="relative" onClick={onLinkClick}>
                <Image
                  src={
                    isHomePagePath
                      ? "/logo-primary-color.svg"
                      : "/logo-white-color.svg"
                  }
                  width={160}
                  height={87}
                  alt="Logo"
                  priority
                />
              </Link>
            </div>
            {/* desktop */}
            <div className="col flex-1 hidden xl:block">
              <ul className="header__menu relative flex mx-4 align-center justify-end">
                <DesktopNavbarItems />
              </ul>
            </div>

            <div className="flex gap-3 justify-between items-center">
              <Link href="/search" onClick={onLinkClick}>
                <Image
                  src="/icons/search-primary-color.svg"
                  height={24}
                  width={24}
                  alt="search icon"
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
      </header>

      <div
        className={`xl:hidden mobile-header-wrapper ${
          isMobileNavOpen && "is--open"
        }`}
      >
        <MobileNavbar
          isMobileNavOpen={isMobileNavOpen}
          closeMobileNavbar={() => setIsMobileNavOpen(false)}
        />
      </div>
    </div>
  );
}
