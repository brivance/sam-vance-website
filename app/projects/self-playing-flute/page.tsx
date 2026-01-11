"use client";

import { GalleryTemplate, GalleryTemplateProps } from "../components/GalleryTemplate";
import { HeroProps, HeroTemplate } from "../components/HeroTemplate";

const heroProps: HeroProps = {
  projectTitle: "self-playing flute",
  partOneTitle: "initial concept",
  partOneDescription:
    "The initial concept for the self-playing flute project was inspired by the desire to create a musical instrument that could play itself, using AI to interpret and perform music in real-time.",
  partTwoTitle: "process",
  partTwoDescription:
    "Advanced sensors and actuators were integrated to provide real-time feedback and control, allowing the system to adapt to different environments and user interactions. Machine learning algorithms were employed to refine the performance and improve overall sound quality.",
  partThreeTitle: "results",
  partThreeDescription:
    "The final self-playing flute system demonstrated impressive capabilities, interpreting and performing music in real-time. The project showcased the potential of combining artificial intelligence with musical expression, paving the way for future advancements in interactive music and design.",
}

// SECOND - the gallery sections with their titles, media, and descriptions
const galleryTemplateProps: GalleryTemplateProps = {
  partOneProps: {
    title: "initial concept",
    cards: [
      {
        media: { type: "video", src: "/projects/humanoid-legs/IMG_0504.mp4" },
        title: "Initial Concept",
        description: "Here is a small description of how the initial concept was developed."
      },
      {
        media: { type: "video", src: "/projects/humanoid-legs/SAC_skipping_1.mp4" },
        title: "Initial Concept",
        description: "Here is a small description of the process that was conducted for this project."
      },
      {
        media: { type: "video", src: "/projects/humanoid-legs/IMG_0640.mp4" },
        title: "Initial Concept",
        description: "Here is a small description of the results that were achieved for this project."
      },
    ]
  },
  partTwoProps: {
    title: "process",
    cards: [
      {
        media: { type: "image", src: "/projects/humanoid-legs/concept.jpg", alt: "Initial Concept" },
        title: "Process",
        description: "Here is a small description of how the initial concept was developed."
      },
      {
        media: { type: "image", src: "/projects/humanoid-legs/process.jpg", alt: "Process" },
        title: "Process",
        description: "Here is a small description of the process that was conducted for this project."
      },
      {
        media: { type: "image", src: "/projects/humanoid-legs/results.jpg", alt: "Results" },
        title: "Process",
        description: "Here is a small description of the results that were achieved for this project."
      },
    ]
  },
  partThreeProps: {
    title: "results",
    cards: [
      {
        media: { type: "image", src: "/projects/humanoid-legs/concept.jpg", alt: "Initial Concept" },
        title: "Results",
        description: "Here is a small description of how the initial concept was developed."
      },
      {
        media: { type: "image", src: "/projects/humanoid-legs/process.jpg", alt: "Process" },
        title: "Results",
        description: "Here is a small description of the process that was conducted for this project."
      },
      {
        media: { type: "image", src: "/projects/humanoid-legs/results.jpg", alt: "Results" },
        title: "Results",
        description: "Here is a small description of the results that were achieved for this project."
      },
    ]
  }
};

export default function SelfPlayingFlute() {
  return (
    <div className="text-center">
      <div className="flex flex-col relative items-center mb-20 mt-40 min-h-screen">
        <HeroTemplate {...heroProps} />
        <GalleryTemplate {...galleryTemplateProps} />
      </div>
    </div>
  );
}