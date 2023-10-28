import Image from "next/image";

export default function InterviewCard({ interview, className }) {
  return (
    <div className={"interview-card " + className}>
      <div className="interview-card__img">
        <Image
          src={`/assets/${interview.img}.jpeg`}
          alt={`interview`}
          width={300}
          height={362}
        />

        <div className="img-icon">
          <Image
            src={`/icons/play.svg`}
            alt={`play button`}
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="interview-card__content">
        <h3 className="interview-card__second-title"> Nadwa Al-Dawsari</h3>
        <h2 className="interview-card__title line-clamp-2">
          {interview.title}
        </h2>
      </div>
    </div>
  );
}
