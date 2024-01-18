import { getImageLink } from "@/utils/globalStore";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article, className }) {
  return (
    <Link target="_blank" href={article?.external_link}>
      <div className={"article-card " + className}>
        <div
          className="article-card__img"
          style={{ "--card-bg-src": `url(/assets/${article.img}.png)` }}
        >
          <img
            src={getImageLink(article.photos[0])}
            alt={`article`}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
            crossOrigin="anonymous"
          />
        </div>
        <div className="article-card__content flex">
          <div className="flex flex-col justify-between">
            <div>
              <span className="article-card__date">{article.date}</span>

              <h2 className="article-card__title line-clamp-2">
                {article.title}
              </h2>
            </div>
            <div className="article-card__recource flex items-center">
              <div className="article-card__recource-icon">
                {article.platform.photos.length && (
                  <img
                    src={getImageLink(article.platform.photos[0])}
                    alt={`article`}
                    fill
                    crossOrigin="anonymous"
                  />
                )}
              </div>
              <h6 className="article-card__recource-name line-clamp-1">
                {article.platform.name}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
