/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/utils/date";
import { getImageLink } from "@/utils/globalStore";
import { ResourceSection } from "./ResourceSection";
import LocationIcon from "../icons/LocationIcon";

export default function StoryCard({ story }) {
  return (
    <a
      href={`/stories/${story?.slug}`}
      target="_blank"
      className="story-card block "
    >
      <div className="story-card__img">
        <img
          src={getImageLink(story.main_image[0])}
          alt={`story`}
          width="290"
          height="410"
          style={{ width: "100%", height: "100%" }}
          className="object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <div className="story-card__content">
        <div className="story-card__date">{formatDate(story?.date)}</div>

        <h2 className="story-card__title line-clamp-2">{story?.title}</h2>

        <ResourceSection
          image={'pin.png'}
         showIcon={true}
          // Icon={LocationIcon}
          name={story.location}
        />
      </div>
    </a>
  );
}
