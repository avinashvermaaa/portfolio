import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[120%] right-1/11 -translate-x-1/2 scale-[1] rotate-[-20deg]"
                src="./boybg.png"
                alt=""
              /> {/* Character bg Image */}
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[0.635] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                /> {/* Character 2nd Image */}
              </div>
              <div className="rg w-[30%] py-3">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-5 py-5 text-black mt-9 text-4xl">
                  Contact Now
                </button>
              </div>
            </div>
          </div>

{/* Projects Section */}
          <div className="w-full min-h-screen bg-[#111] text-white flex flex-col items-center justify-center px-10 py-20">
            <h2 className="text-6xl font-bold mb-10">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">

  {/* Projects list */}
            {/* CodeSphere */}
            <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
              {/* Splash Effect Layer */}
              <div className="absolute inset-0 bg-green-500 scale-0 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">CodeSphere</h3>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  <strong>CodeSphere</strong> :- An Online AI Coding platform where you can Write, Run, Compile and Debug your Codes. <br />
                  <br />
                  <strong>Currently Supporting Languages:</strong> C, C++, Python, JavaScript. <br />
                  <strong>Other Available:</strong> Java, HTML, CSS, PHP, Ruby, Database languages (SQL, MongoDB), and more.
                </p>
              </div>
            </div>

            {/* Fileshare */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-yellow-500 scale-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Fileshare</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>FileShare</strong> :- Effortlessly Send & Receive Files - Secure, Fast🚀 and Hassle-Free! 
                    <br />
                    Say goodbye 👋 to complicated transfers and enjoy seamless file sharing 📂 anytime, anywhere 🌍🌻!
                  </p>
                </div>
              </div>

            {/* Acetype */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-blue-500 scale-0 origin-bottom-right transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">AceType</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>AceType</strong> :-
                    This innovative project blends cutting-edge technology with design to create an immersive experience.
                    By incorporating advanced algorithms, it pushes the boundaries of what’s possible in the digital space.
                    <br />
                    Our team of talented designers and engineers have crafted a seamless, user-centric interface to ensure
                    intuitive interactions with every feature. Expect the unexpected with Project 7.
                  </p>
                </div>
              </div>

            {/* Virtual Mouse */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-green-500 scale-0 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Virtual Mouse</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>Virtual Mouse</strong> :-
                    This innovative project blends cutting-edge technology with design to create an immersive experience.
                    By incorporating advanced algorithms, it pushes the boundaries of what’s possible in the digital space.
                    <br />
                    Our team of talented designers and engineers have crafted a seamless, user-centric interface to ensure
                    intuitive interactions with every feature. Expect the unexpected with Project 7.
                  </p>
                </div>
              </div>

            {/* Sorting Visualizer */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-yellow-500 scale-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Sorting Visualizer</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>Sorting Visualizer</strong> :-
                    This innovative project blends cutting-edge technology with design to create an immersive experience.
                    By incorporating advanced algorithms, it pushes the boundaries of what’s possible in the digital space.
                    <br />
                    Our team of talented designers and engineers have crafted a seamless, user-centric interface to ensure
                    intuitive interactions with every feature. Expect the unexpected with Project 7.
                  </p>
                </div>
              </div>

            {/* Indieflix */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-blue-500 scale-0 origin-bottom-right transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Indieflix</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>Indieflix</strong> :-
                    This innovative project blends cutting-edge technology with design to create an immersive experience.
                    By incorporating advanced algorithms, it pushes the boundaries of what’s possible in the digital space.
                    <br />
                    Our team of talented designers and engineers have crafted a seamless, user-centric interface to ensure
                    intuitive interactions with every feature. Expect the unexpected with Project 7.
                  </p>
                </div>
              </div>

            {/* Project 7 */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-green-500 scale-0 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Project 7</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>AceType</strong> :-
                    This innovative project blends cutting-edge technology with design to create an immersive experience.
                    By incorporating advanced algorithms, it pushes the boundaries of what’s possible in the digital space.
                    <br />
                    Our team of talented designers and engineers have crafted a seamless, user-centric interface to ensure
                    intuitive interactions with every feature. Expect the unexpected with Project 7.
                  </p>
                </div>
              </div>

            {/* Project 8 */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-yellow-500 scale-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Project 8</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>AceType</strong> :-
                    This innovative project blends cutting-edge technology with design to create an immersive experience.
                    By incorporating advanced algorithms, it pushes the boundaries of what’s possible in the digital space.
                    <br />
                    Our team of talented designers and engineers have crafted a seamless, user-centric interface to ensure
                    intuitive interactions with every feature. Expect the unexpected with Project 7.
                  </p>
                </div>
              </div>

            {/* Project 9 */}
              <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-green-500 scale-0 origin-bottom-right transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Project 9</h3>
                  <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                    <strong>AceType</strong> :-
                    This innovative project blends cutting-edge technology with design to create an immersive experience.
                    By incorporating advanced algorithms, it pushes the boundaries of what’s possible in the digital space.
                    <br />
                    Our team of talented designers and engineers have crafted a seamless, user-centric interface to ensure
                    intuitive interactions with every feature. Expect the unexpected with Project 7.
                  </p>
                </div>
              </div>

{/* Add more project cards as needed */}

            </div>
          </div>

{/* Footer Section */}
          <footer className="w-full bg-black text-white py-10 px-10 flex flex-col items-center justify-center">
            <h4 className="text-2xl mb-4">Connect with me</h4>
            <div className="flex gap-6 text-3xl">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <i className="ri-github-fill hover:text-yellow-400 transition"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-box-fill hover:text-blue-400 transition"></i>
              </a>
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-fill hover:text-red-400 transition"></i>
              </a>
              <a href="mailto:youremail@example.com">
                <i className="ri-mail-fill hover:text-green-400 transition"></i>
              </a>
            </div>
            <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
              © {new Date().getFullYear()} Avinash Verma | All rights reserved.
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
