import { useState, useRef, useEffect} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  useGSAP(() => {
    if (!showContent) return;

    const ctx = gsap.context(() => {
      gsap.to(".main", {
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: "expo.inOut",
      });

      gsap.to(".sky", {
        scale: 1.1,
        rotate: 0,
        duration: 2,
        delay: -0.8,
        ease: "expo.inOut",
      });

      gsap.to(".bg", {
        scale: 1.1,
        rotate: 0,
        duration: 2,
        delay: -0.8,
        ease: "expo.inOut",
      });

      gsap.to(".character", {
        scale: 1.4,
        x: "-50%",
        bottom: "-25%",
        rotate: 0,
        duration: 2,
        delay: -0.8,
        ease: "expo.inOut",
      });

      gsap.to(".text", {
        scale: 1,
        rotate: 0,
        duration: 2,
        delay: -0.8,
        ease: "expo.inOut",
      });

      const main = document.querySelector(".main");

      const handleMouseMove = (e) => {
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
      };

      main?.addEventListener("mousemove", handleMouseMove);

      return () => {
        main?.removeEventListener("mousemove", handleMouseMove);
      };
    });

    return () => ctx.revert();
  }, [showContent]);

  return (
    <>
      {!showContent && (
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
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
                    AV
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
      )}

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <video
                    ref={videoRef}

                className="absolute bg top-0 left-0 w-full h-full object-cover"
                src="./img/Earth_Rotation_Animation_for_Website.mp4"
                autoPlay
                loop
                muted
                  onLoadedMetadata={() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }}
              />

              <div className="text absolute top-[49%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-[90%] max-w-4xl z-10">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-black font-semibold tracking-[0.3em] uppercase mb-6">
                  Software Developer
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-[#2d5bff] text-center">
                  Avinash
                </h1>

                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-[#2d5bff] text-center">
                  Kumar Verma
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;