import { CSSProperties } from "react";

interface MarqueeProps {
  images: string[];
  reverse?: boolean;
  duration?: number; // seconds
  itemClassName?: string;
}

export const Marquee = ({
  images,
  reverse = false,
  duration = 60,
  itemClassName = "h-56 sm:h-64 md:h-72 aspect-[4/5]",
}: MarqueeProps) => {
  const style = { "--marquee-duration": `${duration}s` } as CSSProperties;

  const renderTrack = (key: string) => (
    <div className="marquee-track" key={key} aria-hidden={key === "b"}>
      {images.map((src, i) => (
        <img
          key={`${key}-${i}`}
          src={src}
          alt=""
          loading="lazy"
          className={`${itemClassName} w-auto object-cover rounded-xl shadow-glow shrink-0`}
        />
      ))}
    </div>
  );

  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""}`} style={style}>
      {renderTrack("a")}
      {renderTrack("b")}
    </div>
  );
};
