import "remixicon/fonts/remixicon.css";

const SocialCard = ({ link, social, hover }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <i className={`ri-${social}-fill ${hover} transition`}></i>
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

      <h4 className="text-2xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Connect with me
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

      <p className="mt-8 text-2xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        © {new Date().getFullYear()} Avinash Verma
      </p>

    </footer>
  );
}

export default Footer;