"use client";

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import Image1 from "../assets/images/dev6.jpeg";
import Image2 from "../assets/images/dev2.jpeg";
import Image3 from "../assets/images/dev3.jpeg";
import Image4 from "../assets/images/dev4.jpeg";
import Image5 from "../assets/images/dev5.jpeg";
import Image6 from "../assets/images/dev6.jpeg";
import Image7 from "../assets/images/dev1.jpg";
import Typed from "typed.js";

import "../styles/Home.css";

const Home: React.FC = () => {
  const now = new Date();
  // Week number in the year (1-52/53)
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const dayOfYear =
    Math.floor(
      (now.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000),
    ) + 1;

  const weekNumber = Math.ceil(dayOfYear / 7);

  // const dayNumber = ((new Date().getDay() + 6) % 7) + 1;

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  const selectedImage = weekNumber % images.length;

  const [time, setTime] = useState(new Date());

  const name = "Devendra Kumar";
  const intro =
    "Crafting elegant digital experiences with clean code and creative solutions.";

  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Science and Tech Mentor",
        "Full-Stack Developer",
        "Software Engineer",
        "Problem Solver",
        "UI/UX Enthusiast",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-name">
              <span className="sentence">I'm</span> {name}
            </h1>

            <h3 className="hero-role">
              And I'm a <span ref={typedRef} className="skills"></span>.
            </h3>

            <p className="hero-text">{intro}</p>

            <p className="hero-text">
              From{" "}
              <span className="address">Harhanja, Jhajha, Jamui, Bihar</span> —
              a passionate technologist who loves turning ideas into reality.
              With expertise in modern web technologies, I build fast, scalable,
              and beautiful digital solutions while mentoring aspiring
              developers.
            </p>

            <div className="hero-buttons">
              <Link to="/portfolio/about" className="btn-primary">
                Know More About Me →
              </Link>
              <a href="#projects" className="btn-secondary">
                View My Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://x.com/dkumarjaj"
                target="_blank"
                rel="noreferrer"
                title="X (Twitter)"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/dkuamrjaj"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://github.com/dkumarjaj"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dkumarjaj/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image-area">
            <img
              src={images[selectedImage]}
              className="polaroid"
              alt="Devendra Kumar"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <footer>
          <div className="scroll-indicator">
            <div className="scroll-line vertical" />
            <span>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
            <small>Local Time</small>

            <div className="scroll-line horizontal" />

            <span>5000+</span>
            <small>Digital Travelers</small>

            <div className="scroll-line vertical" />
          </div>
        </footer>
      </section>

      {/* ====================== NEW SECTIONS ====================== */}

      {/* Quick Stats / Highlights */}
      <section className="highlights">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>01</h3>
            <p>Mission: Keep Learning</p>
          </div>
          <div className="stat-item">
            <h3>{"{ }"}</h3>
            <p>Ideas truned into code</p>
          </div>
          <div className="stat-item">
            <h3>404</h3>
            <p>Limits Not Found</p>
          </div>
          <div className="stat-item">
            <h3>∞</h3>
            <p>Curiosity Level</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section id="projects" className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {/* Add 3-4 project cards here */}
          <div className="project-card">
            <h3>St. Columbus Public School Website</h3>
            <p>
              Designed and developed the official website for St. Columbus
              Public School, creating a modern digital platform that connects
              students, parents, and staff. The website simplifies access to
              admissions, announcements, and school activities while delivering
              a<strong> responsive user experience</strong>,
              <strong> optimized performance</strong>, and
              <strong> strong search engine visibility</strong>.
            </p>
            <Link to="/portfolio/projects/1">View Case Study →</Link>
          </div>
          <div className="project-card msmsystem">
            <h3>Multi-School Management System</h3>
            <p>
              Developed a comprehensive{" "}
              <strong> Multi-School Management System </strong>
              that enables educational institutions to manage academic and
              administrative operations from a centralized platform. Built with
              a<strong> multi-tenant architecture</strong>, the system
              streamlines attendance tracking, student records, teacher
              management, and secure access control through{" "}
              <strong>role-based authentication</strong>.
            </p>
            <Link to="/portfolio/projects/2">View Case Study →</Link>
          </div>
          {/* Repeat similar cards */}
        </div>
        <div className="text-center mt-4">
          <Link to="/portfolio/project" className="btn-primary">
            See All Projects
          </Link>
        </div>
      </section>

      {/* Skills / Tech Stack */}
      <section className="skills-section">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-grid">
          <span className="tech-tag">React</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Next.js</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Tailwind CSS</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">Docker</span>
          {/* Add more */}
        </div>
        <div className="text-center mt-4">
          <Link to="/portfolio/about#skills" className="btn-primary techs">
            Engineering Playground
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Let's Build Something Amazing Together</h2>
        <p>
          Currently open for collaborations, freelance projects, and mentorship
          opportunities.
        </p>
        <Link to="/portfolio/contact" className="btn-primary large">
          Get In Touch
        </Link>
      </section>
    </>
  );
};

export default Home;
