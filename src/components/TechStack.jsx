import LogoMarquee from "./LogoMarquee";
import { TECH_STACKS } from "../configs/techStackConfig";

const TechStack = () => {
  return (
    <section id="techstack" className="techstack-section">
      {/* Banner */}
      <div className="mt-8 mb-8">
        <div className="my-8 text-center text-6xl font-bold">
          <span className="bg-grad-red bg-clip-text text-transparent inline-block">
            My Tech
          </span>{" "}
          <span className="bg-grad-blue bg-clip-text text-transparent inline-block">
            Stacks
          </span>
        </div>
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
