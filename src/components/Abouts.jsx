import { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black px-4 md:px-8 py-20">
      <div className="cntnr flex flex-col lg:flex-row text-white w-full max-w-7xl items-center gap-12 lg:gap-16">

        {/* Image Section with Animation */}
        <div className={`limg relative w-full lg:w-1/2 flex justify-center items-center py-8 lg:py-0 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative">
            {/* Animated Glow Background */}
            <div className="absolute -inset-8 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse" />

            {/* Image Border Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-lg" />

            <img
              className="relative w-56 sm:w-72 md:w-[80%] lg:w-[85%] xl:w-[75%] object-contain rounded-2xl border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300"
              src="./imag.png"
              alt="character"
            />
          </div>
        </div>

        {/* Right Text Section with Staggered Animation */}
        <div id="about" className={`rg w-full lg:w-1/2 py-6 lg:py-3 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

          {/* Main Heading */}
          <h1 className="font-[Nunito] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
            <span className="bg-grad-red-blue bg-clip-text text-transparent inline-block">
              Building Fast,
            </span>
            <br />
            <span className="bg-grad-red-blue bg-clip-text text-transparent inline-block">
              Scalable & Modern
            </span>
            <br />
            <span className="bg-grad-red-blue bg-clip-text text-transparent inline-block">
              Web Apps
            </span>
          </h1>

          {/* Divider */}
          <div className="h-1.5 w-100 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-full mb-8" />

          {/* Description Paragraphs */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-[Inter] hover:text-gray-100 transition-colors duration-300">
              Hey! I'm a passionate <span className="font-bold bg-grad-red-blue bg-clip-text text-transparent">Full Stack Developer and AI Expert </span>with a knack for creating dynamic and responsive web applications. My journey in tech has been fueled by a love for problem-solving and a desire to build impactful solutions.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-[Inter] hover:text-gray-100 transition-colors duration-300">
              I have a strong technical background with expertise in <span className="font-semibold text-blue-400">React.js, Node.js, Express, and MongoDB</span>. I thrive in environments that challenge me to continuously learn, and I'm always exploring new ways to improve efficiency and create seamless user experiences.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-[Inter] hover:text-gray-100 transition-colors duration-300">
              My drive extends beyond code—I'm deeply committed to fostering <span className="font-semibold text-purple-400">collaboration and mentorship</span>, ensuring my colleagues feel supported. I prioritize clean, maintainable code and strive for excellence.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-[Inter] hover:text-gray-100 transition-colors duration-300">
              Currently focused on expanding my expertise in <span className="font-semibold text-pink-400">Generative AI, AI Agents, MCP, RAG, and AI Automation</span>.
            </p>
          </div>



          {/* Stats or Skills Footer */}
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">5+</span>
              <span className="text-sm text-gray-400 font-[Inter]">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">30+</span>
              <span className="text-sm text-gray-400 font-[Inter]">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">100%</span>
              <span className="text-sm text-gray-400 font-[Inter]">Dedication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;