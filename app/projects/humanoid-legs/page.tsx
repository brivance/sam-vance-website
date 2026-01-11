"use client";

import { GalleryTemplate, GalleryTemplateProps } from "../components/GalleryTemplate";
import { HeroProps, HeroTemplate } from "../components/HeroTemplate";

// THIS IS THE EDITABLE PART - edit heroProps and galleryTemplateProps to change content

const heroProps: HeroProps = {
  projectTitle: "humanoid legs",
  partOneTitle: "initial concept",
  partOneDescription:
    "Inspired by the fluidity and grace of human movement. The design process began with sketches and 3D models, exploring different joint configurations and materials to achieve the desired range of motion and stability.",
  partTwoTitle: "process",
  partTwoDescription:
    "The development process involved extensive testing and iteration. Various prototypes were built using lightweight materials such as carbon fiber and aluminum to ensure durability without compromising agility.",
  partThreeTitle: "results",
  partThreeDescription:
    "The final humanoid legs demonstrated impressive capabilities, achieving smooth and natural movements across various activities. The legs were able to walk, run, and jump with a high degree of stability and responsiveness.",
}

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
}