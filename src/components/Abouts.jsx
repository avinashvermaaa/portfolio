function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black px-6">
      <div className="cntnr flex flex-col md:flex-row text-white w-full h-[80%] items-center">

        {/* Image */}
        <div className="limg relative w-full md:w-1/2 flex justify-center items-center py-8 md:py-0">
          <img
            className="w-56 sm:w-72 md:w-[80%] lg:w-[70%] xl:w-[60%] object-contain"
            src="./imag.png"
            alt="character"
          />
        </div>

        {/* Right Text */}
        <div id="about" className="rg w-full md:w-[45%] py-6 md:py-3">

          {/* <h1 className="font-[Nunito] text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Building Fast, Scalable, and Modern Web Apps
          </h1> */}

          <h1 className="font-[Nunito] text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="bg-grad-red bg-clip-text text-transparent inline-block">
              Building Fast, Scalable, and
            </span>{" "}
            <span className="bg-grad-blue bg-clip-text text-transparent inline-block">
              Modern Web Apps
            </span>
          </h1>

          <h1 className="font-[Inter] text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg font-[Inter]">
            Hi, I'm Avinash Verma, a passionate Full Stack Developer and an AI expert with a knack
            for creating dynamic and responsive web applications. My journey in tech has been fueled
            by a love for problem-solving and a desire to build impactful solutions that solve real
            world problems and enhance user experiences.
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-lg font-[Inter]">
            I have a strong technical background with experience in React.js, Node.js, Express, and MongoDB.
            I thrive in environments that challenge me to continuously learn and adapt, and I’m always exploring
            new ways to improve efficiency and create seamless user experiences.
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-base font-[Inter]">
            My drive doesn’t stop at just code—I’m deeply committed to fostering team collaboration and mentorship,
            ensuring that my colleagues feel supported in their professional growth. I prioritize clean, maintainable
            code and strive for excellence in everything I do.
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-base font-[Inter]">
            Currently, I’m focused on growing my skill set, learning more about Generative AI,
            AI Agents, MCP, RAG and AI Automation.
          </p>

          <button
            type="button"
            className="bg-yellow-400 hover:bg-blue-400 cursor-pointer px-4 py-2 text-lg sm:text-xl md:text-2xl text-black mt-7"
            onClick={() => {
              const footer = document.getElementById('footer');
              if (footer) footer.scrollIntoView({ behavior: 'smooth' });
            }}
            title="Get in touch"
          >
            Get in touch
          </button>

        </div>
      </div>
    </div>
  );
}

export default About;