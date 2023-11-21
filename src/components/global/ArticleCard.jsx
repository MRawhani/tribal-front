import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article, className }) {
  return (
    <Link 
    
    target="_blank"
    
    href={article?.link ?? "https://google.com"}>
      <div className={"article-card " + className}>
        <div
          className="article-card__img"
          style={{ "--card-bg-src": `url(/assets/${article.img}.png)` }}
        >
          <Image
            src={`/assets/${article.img}.png`}
            alt={`article`}
            width="0"
            height="0"
            sizes="100vw"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
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
                <Image
                  src={`/assets/${article.recource_icon}.svg`}
                  alt={`article`}
                  fill
                />
              </div>
              <h6 className="article-card__recource-name line-clamp-1">
                {article.recource_name}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
