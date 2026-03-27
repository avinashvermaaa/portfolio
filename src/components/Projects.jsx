import { projectsList } from "../configs/projectConfig";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = (project) => {
  const { title, description, link, hover, index, logos } = project;
  return (
    <div
      className="panel sticky top-0 w-full h-screen flex items-center justify-center px-4 sm:px-6"
      style={{ zIndex: 100 + index }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="card relative group w-full h-auto sm:h-[550px] md:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden border border-red-700 hover:border-red-500/50 p-6 sm:p-8 md:p-12 cursor-pointer transition-all duration-500">

          {/* Gradient BG */}
          <div
            className={`absolute inset-0 ${hover} opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
          />

          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Top Section */}
            <div>
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-4">

                <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-[Helvetica_Now_Display] bg-grad-red-blue bg-clip-text text-transparent max-w-[70%] group-hover:scale-110 transition-transform duration-300 origin-left">
                  {title}
                </h3>
                <span className="text-black text-lg sm:text-2xl md:text-3xl font-mono font-bold bg-grad-red-blue bg-gray-800/50 px-3 sm:px-4 py-1 sm:py-2 rounded-lg whitespace-nowrap flex-shrink-0">
                  {index + 1}
                </span>
              </div>

              <div className="h-1 sm:h-1.5 w-16 sm:w-32 bg-gradient-to-r from-red-500 to-blue-500 rounded-full" />
            </div>

            {/* Middle Section Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-[90%] my-4 sm:my-0">
              {description}
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between gap-4">
              {/* Bottom Left Icons */}
              <div className="flex gap-2 sm:gap-3">
                {logos?.map((logo, i) => (
                  <img key={i} src={logo} alt={`Logo ${i + 1}`} className="w-10 sm:w-14 h-10 sm:h-14 object-contain border border-white/60 p-1 rounded-full" />
                ))}
              </div>

              {/* Bottom Right Live Link */}
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm md:text-base text-gray-400">Live</span>
                <div className="p-2 sm:p-4 bg-red-500/10 rounded-full border border-red-500/30">
                  <ExternalLink className="w-4 h-4 sm:w-6 sm:h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </a>
    </div>
  );
};

function Projects() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      id="projects"
      className="w-full bg-black text-white"
    >
      {/* Header */}
      <div className="relative w-full py-12 sm:py-16 md:py-20 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center font-bold">
          <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            Featured
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="font-[Inter] relative">
        {projectsList.map((project, index) => (
          <div
            key={index}
            style={{
              marginTop: index === 0 ? 0 : "-5vh",
            }}
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;