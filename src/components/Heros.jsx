import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Hero() {

  let [showContent, setShowContent] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // <-- new state for menu toggle

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
            {/* Navbar with Logo and Navigation Lines */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 flex items-center justify-between">
              {/* Logo Section */}
              <div className="logo flex gap-7 items-center">
                {/* Dashed Lines for Navigation */}
                <div className="relative">
                  {/* Dashed Line Div that toggles menu */}
                  <div
                    className="w-15 h-2 bg-white border border-2 cursor-pointer"
                    title="Navigate"
                    onClick={() => setShowMenu(!showMenu)}
                  ></div>
                  <div
                    className="w-12 h-2 bg-white border border-2 cursor-pointer"
                    title="Navigate"
                    onClick={() => setShowMenu(!showMenu)}
                  ></div>
                  <div
                    className="w-8 h-2 bg-white border border-2 cursor-pointer "
                    title="Navigate"
                    onClick={() => setShowMenu(!showMenu)}
                  ></div>

                  {/* Dropdown menu items, shown when showMenu is true */}
                  {showMenu && (
                    <div className="absolute top-0 mt-10 bg-white rounded shadow-lg z-[20]">
                      <div
                        className="px-4 py-2 cursor-pointer bg-green-200 font-normal"
                        onClick={() => {
                          setShowMenu(false);
                          const section = document.getElementById('about');
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        About
                      </div>
                      <div
                        className="px-4 py-2 cursor-pointer bg-yellow-200 font-normal"
                        onClick={() => {
                          setShowMenu(false);
                          const section = document.getElementById('projects');
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Projects
                      </div>
                      <div
                        className="px-4 py-2 cursor-pointer bg-blue-200 font-normal"
                        onClick={() => {
                          setShowMenu(false);
                          const section = document.getElementById('footer');
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Connect
                      </div>
                    </div>
                  )}
                </div>

                {/* Logo Text */}
                {/* <h3 className="text-4xl -mt-[8px] leading-none text-white">Avinash Verma</h3> */}
                <h3 className="text-4xl -mt-[8px] leading-none bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  Avinash Verma
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
                {/* <h1 className="text-[12rem] leading-none -ml-40 text-2xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">grand</h1> */}
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40 ">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[120%] right-1/11 -translate-x-1/2 scale-[1] rotate-[-20deg]"
                src="./boybg.png"
                alt=""
              /> {/* Character bg Image */}
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
        </div>

      )}
    </>
  );

}

export default Hero;