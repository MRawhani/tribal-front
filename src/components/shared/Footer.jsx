import Image from "next/image";
import React from "react";
import LogoIcon from "../icons/LogoIcon";
import { globalData } from "@/utils/data";
import Link from "next/link";

const FooterLinks = () => {
  return globalData.footerLinks.map((link) => (
    <div key={link.title}>
      <Link
        className="py-2 px-3 flex justify-between items-center gap-2 bg-white rounded-3xl"
        href={link.link}
      >
        <span className="text-xs font-gothamBold">{link.title}</span>
        <Image src="/icons/arrow-link.svg" alt="icon" width={12} height={12} />
      </Link>
    </div>
  ));
};

export default function Footer() {
  return (
    <div className="footer ">
      <div className="container pt-16 pb-8">
        <div className="flex items-center flex-col text-white">
          <LogoIcon />
          <p className="font-gothamLight text-xs leading-4 mt-6 text-center">
            Conflict & political Analyst. Community Development Practitioner.
            Yemen. Tribes. Author of “Foe Not Friend: Yemeni Tribes & AQAP”
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-center mt-11 ">
          <FooterLinks />
        </div>

        {/* social media */}
        <div className="flex justify-center gap-3 mt-11">
          {globalData.socialMediaLinks.map((link) => (
            <div key={link.title}>
              <a href={link.link} target="_blank" rel="noreferrer">
                <Image src={link.icon} alt="icon" width={24} height={24} />
              </a>
            </div>
          ))}
        </div>

        {/* copyright */}
        <p className="text-center text-white text-xs mt-6 font-gothamLight">© All rights reserved Nadwa Dawsar</p>
      </div>
    </div>
  );
}
