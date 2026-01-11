"use client";

import { GalleryTemplate, GalleryTemplateProps } from "../components/GalleryTemplate";
import { HeroProps, HeroTemplate } from "../components/HeroTemplate";

// THIS IS THE EDITABLE PART - edit heroProps and galleryTemplateProps to change content


// FIRST - the project title and the three summary sections with their titles and descriptions
const heroProps: HeroProps = {
  projectTitle: "ai light painting",
  partOneTitle: "initial concept",
  partOneDescription:
    "The initial concept for the AI light painting project was inspired by the interplay of light and color in nature. The goal was to create an AI system that could generate stunning light paintings in real-time, responding to music and user input. ",
  partTwoTitle: "process",
  partTwoDescription:
    "Advanced sensors and actuators were integrated to provide real-time feedback and control, allowing the system to adapt to different environments and user interactions. Machine learning algorithms were employed to refine the painting techniques and improve overall performance.",
  partThreeTitle: "results",
  partThreeDescription:
    "The final AI light painting system demonstrated impressive capabilities, generating stunning visuals that responded to music and user input in real-time. The project showcased the potential of combining artificial intelligence with creative expression, paving the way for future advancements in interactive art and design. ",
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

export default function HumanoidLegs() {
  return (
    <div className="text-center">
      <div className="flex flex-col relative items-center mb-20 mt-40 min-h-screen">
        <HeroTemplate {...heroProps} />
        <GalleryTemplate {...galleryTemplateProps} />
      </div>
    </div>
  );
};