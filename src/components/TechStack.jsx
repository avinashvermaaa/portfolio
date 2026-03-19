import LogoMarquee from "./LogoMarquee";
import { TECH_STACKS } from "../configs/techStackConfig";

const TechStack = () => {
  return (
    <section id="techstack" className="techstack-section">
      {/* Banner */}
      <div className="mt-8 mb-8">
        <h2 className="text-6xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          My Tech Stacks
        </h2>
      </div>

      {/* Dynamically rendering each tech stack */}
      {TECH_STACKS.map((stack) => (
        <div
          key={stack.id}
          id={`moving-container-${stack.id}`}
          className="marquee-container"
        >
          {/* ── Section label ── */}
          <div className="marquee-label-row">
            <span className="marquee-label-line" />
            <span className="marquee-label">{stack.title}</span>
            <span className="marquee-label-line" />
          </div>

          <LogoMarquee
            items={stack.items}
            imagePath={stack.imagePath}
            direction={stack.direction}
          />
        </div>
      ))}
    </section>
  );
};

export default TechStack;
