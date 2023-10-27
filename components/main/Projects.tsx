import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Explore Our Features
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/images/features/Feature1Image.png"
          title="Immersive Cyberpunk World"
          description="Step into a breathtaking cyberpunk-inspired virtual world that will redefine how you connect and interact with others."
        />
        <ProjectCard
          src="/images/features/Feature3Image.png"
          title="Real-time Messaging"
          description="Stay in touch with friends and the cyberpunk community through our secure real-time messaging system."
        />
        <ProjectCard
          src="/images/features/Feature2Image.png"
          title="Customizable Avatars"
          description="Express your unique identity with fully customizable cyber-enhanced avatars that reflect your style."
        />
      </div>
    </div>
  );
};

export default Projects;
