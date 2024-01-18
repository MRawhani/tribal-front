import { getImageLink } from "@/utils/globalStore";
import Image from "next/image";

export default function InterviewCard({ interview, className }) {
  return (
    <a href={interview?.external_link} target="_blank">
      <div className={"interview-card " + className}>
        <div className="interview-card__img">
          <img
            src={getImageLink(interview.photos[0])}
            alt={`interview`}
            width={300}
            height={362}
            crossOrigin="anonymous"
          />

          <div className="img-icon">
            {interview.type !== "Audio" ? (
              <Image
                src={`/icons/play.svg`}
                alt={`play button`}
                width={40}
                height={40}
              />
            ) : (
              <Image
                src={`/icons/head.svg`}
                alt={`play button`}
                width={40}
                height={40}
              />
            )}
          </div>
        </div>
        <div className="interview-card__content">
          <h3 className="interview-card__second-title"> {interview.person}</h3>
          <h2 className="interview-card__title line-clamp-2">
            {interview.title}
          </h2>
        </div>
      </div>
    </a>
  );
}
