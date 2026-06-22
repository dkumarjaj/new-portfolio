import { Helmet } from "react-helmet-async";
import "../styles/About.css";
import Image from "../assets/images/dev5.jpeg";
import { Link } from "react-router";
import Resume from "../assets/resumes/DevendraKumarCV.pdf";
import { useEffect, useState } from "react";
function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Devendra_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth slow scroll to top
  const scrollToTop = () => {
  document.getElementById("root")?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  };

  return (
    <>
      <Helmet>
        <title>Devendra Kumar | About me</title>

        <meta
          name="description"
          content="Learn more about Devendra Kumar, a Full-Stack Developer from Jhajha, Bihar. Explore his journey, philosophy, technical expertise, projects, achievements, and passion for building scalable digital solutions."
        />

        <meta
          name="keywords"
          content="
      About Devendra Kumar,
      Devendra Kumar Biography,
      Devendra Kumar Portfolio,
      Devendra Kumar Developer,
      Who is Devendra Kumar,
      Devendra Kumar Journey,
      Software Engineer Bihar,
      Full Stack Developer Bihar,
      MERN Developer India,
      Web Developer Jhajha,
      Developer From Bihar,
      Technology Professional Bihar,
      Node.js Developer India,
      React Developer India,
      Software Development Portfolio,
      Developer Story,
      Programmer Bihar,
      MERN Stack Engineer,
      About Software Engineer,
      Full Stack Engineer India
    "
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://dkumarjaj.jackjohan7520.workers.dev/about"
        />

        <meta property="og:type" content="profile" />

        <meta
          property="og:title"
          content="About Devendra Kumar | Full-Stack Developer & Software Engineer"
        />

        <meta
          property="og:description"
          content="Discover the story, journey, skills, achievements, and vision of Devendra Kumar, a Full-Stack Developer passionate about technology and innovation."
        />

        <meta
          property="og:url"
          content="https://dkumarjaj.jackjohan7520.workers.dev/about"
        />

        <meta
          property="og:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About Devendra Kumar | Software Engineer"
        />

        <meta
          name="twitter:description"
          content="Read the journey, experience, and philosophy behind Devendra Kumar's work in software engineering and web development."
        />

        <meta
          name="twitter:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",

            name: "About Devendra Kumar",

            description:
              "Personal journey, technical expertise, achievements, and philosophy of Devendra Kumar.",

            mainEntity: {
              "@type": "Person",

              name: "Devendra Kumar",

              alternateName: [
                "DKumarJaj",
                "Devendra Kumar Bihar",
                "Devendra Kumar Jhajha",
              ],

              jobTitle: [
                "Software Engineer",
                "Full-Stack Developer",
                "MERN Stack Developer",
              ],

              address: {
                "@type": "PostalAddress",
                addressLocality: "Jhajha",
                addressRegion: "Bihar",
                addressCountry: "India",
              },

              sameAs: [
                "https://github.com/dkumarjaj",
                "https://www.linkedin.com/in/dkumarjaj/",
                "https://x.com/dkumarjaj",
              ],

              knowsAbout: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "TypeScript",
                "SEO",
                "Web Development",
                "System Design",
                "Software Engineering",
                "Automation",
                "Artificial Intelligence",
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="main-section" id="top">
        <section className="about-top">
          <span className="about-label">ABOUT ME</span>
          <div className="about-image">
            <img src={Image} alt="my-pic" />
          </div>
          <div className="about-welcome">
            <h1>
              More Than <span> Just Code</span>
            </h1>

            <p>There is more to me than being a programmer.</p>
          </div>
        </section>
        <div className="scroll-icon">
          <div className="scroll-indicator">
            <div className="scroll-line vertical" />
            <small>One More Scroll</small>
            <div className="scroll-line horizontal" />
            <small>You haven't seen everything yet.</small>
          </div>
        </div>
        <section className="about-story">
          <h2>
            From <span className="context">Curiosity</span> to{" "}
            <span className="context">Creation</span>
          </h2>

          <p>
            I'm from <span className="important-keyword">Harhanja</span>, a
            small village near <span className="important-keyword">Jhajha</span>{" "}
            in <span className="important-keyword">Bihar</span>. My interest in
            technology started with simple curiosity <br />
            <br /> — wanting to{" "}
            <span className="important-keyword">understand</span> how{" "}
            <span className="important-keyword"> websites</span>,
            <span className="important-keyword"> apps</span>, and
            <span className="important-keyword"> digital systems</span> work
            behind the scenes.
          </p>
          <p className="emphasize">
            But <span className="important-keyword-h">technology</span> isn't my
            only <span className="important-keyword-h">interest</span> .
          </p>

          <p>
            —Over time, that curiosity turned into a{" "}
            <span className="important-keyword">habit</span> of building
            <span className="important-keyword"> things</span>. I enjoy
            exploring new<span className="important-keyword"> fields </span>
            beyond <span className="important-keyword">software</span> as well.
            Whether it's <span className="important-keyword">Arduino</span> and
            <span className="important-keyword"> IoT </span>,
            <span className="important-keyword"> industrial </span>automation,{" "}
            <span className="important-keyword">digital </span>marketing,{" "}
            <span className="important-keyword">design </span>tools, or{" "}
            <span className="important-keyword">emerging </span>
            technologies, I like understanding how different{" "}
            <span className="important-keyword">systems</span> work and connect
            with each other.
          </p>
          <p className="emphasize">
            And that's only a{" "}
            <span className="important-keyword-h">small </span>
            part of my <span className="important-keyword-h">journey</span>.
          </p>
          <p>
            —There are many{" "}
            <span className="important-keyword">experiences</span>,{" "}
            <span className="important-keyword">lessons</span>,{" "}
            <span className="important-keyword">projects</span>, and{" "}
            <span className="important-keyword">interests</span> that can't fit
            into a <span className="important-keyword">single</span> page. Every
            year brings new{" "}
            <span className="important-keyword">challenges</span>, new
            <span className="important-keyword"> ideas</span>, and new
            <span className="important-keyword"> things</span> to learn—and I'm
            always <span className="important-keyword">excited</span> about
            what's
            <span className="important-keyword"> next</span>.
          </p>
          <div className="ctas">
            <Link to="/portfolio/project" className="btn-secondary">
              View Projects
            </Link>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              onClick={handleDownload}
            >
              Download Resume
            </a>

            <Link to="/portfolio/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </section>
        <section className="about-cards">
          <div className="about-card">
            <h3>Village to Web</h3>
            <p>
              Coming from a small village in Bihar taught me to stay curious,
              learn independently, and make the most of every opportunity.
            </p>
          </div>

          <div className="about-card">
            <h3>Beyond Software</h3>
            <p>
              My interests extend beyond coding into Arduino, IoT, automation,
              AI, and the technologies shaping the future.
            </p>
          </div>

          <div className="about-card">
            <h3>Learning by Building</h3>
            <p>
              Most of my knowledge comes from creating projects, experimenting,
              making mistakes, and improving along the way.
            </p>
          </div>
          <div className="about-card">
            <h3>Concept Coach</h3>
            <p>
              {" "}
              I enjoy helping others understand concepts, whether in the
              classroom or through technology.
            </p>
          </div>
        </section>

        <section className="focus-section">
          <h2>Current Focus</h2>

          <div className="focus-grid">
            <span>Advance DevOps</span>
            <span>SEO</span>
            <span>Automation</span>
            <span>Cloud Deployment</span>
            <span>System Design</span>
            <span>DSA</span>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat">
            <h3>50+</h3>
            <p>Technologies Explored</p>
          </div>
          <div className="stat">
            <h3>12000+</h3>
            <p>Skill-India Points</p>
          </div>

          <div className="stat">
            <h3>5000+</h3>
            <p>Hours Learning</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Certifications</p>
          </div>
        </section>

        <section className="focus-section">
          <h2>Role | Idendity</h2>

          <div className="focus-grid">
            <span>Software Engineer</span>
            <span>Tech & Science Mentor</span>
            <span>Technology Enthusiast</span>
            <span>SEO Specialist</span>
          </div>
        </section>

        <section id="skills" className="focus-section skill-section">
          <h2>Skills</h2>
          <div className="focus-grid skill-grid">
            <span>MERN-Stack Development</span>
            <span>UI/UX Desiging </span>
            <span>SEO & Web performance</span>
            <span>Database Design</span>
            <span>Cloud Deployment</span>
            <span>AI Integrations</span>
            <span>System Design</span>
            <span>Responsive Web Development</span>
            <span>Cloud Deployment</span>
            <span>DevOps Basics</span>
            <span>Science & Technology Mentoring</span>
            <span>Technical Problem Solving</span>
            <span>Primary School Teaching</span>
            <span>Project Management</span>
          </div>
        </section>

        <section id="tech-skill" className="focus-section tech-skill-section">
          <h2>Tech Skills</h2>
          <div className="focus-grid skill-grid">
            <span>React.js</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>JavaScript</span>
            <span>Redux</span>
            <span>WebSockets</span>
            <span>Git & GitHub</span>
            <span>REST APIs</span>
            <span>EJS</span>
            <span>Python</span>
            <span>PHP</span>
            <span>Responsive Design</span>
            <span>C & C++</span>
            <span>Redis</span>
            <span>GSAP</span>
            <span>Docker</span>
            <span className="others">And Counting...</span>
          </div>
        </section>

        <section className="vision-section">
          <h2>My Vision</h2>

          <p>
            To use technology, creativity, and education to solve meaningful
            problems, create opportunities, and make knowledge more accessible.
            I aspire to build solutions that positively impact individuals,
            businesses, and communities while contributing to a future driven by
            innovation, awareness, and purpose.
          </p>
          <h2>My Philosophy</h2>

          <p>
            Learning is a lifelong journey, and knowledge loses its value if it
            is kept to yourself. I am committed to learning constantly and
            teaching openly. Through technology and education, I want to do my
            part in building a future where information is accessible and
            opportunities are open to everyone.
            <span className="tricolor">
              <span className="red"> Learn Beyond Limits.</span>
              <span className="white">Apply with Purpose.</span>
              <span className="green">Serve with Impact.</span>
            </span>
          </p>
        </section>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault(); // Prevent default jump
            scrollToTop();
          }}
          className={`scroll-top ${isVisible ? "visible" : ""}`}
          title="Go top"
        >
          ↑
        </a>
      </div>
    </>
  );
}

export default About;
