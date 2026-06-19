import "./App.css";
import { Link } from "react-router-dom";
import backgroundVideo from "./assets/backgroundvid/background1.mp4";

function App() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const dayStr = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="app">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Dark radial overlay for better text readability */}
      <div className="background-overlay" />

      <img className="logo" src="/favicon.svg" alt="Devendra Kumar" />

      <div className="intro">
        <p className="part1">
          Welcome to <span className="highlight doamin">dkumarjaj.in</span>
        </p>
        <p className="part2">
          I'm <span className="highlight name">Devendra Kumar</span> — a
          passionate
          <span className="highlight"> technologist</span> and{" "}
          <span className="highlight">Full-Stack Developer</span> who loves
          turning ideas into reality through code.
        </p>
        <p className="part2">
          I enjoy building modern{" "}
          <span className="highlight"> web applications </span>, exploring{" "}
          <span className="highlight"> new technologies </span>, and
          continuously improving my skills to create better digital experiences.
        </p>
        <p className="part2">
          I love learning every <span className="highlight">bit</span> of
          technology and the smart thinking behind it.
        </p>
      </div>

      <div className="cta-tomainpage">
        <div className="info">
          <span>dkumarjaj</span>
          <span>{dateStr}</span>
          <span>{dayStr}</span>
        </div>

        <Link to="/portfolio" className="cta">
          Start Exploring
          <i className="fa-solid fa-arrow-down"></i>
        </Link>
      </div>
    </div>
  );
}

export default App;
