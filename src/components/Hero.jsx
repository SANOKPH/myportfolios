import { TypeAnimation } from "react-type-animation";
import myPhoto from "../Images/Profile.jpg";
import "../css/Hero.css";

const technologies = [
  "React.js",
  "Vue.js",
  "Java Spring Boot",
  "PHP",
  "Laravel",
  "CodeIgniter",
];

const Hero = () => {
  return (
    <section className="hero">

      {/* LEFT */}
      <div className="hero-left">
        <h1>
          Hi, I'm <span className="name">Sanok</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Backend Developer",
            2000,
            "Vue Developer",
            2000,
            "Java Developer",
            2000,
            "Laravel Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <div className="tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <img src={myPhoto} alt="sanok Full Stack Developer" className="hero-image" />
      </div>

    </section>
  );
};

export default Hero;