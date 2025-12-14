"use client";

import Gallery from "../components/Gallery";
import { ProcessBox } from "../components/ProcessBox";

export const Body = () => {

  return (
    <div className="flex flex-col gap-30 mt-40">
      <Gallery items={[
        <ProcessBox
          media={{ type: "video", src: "/projects/humanoid-legs/IMG_0504.mp4" }}
          title="Initial Concept"
          description="Here is a small description of how the initial concept was developed."
        />,
        <ProcessBox
          media={{ type: "video", src: "/projects/humanoid-legs/SAC_skipping_1.mp4" }}
          title="Process"
          description="Here is a small description of the process that was conducted for this project."
        />,
        <ProcessBox
          media={{ type: "video", src: "/projects/humanoid-legs/IMG_0640.mp4" }}
          title="Results"
          description="Here is a small description of the results that were achieved for this project."
        />
      ]} />
      <Gallery items={[
        <ProcessBox
          media={{ type: "image", src: "/projects/humanoid-legs/concept.jpg", alt: "Initial Concept" }}
          title="Initial Concept"
          description="Here is a small description of how the initial concept was developed."
        />,
        <ProcessBox
          media={{ type: "image", src: "/projects/humanoid-legs/process.jpg", alt: "Process" }}
          title="Process"
          description="Here is a small description of the process that was conducted for this project."
        />,
        <ProcessBox
          media={{ type: "image", src: "/projects/humanoid-legs/results.jpg", alt: "Results" }}
          title="Results"
          description="Here is a small description of the results that were achieved for this project."
        />,
      ]} />
      <Gallery items={[
        <ProcessBox
          media={{ type: "image", src: "/projects/humanoid-legs/concept.jpg", alt: "Initial Concept" }}
          title="Initial Concept"
          description="Here is a small description of how the initial concept was developed."
        />,
        <ProcessBox
          media={{ type: "image", src: "/projects/humanoid-legs/process.jpg", alt: "Process" }}
          title="Process"
          description="Here is a small description of the process that was conducted for this project."
        />,
        <ProcessBox
          media={{ type: "image", src: "/projects/humanoid-legs/results.jpg", alt: "Results" }}
          title="Results"
          description="Here is a small description of the results that were achieved for this project."
        />,
        <ProcessBox
          media={{ type: "image", src: "/projects/humanoid-legs/concept.jpg", alt: "Initial Concept" }}
          title="Initial Concept"
          description="Here is a small description of how the initial concept was developed."
        />,
      ]} />
    </div>
  );
}