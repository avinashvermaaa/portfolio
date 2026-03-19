import "../styles/LogoMarquee.css";

interface LogoMarqueeProps {
  items: string[];
  imagePath: string;
  direction: string;
  className?: string;
}

const LogoMarquee = ({ items, imagePath, direction, className = "logo" }: LogoMarqueeProps) => {
  const doubledItems = [...items, ...items];

  return (
    <div className={`marque-wrapper ${direction === "right" ? "marque-wrapper-reverse" : ""}`}>
      <div className={`marque-${direction}`}>
        {doubledItems.map((imgName, index) => (
          <div key={`${imgName}-${index}`} className="logo-wrapper">
            <img
              src={`./img/${imagePath}/${imgName}.png`}
              alt={imgName}
              className={className}
              loading="lazy"
            />
            <span className="logo-tooltip">{imgName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
