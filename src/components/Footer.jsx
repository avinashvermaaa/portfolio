import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  instagram: Instagram,
};

const SocialCard = ({ link, social, hover }) => {
  const Icon = iconMap[social];
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className={`w-8 h-8 ${hover} hover:text-yellow-400`} />
    </a>
  );
};

const Socials = [
  {
    "link": "https://github.com/avinashvermaaa",
    "social": "github",
    "hover": "text-white-400"
  },
  {
    "link": "https://www.linkedin.com/in/avinash-verma-20946b21b/",
    "social": "linkedin",
    "hover": "text-blue-400"
  },
  {
    "link": "mailto:code6969nation@gmail.com",
    "social": "mail",
    "hover": "text-green-400"
  },
  {
    "link": "https://www.instagram.com/avinash_vermaa/",
    "social": "instagram",
    "hover": "text-red-400"
  },
];

function Footer() {

  return (
    <footer id="footer" className="bg-black text-white py-10 text-center">

      {/* <h4 className="text-4xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Connect with me
      </h4> */}

      <h4 className="text-4xl mb-6">
        <span className="bg-grad-red bg-clip-text text-transparent inline-block">
          Connect
        </span>{" "}
        <span className="bg-grad-blue bg-clip-text text-transparent inline-block">
          with me
        </span>
      </h4>

      <div className="mt-8 flex justify-center gap-6 text-3xl">

        {Socials.map((social, index) => (
          <SocialCard
            key={index}
            link={social.link}
            social={social.social}
            hover={social.hover}
          />
        ))}

      </div>

      {/* <p className="mt-8 text-4xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        © {new Date().getFullYear()} {" "} 
        Avinash Verma
      </p> */}

      <p className="mt-8 text-4xl mb-6">
        <span className="bg-grad-red bg-clip-text text-transparent inline-block">
          © {new Date().getFullYear()} {" "}
          Avinash
        </span>{" "}
        <span className="bg-grad-blue bg-clip-text text-transparent inline-block">
          Verma
        </span>
      </p>

    </footer>
  );
}

export default Footer;