import Image from "next/image";
import React from "react";
import LogoIcon from "../icons/LogoIcon";
import Link from "next/link";
import LogoAnimatedIcon from "../animated-icons/LogoAnimatedIcon";
import { fetchClientData, getConfigValue } from "@/utils/globalStore";

const FooterLinks = () => {
  const footerLinks= [
    {title: 'Reports', link: '/reports'},
    {title: 'Book chapters', link: '/book-chapters'},
    {title: 'Interviews', link: '/interviews'},
    {title: 'Stories', link: '/stories'},
    {title: 'Contact me', link: '/contact-me'},
    // {title: 'About me', link: '/about'},
]

  

  return footerLinks.map((link) => (
    <div key={link.title}>
      <Link
        className="py-2 px-3 flex justify-between items-center gap-2 bg-white rounded-3xl transition-all hover:bg-secondary_secondary duration-300"
        href={link.link}
      >
        <span className="text-xs font-gothamBold">{link.title}</span>
        <Image src="/icons/arrow-link.svg" alt="icon" width={12} height={12} />
      </Link>
    </div>
  ));
};
const SocialMediaLinks = ({configData}) => {
  const socialMediaLinks= [
    // {title: 'Whatsapp',icon: '/icons/whatsapp.svg', link: getConfigValue(configData, 'whatsapp')?.value ? `https://wa.me/${getConfigValue(configData, 'whatsapp')?.value}`: '#'},
  { title: 'LinkedIn',icon: '/icons/linkedin.svg', link: getConfigValue(configData, 'linkedin')?.value ||'#' },
  { title: 'Twitter',icon: '/icons/twitter.svg', link: getConfigValue(configData, 'twitter')?.value ||'#'},
  // {title: 'Facebook',icon: '/icons/facebook.svg', link:getConfigValue(configData, 'facebook')?.value|| '#'},
  // {title: 'Insta',icon: '/icons/insta.svg', link:getConfigValue(configData, 'instagram')?.value|| '#'},
]

  return socialMediaLinks.map((link) => (
    <div key={link.title}>
      <a
        href={link.link}
        target="_blank"
        rel="noreferrer"
        className="w-8 h-8 flex justify-center items-center rounded transition-all hover:bg-secondary_secondary duration-300"
      >
        <Image src={link.icon} alt="icon" width={24} height={24} />
      </a>
    </div>
  ))
};
export default async function Footer() {
  const data = await fetchClientData();

  const configData = data?.portfolioData?.configData;
  const footer_caption = getConfigValue(configData, 'footer_caption')?.value || "Conflict & political Analyst. Community Development Practitioner."
  const footer_caption2 = getConfigValue(configData, 'footer_caption2')?.value || "Author of “Foe Not Friend: Yemeni Tribes & AQAP”."
  const footer_sign = getConfigValue(configData, 'footer_sign')?.value || "All rights reserved Nadwa Dawsari"
  
  return (
    <div className="footer mt-8 md:mt-16 ">
      <div className="container pt-16 pb-8">
        <div className="flex items-center flex-col text-white">
          <LogoIcon />
          <p className="font-gothamLight text-xs leading-4 mt-6 text-center">
            {footer_caption}
            <br />
            {footer_caption2}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-11 max-w-2xl mx-auto ">
          <FooterLinks configData={configData}/>
        </div>

        {/* social media */}
        <div className="flex justify-center gap-2 mt-11">
          <SocialMediaLinks configData={configData}/>
          
        </div>

        {/* copyright */}
        <p className="text-center text-white text-xs mt-6 font-gothamLight">
          © {footer_sign}
        </p>
      </div>

      <div className="logo-pattern">
        <div className="logo-pattern--left">
          <LogoAnimatedIcon left={true} />
        </div>

        <div className="logo-pattern--right">
          <LogoAnimatedIcon />
        </div>
      </div>
    </div>
  );
}
