import { lazy } from "react";
import LazySection from "./LazySection";
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Pointer } from "@/components/ui/pointer"
const Hero = lazy(() => import("./components/Heros"));
const About = lazy(() => import("./components/Abouts"));
const TechStack = lazy(() => import("./components/TechStack"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <ScrollProgress />
      <Pointer className="fill-blue-500" />

      <LazySection height="100vh">
        <Hero />
      </LazySection>

      <LazySection height="100vh">
        <About />
      </LazySection>

      <LazySection height="100vh">
        <TechStack />
      </LazySection>

      <LazySection height="100vh">
        <Projects />
      </LazySection>

      <LazySection>
        <Footer />
      </LazySection>
    </>
  );
}

export default App;