import Image from "next/image";

export default function StoryCard({ story }) {
  return (
    <a href={`/stores/${story?.id}`}
    target="_blank"
    className="story-card block">
      <div className="story-card__img">
        <Image
          src={`/assets/${story.img}.png`}
          alt={`story`}
          width="0"
          height="0"
          sizes="100vw"
          objectFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="story-card__content">
        <div className="story-card__date">{story.date}</div>

        <h2 className="story-card__title line-clamp-2">{story.title}</h2>

        <div className="story-card__recource flex items-center">
          <div className="story-card__recource-icon">
            <Image
              src={`/assets/${story.recource_icon}.svg`}
              alt={`story`}
              width={32}
              height={32}
            />
          </div>
          <h6 className="story-card__recource-name line-clamp-1">
            {story.recource_name}
          </h6>
        </div>
      </div>
    </a>
  );
}
