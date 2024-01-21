import { getImageLink } from "@/utils/globalStore";
import Image from "next/image";

function InterviewTypeIcon({ type }) {
  if (type === "Audio") {
    return (
      <Image
        src={`/icons/head.svg`}
        alt={`play button`}
        width={40}
        height={40}
      />
    );
  }

  if (type === "Video") {
    return (
      <Image
        src={`/icons/play.svg`}
        alt={`play button`}
        width={40}
        height={40}
      />
    );
  }

  return (
    <Image src={`/icons/text.svg`} alt={`text button`} width={55} height={55} />
  );
}

export default function InterviewCard({ interview, className }) {
  return (
    <a href={interview?.external_link} target="_blank">
      <div className={"interview-card " + className}>
        <div className="interview-card__img">
          <Image
            src={getImageLink(interview.photos[0])}
            alt={`interview`}
            fill="layout"
            crossOrigin="anonymous"
          />

          <div className="img-icon">
            <InterviewTypeIcon type={interview.type} />
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
