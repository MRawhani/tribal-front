import Image from "next/image";

export default function ArticleCard({ article, className }) {
  return (
    <div className={"article-card " + className}>
      <div className="article-card__img">
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
      <div className="article-card__content">
        <p className="article-card__date">{article.date}</p>

        <h2 className="article-card__title line-clamp-2">{article.title}</h2>

        <div className="article-card__recource flex items-center">
          <div className="article-card__recource-icon">
            <Image
              src={`/assets/${article.recource_icon}.svg`}
              alt={`article`}
              fill
            />
          </div>
          <h6 className="article-card__recource-name mt-3 line-clamp-1">
            {article.recource_name}
          </h6>
        </div>
      </div>
    </div>
  );
}
