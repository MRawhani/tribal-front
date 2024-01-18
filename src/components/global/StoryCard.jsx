/* eslint-disable @next/next/no-img-element */
import { getImageLink } from "@/utils/globalStore";

export default function StoryCard({ story }) {
  return (
    <a href={`/stories/${story?.slug}`} target="_blank" className="story-card block">
      <div className="story-card__img">
        <img
          src={getImageLink(story.main_image[0])}
          alt={`story`}
          width="0"
          height="0"
          style={{ width: "100%", height: "100%" }}
          className="object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <div className="story-card__content">
        <div className="story-card__date">{story?.date}</div>

        <h2 className="story-card__title line-clamp-2">{story?.title}</h2>

        <div className="story-card__recource flex items-center">
          <div className="story-card__recource-icon">
            <img
              src={getImageLink(story.platform.photos[0])}
              alt={`story`}
              width={32}
              height={32}
              crossOrigin="anonymous"
            />
          </div>
          <h6 className="story-card__recource-name line-clamp-1">
            {story.platform.name}
          </h6>
        </div>
      </div>
    </a>
  );
}
