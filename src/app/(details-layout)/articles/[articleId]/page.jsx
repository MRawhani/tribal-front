"use client";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { articleDetails } from "@/utils/fk-data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ShareToSocialMedia = () => {
  const [currentPageLink, setCurrentPageLink] = useState("");
  const pathName = usePathname();

  useEffect(() => setCurrentPageLink(window.location.href), [pathName]);

  return (
    <section className="text-center mt-32">
      <h2 className="text-neutral-900 font-gothamLight text-base mb-2">
        Share this page
      </h2>

      <div className="flex justify-center gap-2">
        {[
          {
            title: "Facebook",
            icon: "facebook.svg",
            link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentPageLink
            )}`,
          },
          {
            title: "Twitter",
            icon: "x.svg",
            link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentPageLink
            )}`,
          },
          {
            title: "LinkedIn",
            icon: "linkedin.svg",
            link: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
              currentPageLink
            )}`,
          },
          {
            title: "Telegram",
            icon: "telegram.svg",
            link: `https://t.me/share/url?url=${encodeURIComponent(
              currentPageLink
            )}`,
          },
          {
            title: "WhatsApp",
            icon: "whatsapp.svg",
            link: `https://api.whatsapp.com/send?text=${encodeURIComponent(
              currentPageLink
            )}`,
          },
        ].map((item) => {
          return (
            <a
              key={item.title}
              href={item.link}
              className="block p-2 rounded-md bg-seconday_50 hover:bg-seconday_100"
              target="_blank"
            >
              <Image
                src={`/icons/social/${item.icon}`}
                width={26}
                height={26}
                alt={item.title}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default function ArticleDetails() {
  return (
    <div className="page-article-details">
      <div
        className="hero-section"
        style={{ "--hero-bg-src": `url(${articleDetails.image}` }}
      ></div>

      <div className="container -mt-20">
        <Breadcrumb
          links={[
            { title: "articles", href: "/articles" },
            {
              title: articleDetails.title,
              href: `/articles/${3}`,
            },
          ]}
          title="articles"
          subTitle={articleDetails.title}
          date={articleDetails.date}
        />
      </div>

      <section className="content container mt-5 md:mt-11">
        {/* content */}
        <div
          className="font-gothamLight text-lg"
          dangerouslySetInnerHTML={{ __html: articleDetails.content }}
        />
      </section>

      {/* share this page */}
      <ShareToSocialMedia />
    </div>
  );
}
