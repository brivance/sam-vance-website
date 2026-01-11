import Image from "next/image";
import { ReactNode } from "react";

type MediaImage = {
  type: "image";
  src: string;
  alt: string;
};

type MediaVideo = {
  type: "video";
  src: string;
};

export type Media = MediaImage | MediaVideo;

export const ProcessBox = ({
  media,
  title,
  description,
}: {
  media: Media;
  title: string;
  description: ReactNode;
}) => {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:max-w-6xl h-full w-full md:min-w-4xl overflow-visible">

      {/* MEDIA CONTAINER */}
      <div className="flex items-center justify-center h-full bg-black rounded-sm shrink-0">
        {media.type === "image" ? (
          <Image
            src={media.src}
            alt={media.alt}
            width={800}    // dummy, required by Next (ignored because of class)
            height={800}
            className="max-h-full w-auto object-contain rounded-sm"
          />
        ) : (
          <video
            src={media.src}
            className="max-h-full w-auto object-contain rounded-sm"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>

      {/* TEXT BOX */}
      <div className="flex-1 flex flex-col gap-1 items-start text-start bg-zinc-800 rounded-sm p-1 md:p-5 overflow-visible">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>

    </div>
  );
};

