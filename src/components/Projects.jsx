import '@fortawesome/fontawesome-free/css/all.min.css';
import { projectsList } from '../configs/projectConfig';
const ProjectCard = ({ title, description, link, hover }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">

        <div className={`absolute inset-0 ${hover} scale-0 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-150 z-0`} />

        <div className="relative z-10">
          <h3 className="text-2xl font-bold font-[Helvetica_Now_Display] mb-2 text-2xl  mb-6 bg-grad-red-blue bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
            {description}
          </p>

          <div className="mt-4 flex justify-end">
            <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
          </div>
        </div>

      </div>
    </a>
  );
};


function Projects() {

  return (
    <div id="projects" className="w-full min-h-screen bg-[black] text-white px-10 py-20">
      {/* <h2 className="text-6xl text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">My Projects</h2> */}
      <h2 className="text-6xl text-center mb-16">
        <span className="bg-grad-red bg-clip-text text-transparent inline-block">
          Featured
        </span>{" "}
        <span className="bg-grad-blue bg-clip-text text-transparent inline-block">
          Projects
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projectsList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            hover={project.hover}
          />
        ))}

      </div>
    </div>
  );
}

export default Projects;