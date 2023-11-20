"use client";
import Link from "next/link";
import { Fragment } from "react";

const BreadcrumbLinks = ({ links }) => {
  const onLinkClick = () => {
    const event = new CustomEvent("router-link", { bubbles: true });

    window.dispatchEvent(event);
  };

  return (
    <div className="flex gap-2 items-center">
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6667 6.88713L11.6667 2.5038C11.2084 2.09384 10.615 1.86719 10.0001 1.86719C9.38513 1.86719 8.79176 2.09384 8.33341 2.5038L3.33341 6.88713C3.06872 7.12386 2.8575 7.41426 2.71381 7.739C2.57012 8.06374 2.49726 8.41537 2.50008 8.77046V16.0538C2.50008 16.7168 2.76347 17.3527 3.23231 17.8216C3.70115 18.2904 4.33704 18.5538 5.00008 18.5538H15.0001C15.6631 18.5538 16.299 18.2904 16.7678 17.8216C17.2367 17.3527 17.5001 16.7168 17.5001 16.0538V8.76213C17.5017 8.40843 17.4283 8.05841 17.2846 7.7352C17.141 7.41198 16.9304 7.12293 16.6667 6.88713ZM11.6667 16.8871H8.33341V12.7205C8.33341 12.4994 8.42121 12.2875 8.57749 12.1312C8.73377 11.9749 8.94573 11.8871 9.16675 11.8871H10.8334C11.0544 11.8871 11.2664 11.9749 11.4227 12.1312C11.5789 12.2875 11.6667 12.4994 11.6667 12.7205V16.8871ZM15.8334 16.0538C15.8334 16.2748 15.7456 16.4868 15.5893 16.6431C15.4331 16.7993 15.2211 16.8871 15.0001 16.8871H13.3334V12.7205C13.3334 12.0574 13.07 11.4215 12.6012 10.9527C12.1323 10.4839 11.4965 10.2205 10.8334 10.2205H9.16675C8.5037 10.2205 7.86782 10.4839 7.39898 10.9527C6.93014 11.4215 6.66675 12.0574 6.66675 12.7205V16.8871H5.00008C4.77907 16.8871 4.5671 16.7993 4.41082 16.6431C4.25454 16.4868 4.16675 16.2748 4.16675 16.0538V8.76213C4.1669 8.64381 4.19224 8.52688 4.24109 8.41911C4.28995 8.31135 4.36119 8.21522 4.45008 8.13713L9.45008 3.76213C9.60215 3.62853 9.79766 3.55485 10.0001 3.55485C10.2025 3.55485 10.398 3.62853 10.5501 3.76213L15.5501 8.13713C15.639 8.21522 15.7102 8.31135 15.7591 8.41911C15.8079 8.52688 15.8333 8.64381 15.8334 8.76213V16.0538Z"
          fill="#BC9665"
        />
      </svg>

      {links.map((link, index) => (
        <Fragment key={link.title}>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.88712 7.74652L7.06045 4.91986C6.99847 4.85737 6.92474 4.80777 6.8435 4.77393C6.76226 4.74008 6.67512 4.72266 6.58712 4.72266C6.49911 4.72266 6.41197 4.74008 6.33073 4.77393C6.24949 4.80777 6.17576 4.85737 6.11378 4.91986C5.98962 5.04476 5.91992 5.21373 5.91992 5.38986C5.91992 5.56598 5.98962 5.73495 6.11378 5.85986L8.47378 8.21986L6.11378 10.5799C5.98962 10.7048 5.91992 10.8737 5.91992 11.0499C5.91992 11.226 5.98962 11.3949 6.11378 11.5199C6.17608 11.5816 6.24995 11.6305 6.33118 11.6637C6.4124 11.6969 6.49938 11.7137 6.58712 11.7132C6.67485 11.7137 6.76183 11.6969 6.84305 11.6637C6.92428 11.6305 6.99816 11.5816 7.06045 11.5199L9.88712 8.69319C9.9496 8.63121 9.9992 8.55748 10.033 8.47624C10.0669 8.395 10.0843 8.30786 10.0843 8.21986C10.0843 8.13185 10.0669 8.04471 10.033 7.96347C9.9992 7.88223 9.9496 7.8085 9.88712 7.74652Z"
              fill="#4C4763"
            />
          </svg>

          <Link
            href={link?.href ?? "#"}
            className="text-xs font-gothamLight capitalize line-clamp-1"
            onClick={onLinkClick}
          >
            {link.title}
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export function Breadcrumb({
  links,
  title,
  description = "",
  subTitle = "",
  date = "",
}) {
  return (
    <div className="breadcrumb-wrapper relative mt-3 rounded-2xl">
      <div className="px-3 py-4 md:px-6 md:py-6  breadcrumb bg-seconday_50 rounded-xl shadow">
        <div className="container !px-0">
          <BreadcrumbLinks links={links} />

          <h2 className="mt-4 flex items-center gap-4 text-xl font-ncs text-secondary_secondary">
            <span className="capitalize text-lg md:text-xl">{title}</span>
            <span className="bg-secondary_secondary h-px w-[7rem] flex-shrink-0"></span>
          </h2>

          {subTitle && (
            <h4 className="mt-3 font-gothamMedium text-lg md:text-2xl text-neutral-950">
              {subTitle}
            </h4>
          )}

          {date && (
            <h6 className="mt-3 text-sm font-gothamLight text-neutral-800">
              {date}
            </h6>
          )}

          {description && (
            <p className="mt-2 text-xs md:text-sm text-neutral-900 font-gothamLight">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
