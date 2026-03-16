function About() {

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="cntnr flex text-white w-full h-[80%]">
        <div className="limg relative w-1/2 h-full">
          <img
            className="absolute scale-[0.635] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="./imag.png"
            alt=""
          /> {/* Character 2nd Image */}
        </div>

        <div id="about" className="rg w-[45%] py-3">
          <h1 className="font-[Nunito] text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Avinash Verma's Portfolio</h1>
          <h1 className="font-[Helvetica_Now_Display] text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Building the Future of Web Development</h1>

          <p className="mt-5 text-lg font-[Helvetica_Now_Display]">
            Hi, I'm Avinash Verma, a passionate Full Stack Developer and a GCP expert with a knack
            for creating dynamic and responsive web applications. My journey in tech has been fueled
            by a love for problem-solving and a desire to build impactful solutions that solve real
            world problems and enhance user experiences.
          </p>

          <p className="mt-3 text-lg font-[Helvetica_Now_Display]">
            I have a strong technical background with experience in React.js, Node.js, Express, and MongoDB.
            I thrive in environments that challenge me to continuously learn and adapt, and I’m always exploring
            new ways to improve efficiency and create seamless user experiences.
          </p>

          <p className="mt-3 text-base font-[Helvetica_Now_Display]">
            My drive doesn’t stop at just code—I’m deeply committed to fostering team collaboration and mentorship,
            ensuring that my colleagues feel supported in their professional growth. I prioritize clean, maintainable
            code and strive for excellence in everything I do.
          </p>

          <p className="mt-3 text-base font-[Helvetica_Now_Display]">
            Currently, I’m focused on growing my skill set, learning more about Generative AI,
            Cloud Technologies, MCP and AI Automation.
          </p>

          <button
            type="button"
            className="bg-yellow-400 hover:bg-blue-400 cursor-pointer px-3 py-3 text-black mt-7 text-3xl"
            onClick={() => {
              const footer = document.getElementById('footer');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
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