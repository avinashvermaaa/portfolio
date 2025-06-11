import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
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
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 font-normal"
                        onClick={() => {
                          setShowMenu(false);
                          const section = document.getElementById('about');
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        About
                      </div>
                      <div
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 font-normal"
                        onClick={() => {
                          setShowMenu(false);
                          const section = document.getElementById('projects');
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Projects
                      </div>
                      <div
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 font-normal"
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
                <h3 className="text-4xl -mt-[8px] leading-none text-white">Avinash Verma</h3>
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
                  src="./gunnngirls.png"
                  alt=""
                /> {/* Character 2nd Image */}
              </div>
              <div id="about" className="rg w-[45%] py-3">
                <h1 className="text-2xl">Avinash Verma's Portfolio</h1>
                <h1 className="text-2xl">Building the Future of Web Development</h1>
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
                  className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer px-4 py-4 text-black mt-7 text-3xl"
                  onClick={() => {
                    const footer = document.getElementById('footer');
                    if (footer) {
                      footer.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  title="Contact Now"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>

{/* Projects Section */}
          <div id="projects" className="w-full min-h-screen bg-[#111] text-white flex flex-col items-center justify-center px-10 py-20">
            <h2 className="text-6xl font-bold mb-10">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">

{/* Projects list */}

      {/* CodeSphere */}
      <a href="https://codespr.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-green-500 scale-0 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">CodeSphere</h3>
            <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
              <strong>CodeSphere</strong> :- An Online AI Coding platform where you can Write, Run, 
              Compile and Debug your Codes. <br />
              <br />
              <strong>Currently Supporting Languages:- </strong> C, C++, Python, JavaScript. <br /> <br />
              <strong>Other Available:</strong> Java, HTML, CSS, Typescript, Rust, PHP, Ruby, 
              Database languages (SQL, MySQL, SQLite, MongoDB), and many more.
            </p>

            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* Fileshare */}
      <a href="https://fileshare247.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-yellow-500 scale-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">Fileshare</h3>
            <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
              <strong>FileShare</strong> :- Effortlessly Send & Receive Files - Secure, Fast🚀 and Hassle-Free! 
              Say goodbye 👋 to complicated transfers and enjoy seamless file sharing 📂 anytime, anywhere 🌍🌻!
              <br />
              No need for complicated cloud storage setups—just upload your files, share the link, 
              and you're done! Our platform is designed to make file sharing as easy as possible, 
              so you can focus on what really matters, not the tech. 🚀💻
            </p>

            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* Acetype */}
      <a href="https://acetype.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-blue-500 scale-0 origin-bottom-right transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">AceType</h3>
            <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
              <strong>AceType</strong> :- AceType is an online typing platform designed to improve typing 
              speed and accuracy. It offers three difficulty levels—Easy, Medium, and Hard—with dynamic 
              typing exercises generated by Google's Gemini API. 
              <br />
              Users can track their real-time speed (WPM) and accuracy, helping them gradually improve. 
              The simple, UI makes it suitable for typists of all skill levels, from beginners to experts.
            </p>
            
            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* Virtual Mouse */}
      <a href="https://github.com/avinashvermaaa/Virtual-Mouse" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-green-500 scale-0 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">Virtual Mouse</h3>
            <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
              <strong>Virtual Mouse</strong> :- This innovative project uses hand gestures to control 
              computer functions in real time. Powered by Python, OpenCV, and NLP, it allows users to 
              navigate and interact with their computer through intuitive gesture-based commands, making 
              the digital experience more interactive and accessible.
              <br />
              Virtual Mouse  offers a futuristic and hands-free alternative to traditional input methods.
            </p>

            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* Sorting Visualizer */}
      <a href="https://avinashvermaaa.github.io/Sorting_Visualizer/" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-yellow-500 scale-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">Sorting Visualizer</h3>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                <strong>Sorting Visualizer</strong> :- This project is Engineered for both educational and 
                professional purposes. leverages advanced visualization techniques to illustrate 
                the step-by-step process of various sorting algorithms ("Bubble Sort, 
                Insertion Sort, Selection Sort, Quick Sort, Heap Sort, and Shell Sort").By visualizing each 
                algorithm's execution, it provides a deeper understanding of performance,  
                and computational complexity. 
              </p>

            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* Indieflix */}
      <a href="https://avinashvermaaa.github.io/Indieflix/" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-blue-500 scale-0 origin-bottom-right transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">Indieflix</h3>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                <strong>Indieflix</strong> :- Indieflix is an advanced movie streaming platform designed 
                to provide an immersive entertainment experience. Offering a wide range of movies, anime, 
                and web series, the platform ensures high-quality streaming with a seamless, user-friendly 
                interface. It Delivers a smooth and engaging viewing experience across devices, 
                support dynamic content delivery, ensuring users enjoy uninterrupted access to a diverse library of media content.
              </p>

            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* LittleLemon */}
      <a href="https://github.com/avinashvermaaa/littlelemon" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-green-500 scale-0 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">LittleLemon</h3>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                <strong>LittleLemon</strong> :- LittleLemon is a restaurant booking web app that lets users book
                 tables in advance and place orders for dine-in or takeout. With a secure database and intuitive 
                 interface, it efficiently manages bookings, orders, and customer data.
                 It also features an interactive map to help users find nearby restaurant locations, 
                 offering a modern and reliable solution for both customers and restaurant owners.
                 Built with (Frontend:- Html, Css, Js) (Backend :- Django) and  (Database:- Sqlite3).
              </p>

            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* Project 8 */}
      <a href="https://todoapp-av.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-yellow-500 scale-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">Todo List</h3>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                <strong>Todo List</strong> :- This efficient Todo List app, built with ReactJS, is 
                designed to help users organize and prioritize tasks seamlessly. Supports  
                features such as filtering tasks by status (completed, pending), sorting by due date, 
                and setting priorities (low, medium, high). Users can also categorize tasks into (general, 
                work, personal, and urgent groups). It also has a dark mode toggle, allowing users to 
                customize the interface for a comfortable viewing experience. 
              </p>

            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>

      {/* Project 9 */}
      <a href="https://avinashvermaaa.github.io/qrcode_generator/" target="_blank" rel="noopener noreferrer">
        <div className="relative group p-6 rounded-xl overflow-hidden bg-[#1e1e1e] hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-blue-500 scale-0 origin-bottom-right transition-transform duration-500 ease-out group-hover:scale-150 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2">QRCode Generator</h3>
            <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
              <strong>QRCode Generator</strong> :- The QRCode Generator project is a web application 
              that allows users to input a website URL along with a custom image name, and the application 
              generates a QR code based on the provided link. Once the QR code is generated, users can 
              download the image directly to their device. 
              The app leverages JavaScript to dynamically create the QR code and provide a seamless user 
              experience with a clean and simple interface.
            </p>
            
            {/* Launch Icon */}
            <div className="mt-4 flex justify-end">
              <i className="fas fa-external-link-alt text-2xl text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </a>


{/* Add more project cards as needed */}


            </div>
          </div>

{/* Footer Section */}
          <footer id="footer" className="w-full bg-black text-white py-10 px-10 flex flex-col items-center justify-center">
            <h4 className="text-2xl mb-4">Connect with me</h4>
            <div className="flex gap-6 text-3xl">
              
              {/* Github */}
              <a href="https://github.com/avinashvermaaa" target="_blank" rel="noreferrer">
                <i className="ri-github-fill hover:text-yellow-400 transition"></i>
              </a>
              
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/avinash-verma-20946b21b/" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-fill hover:text-blue-400 transition"></i>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/avinash_vermaa/" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-fill hover:text-red-400 transition"></i>
              </a>

              {/* Mail */}
              <a href="mailto:code6969nation@gmail.com">
                <i className="ri-mail-fill hover:text-green-400 transition"></i>
              </a>
              
              {/* CodeChef */}
              <a href="https://www.codechef.com/users/avinashvermaaa" target="_blank" rel="noopener noreferrer">
                <i className="ri-code-box-fill hover:text-yellow-500 transition text-2xl"></i>
              </a>

              {/* LeetCode */}
              <a href="https://leetcode.com/u/avinash_vermaa/" target="_blank" rel="noopener noreferrer">
                <i className="ri-code-box-fill hover:text-blue-500 transition text-2xl"></i>
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
