/* eslint-disable @next/next/no-img-element */
import { getImageLink } from "@/utils/globalStore";

export function ResourceSection({
    image,
    name,
    className = ''
}) {
  return (
    <div className={"c-resource-section flex items-center " + className}>
      <div className="c-resource-section__icon">
        {image && (
          <img
            src={getImageLink(image)}
            alt={`article`}
            crossOrigin="anonymous"
          />
        )}
      </div>
      <h6 className="c-resource-section__name line-clamp-1">
        {name}
      </h6>
    </div>
  );
}
