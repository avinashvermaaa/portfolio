import { lazy } from "react";
import { LazySection } from "./LazySection";
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

      <LazySection component={Hero} />
      <LazySection component={About} />
      <LazySection component={TechStack} />
      <LazySection component={Projects} />
      <LazySection component={Footer} />
    </>
  );
}

export default App;