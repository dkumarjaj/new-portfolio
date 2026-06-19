import "./App.css";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Devendra Kumar | Welcome</title>

        <meta
          name="description"
          content="Devendra Kumar is a Software Engineer and Full-Stack Developer from Jhajha, Bihar. Explore my portfolio, projects, web development expertise, technology insights, and digital solutions."
        />
        <meta
          name="keywords"
          content="
            Devendra Kumar,
            Developer in Jhajha,
            Tech Mentor Jhajha,
            Computer Science Teacher Jhajha,
            Full Stack Developer Bihar,
            Web Developer Jamui,
            Technology Enthusiast Bihar,
            Harharanja Jhajha,
            Devendra Kumar Harhnja,
            Engineer Harhanja
            "
        />

        <meta name="robots" content="index, follow" />

        <meta name="theme-color" content="#0f172a" />

        <link
          rel="canonical"
          href="https://dkumarjaj.jackjohan7520.workers.dev/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Devendra Kumar | Welcome" />

        <meta
          property="og:description"
          content="Software Engineer, Full-Stack Developer, Problem Solver and Technology Enthusiast from Jhajha, Bihar."
        />

        <meta
          property="og:url"
          content="https://dkumarjaj.jackjohan7520.workers.dev/"
        />

        <meta
          property="og:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Devendra Kumar | Software Engineer"
        />

        <meta
          name="twitter:description"
          content="Full-Stack Developer, MERN Stack Developer and Technology Enthusiast."
        />

        <meta
          name="twitter:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Devendra Kumar",
            url: "https://dkumarjaj.jackjohan7520.workers.dev/",
            jobTitle: "Software Engineer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jhajha",
              addressRegion: "Bihar",
              addressCountry: "India",
            },
            knowsAbout: [
              "Web Development",
              "React",
              "Node.js",
              "MongoDB",
              "JavaScript",
              "SEO",
              "Digital Marketing",
              "Artificial Intelligence",
              "Teaching Computer and Science",
            ],
          })}
        </script>
      </Helmet>

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
            Welcome to <span className="highlight doamin">dkumarjaj</span>
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
            continuously improving my skills to create better digital
            experiences.
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
    </>
  );
}

export default App;
