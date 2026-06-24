import { useState } from "react";
import "../styles/Gallery.css";
import { Helmet } from "react-helmet-async";

// Import your images
import Dev1 from "../assets/images/dev1.jpg";
import Dev2 from "../assets/images/dev2.jpeg";
import Dev3 from "../assets/images/dev3.jpeg";
import Dev4 from "../assets/images/dev4.jpeg";
import Dev5 from "../assets/images/dev5.jpeg";
import Dev6 from "../assets/images/dev6.jpeg";
// Add more imports as needed
// import Tree from "../assets/images/tree.jpg"; etc.

const categories = [
  "All",
  "Code & Creations",
  "Nature & Plantation",
  "Learning Journey",
  "Achievements",
  "Experiments & Innovation",
  "Behind The Build",
];

const galleryItems = [
  {
    id: 1,
    title: "School Management System",
    category: "Code & Creations",
    image: Dev1,
    desc: "Full-stack web application built with React & Node.js",
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    category: "Nature & Plantation",
    image: Dev2,
    desc: "Community initiative with 500+ saplings planted",
  },
  {
    id: 3,
    title: "Tree Plantation Drive",
    category: "Achievements",
    image: Dev3,
    desc: "Community initiative with 500+ saplings planted",
  },
  {
    id: 4,
    title: "Tree Plantation Drive",
    category: "Experiments & Innovation",
    image: Dev4,
    desc: "Community initiative with 500+ saplings planted",
  },
  {
    id: 5,
    title: "Tree Plantation Drive",
    category: "Behind The Build",
    image: Dev5,
    desc: "Community initiative with 500+ saplings planted",
  },
  {
    id: 6,
    title: "Tree Plantation Drive",
    category: "Nature & Plantation",
    image: Dev6,
    desc: "Community initiative with 500+ saplings planted",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentIndex =
    selectedImage !== null
      ? filteredItems.findIndex((item) => item.id === selectedImage)
      : -1;

  const goToPrev = () => {
    if (currentIndex > 0) setSelectedImage(filteredItems[currentIndex - 1].id);
  };

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1].id);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Life Beyond Code | Devendra Kumar - Learning, Nature & Creativity
        </title>

        <meta
          name="description"
          content="Explore the personal journey of Devendra Kumar beyond programming. Discover nature and plantation activities, achievements, learning experiences, experiments, innovation projects, and moments behind the build."
        />

        <meta
          name="keywords"
          content="
    Devendra Kumar Gallery,
    Life Beyond Code,
    Devendra Kumar Achievements,
    Devendra Kumar Plantation,
    Nature and Plantation Bihar,
    Learning Journey,
    Personal Portfolio Gallery,
    Technology Enthusiast Bihar,
    Creative Projects,
    Innovation Projects,
    Behind The Build,
    Jhajha Bihar,
    Harhanja Bihar,
    Devendra Kumar Photos,
    Personal Journey,
    Experiments and Innovation
    "
        />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1b2631" />

        <link
          rel="canonical"
          href="https://dkumarjaj.jackjohan7520.workers.dev/portfolio/life-beyond-code"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Life Beyond Code | Devendra Kumar" />

        <meta
          property="og:description"
          content="A visual journey through learning, nature, achievements, innovation, and experiences beyond technology."
        />

        <meta
          property="og:url"
          content="https://dkumarjaj.jackjohan7520.workers.dev/portfolio/life-beyond-code"
        />

        <meta
          property="og:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Life Beyond Code | Devendra Kumar"
        />

        <meta
          name="twitter:description"
          content="Explore achievements, plantation activities, learning moments, innovation projects and experiences beyond programming."
        />

        <meta
          name="twitter:image"
          content="https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",

            name: "Life Beyond Code",

            headline: "Life Beyond Code",

            description:
              "A gallery showcasing learning journeys, achievements, plantation activities, innovation projects, and personal experiences of Devendra Kumar.",

            url: "https://dkumarjaj.jackjohan7520.workers.dev/portfolio/life-beyond-code",

            author: {
              "@type": "Person",
              name: "Devendra Kumar",
              url: "https://dkumarjaj.jackjohan7520.workers.dev/portfolio",
            },

            about: [
              "Nature & Plantation",
              "Learning Journey",
              "Achievements",
              "Experiments & Innovation",
              "Creative Projects",
              "Technology",
              "Personal Growth",
            ],

            image:
              "https://dkumarjaj.jackjohan7520.workers.dev/android-chrome-512x512.png",
          })}
        </script>
      </Helmet>
      <section className="gallery-section">
        <div className="gallery-header">
          <p className="gallery-subtitle">Visual Journey</p>
          <h2>Creative Gallery</h2>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => {
            const count =
              category === "All"
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === category).length;

            return (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category} <span className="count">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              className="gallery-card"
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="image-container">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="category-tag">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <div className="lightbox-image-container">
                <img
                  src={filteredItems.find((i) => i.id === selectedImage)?.image}
                  alt="Enlarged view"
                />
              </div>

              <div className="lightbox-info">
                <h3>
                  {filteredItems.find((i) => i.id === selectedImage)?.title}
                </h3>
                <p>{filteredItems.find((i) => i.id === selectedImage)?.desc}</p>
              </div>

              <button className="nav-btn prev" onClick={goToPrev}>
                ←
              </button>
              <button className="nav-btn next" onClick={goToNext}>
                →
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
