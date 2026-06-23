import "../styles/contact.css";
import { useState } from "react";

import { Helmet } from "react-helmet-async";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: null as "success" | "error" | null,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    let isValid = true;

    const nameRegex = /^[A-Za-z]{3,}(?:\s[A-Za-z]{3,})?$/;
    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name =
        "Name must be at least 3 characters and not contain Number";
      isValid = false;
    }

    // Email
    const emailRegex = /^[a-zA-Z0-9._]{3,}@[a-zA-Z0-9-]{3,}(\.[a-zA-Z]{2,})+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Phone (Optional)
    if (formData.phone.trim() && !/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number and start with 6,7,8 or 9";
      isValid = false;
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleWhatsAppSend = () => {
    const text = `Hi Devendra! 👋

I am ${formData.name} and I want to talk about "${formData.subject}".

📝 Message:
${formData.message}

📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

Sent from your portfolio website.`;

    const whatsappUrl = `https://wa.me/919142003626?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      return;
    }

    handleWhatsAppSend();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon ✨",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Devendra Kumar | Full-Stack Developer</title>

        <meta
          name="description"
          content="Get in touch with Devendra Kumar, a Full-Stack Developer from Jhajha, Bihar. Contact for internships, freelance projects, collaborations, web development services, or technology discussions."
        />
        <meta
          name="description"
          content="Contact Devendra Kumar, Full-Stack Developer, Computer Science Educator, and technology enthusiast from Jhajha, Bihar. Available for web development projects, technical guidance, computer science teaching, internships, and collaborations."
        />

        <meta
          name="keywords"
          content="
Devendra Kumar,
Devendra Kumar Jhajha,
Devendra Kumar Bihar,
Contact Devendra Kumar,
Computer Science Teacher Jhajha,
Computer Teacher Jhajha,
Computer Instructor Jhajha,
Programming Teacher Jhajha,
Software Engineer Jhajha,
Full Stack Developer Bihar,
MERN Stack Developer India,
React Developer Bihar,
Node.js Developer Bihar,
Web Developer Jhajha,
Technology Educator Bihar,
Computer Science Educator,
Coding Teacher Bihar,
Developer From Jhajha,
Developer From Bihar,
Freelance Web Developer,
Website Developer Bihar,
Contact Software Engineer,
Technical Mentor Jhajha,
Computer Classes Jhajha,
Software Development Services,
BharatTechForce,
Bharat Tech Force, Jhajha, Jamui
DKumarJaj
"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://dkumarjaj.jackjohan7520.workers.dev/portfolio/contact"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Contact Devendra Kumar | Full-Stack Developer"
        />

        <meta
          property="og:description"
          content="Let's connect. Reach out to Devendra Kumar for web development projects, collaborations, internships, freelance opportunities, and technical discussions."
        />

        <meta
          property="og:url"
          content="https://dkumarjaj.jackjohan7520.workers.dev/portfolio/contact"
        />

        <meta
          property="og:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Contact Devendra Kumar | Software Engineer"
        />

        <meta
          name="twitter:description"
          content="Contact Devendra Kumar for projects, collaborations, internships, freelance work, and software development opportunities."
        />

        <meta
          name="twitter:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",

            name: "Contact Devendra Kumar",

            description:
              "Contact page for Devendra Kumar, Full-Stack Developer and Software Engineer.",

            url: "https://dkumarjaj.jackjohan7520.workers.dev/portfolio/contact",

            mainEntity: {
              "@type": "Person",

              name: "Devendra Kumar",

              alternateName: [
                "DKumarJaj",
                "Devendra Kumar Bihar",
                "Devendra Kumar Jhajha",
                "Computer Teacher Devendra",
              ],

              jobTitle: [
                "Software Engineer",
                "Full-Stack Developer",
                "MERN Stack Developer",
                "Computer Science Mentor",
              ],

              email: "mailto:dkumar06545@gmail.com",

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
            },
          })}
        </script>
      </Helmet>

      <section className="contact-page">
        {/* Hero */}
        <div className="contact-hero">
          <span className="contact-tag">Get In Touch</span>

          <h1>
            Let's Build Something
            <span> Amazing</span>
          </h1>

          <p>
            Have an idea, opportunity, or question? <br />
            My inbox is always open for meaningful conversations.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:dkumar06545@gmail.com">dkumar06545@gmail.com</a>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <a
              href="https://maps.app.goo.gl/KYYNdenoCybcMo3j6"
              target="_blank"
              rel="noreferrer"
            >
              Harhanja, Jhajha, Bihar
            </a>
          </div>
          <div className="contact-card">
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/9142003626?text=Hi%20Devendra!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Chat
            </a>
          </div>

          <div className="contact-card">
            <h3>Let's Build</h3>
            <p>
              Currently available for internships, freelance projects,
              collaborations, and exciting tech challenges.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h2>Connect Online</h2>

          <div className="social-links">
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter/X"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrapper">
          <h2>Send a Message</h2>

          <form className="contact-form" id="contact" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="field-error">{errors.name}</span>}

            <div className="half">
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className="field-error">{errors.email}</span>
              )}
            </div>

            <div className="half">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="field-error">{errors.phone}</span>
              )}
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell me about your idea, project, or how I can help... *"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <span className="field-error">{errors.message}</span>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

        {/* Map */}
        <div className="map-wrapper">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18087.1788486688!2d86.39657961534742!3d24.822564222606072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f17831b31c3f2b%3A0x40409e098528c563!2sTola%20Harhanja%2C%20Bihar%20811308!5e1!3m2!1sen!2sin!4v1782122637168!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* CTA */}
        <div className="contact-cta">
          <h2>Ready To Create Something Great?</h2>

          <p>
            Every successful project starts with a conversation. Let's discuss
            your ideas and turn them into reality.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Talk
          </button>
        </div>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} dkumarjaj | All rights reserved
          </p>
          <p>Designed & Developed by Devendra Kumar | BharatTechForce</p>
        </footer>
      </section>
    </>
  );
}

export default Contact;
