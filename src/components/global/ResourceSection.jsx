/* eslint-disable @next/next/no-img-element */
import { getImageLink } from "@/utils/globalStore";
import Image from "next/image";

export function ResourceSection({
    image,
    name,
    showIcon,
    Icon,
    className = ''
}) {
  return (
    <div className={"c-resource-section flex items-center " + className}>
      
      <div className={`c-resource-section__icon flex items-center justify-center ${showIcon? 'icon-shown' : ''}`}>
        {
          showIcon ? (
            <Image
            src={`/icons/${image}`}
            width={24}
            height={24}
            alt={''}
          />
          )
       
       : image && (
          <img
            src={getImageLink(image)}
            alt={`article`}
            crossOrigin="anonymous"
          />
        ) }
      </div>
      <h6 className="c-resource-section__name line-clamp-1">
        {name}
      </h6>
    </div>
  );
}
