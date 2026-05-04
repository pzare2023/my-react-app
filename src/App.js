import React from "react";
import "./App.css";
import profileImage from "./assets/IMG_6714.jpg";
const projects = [
  {
    title: "Build-a-bridge",
    description:
      "Expo and TypeScript mobile app project with backend/proxy folders, speech-to-text backend work, and TTC real-time proxy integration. Built as a full-stack app structure with mobile-first development in mind.",
    tags: ["TypeScript", "JavaScript", "Expo", "Node.js", "Express"],
  },
  {
    title: "Machine Learning Projects",
    description:
      "Collection of Python machine learning projects covering decision trees, regression analysis, neural networks with Keras, and KMeans clustering on human activity sensor data.",
    tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas"],
  },
  {
    title: "Ride and Pick-Up DBMS",
    description:
      "Database management system for a ride-sharing and delivery service, including ER/EER modeling, normalization to BCNF, Oracle SQL queries, shell scripting, and optional PHP/Python interfaces.",
    tags: ["Oracle DB", "SQL", "PL/SQL", "Bash", "Python", "PHP"],
  },
  {
    title: "Bug Report System",
    description:
      "Team-built bug reporting system with user authentication, bug creation/editing/closing flows, Firebase backend services, email notifications, and a React frontend.",
    tags: ["React", "Firebase", "Vite", "Tailwind CSS", "Chakra UI"],
  },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "SQL",
  "Oracle DB",
  "Firebase",
  "Node.js",
  "Express",
  "Expo",
  "Keras",
  "TensorFlow",
  "scikit-learn",
  "Pandas",
  "GitHub Pages",
];

const experience = [
  {
  date: "Jan 2026 – Present",
  title: "Machine Learning and Software Developer Intern — Twelve70",
  description:
    "Building AI-powered and frontend features for a fashion-tech web app focused on virtual wardrobes and outfit planning. Developed Gemini API garment recognition workflows, mapped detected clothing items to the platform taxonomy, improved multimodal prompts, created production garment assets, supported Vue/Ionic frontend work, and contributed to Amplitude analytics, UX testing, onboarding improvements, and TestFlight feedback.",
  },
  {
    date: "2026",
    title: "Mobile App Development",
    description:
      "Built and maintained a TypeScript/Expo app structure with backend services, API/proxy folders, and mobile development tooling.",
  },
  {
    
    date: "2026",
    title: "Portfolio Website",
    description:
      "Converted a React school project into a personal portfolio, built the production version, and deployed it through GitHub Pages.",
  },
  {
    date: "2025",
    title: "Machine Learning Practice",
    description:
      "Completed supervised and unsupervised learning projects using Python, including classification, regression, neural networks, clustering, PCA, and model evaluation.",
  },
  {
    date: "2024–2025",
    title: "Database and Web Development Projects",
    description:
      "Worked on database design, SQL, normalization, shell scripting, React/Firebase development, and web development labs across course and team projects.",
  },
];

function App() {
  return (
    <main className="portfolio">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home">
          Parnia Zare Portfolio
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">Student Developer Portfolio</p>
          <h1>Hi, I'm Parnia and I love to build creative web experiences.</h1>
          <p className="hero-copy">
            I’m a Computer Science student at Toronto Metropolitan University with a passion for data science and machine learning. I’m a fast learner who thrives on exploring new skills and technologies. Through my role as a ML & software developer Intern at Twelve70 , I’ve gained valuable hands-on experience that strengthened both my technical and problem-solving abilities. I’m actively involved on campus and love contributing to meaningful projects that create a positive impact.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <aside className="profile-panel" aria-label="Profile picture">
          <img src={profileImage} alt="Parnia Zare" className="profile-image" />
        </aside>
      </section>

      <section className="section about" aria-labelledby="about-heading">
        <div>
          <p className="section-kicker">About</p>
          <h2 id="about-heading">A growing software developer with practical project experience.</h2>
        </div>
        <p>
          I enjoy learning how websites are planned, built, tested, and
          deployed. My goal is to keep improving my React skills while creating
          projects that are easy to use, easy to understand, and ready to share.
        </p>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-heading">
  <div className="section-heading">
    <p className="section-kicker">Work</p>
    <h2 id="projects-heading">Featured Projects</h2>
  </div>

  <div className="project-grid">
    {projects.map((project) => (
      <article className="project-card" key={project.title}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-list" aria-label={`${project.title} tools`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>

<section
  className="section split-section"
  id="skills"
  aria-labelledby="skills-heading"
>
  <div>
    <p className="section-kicker">Skills</p>
    <h2 id="skills-heading">Tools and strengths I am building.</h2>
    <p>
      I am building practical experience across full-stack web development,
      mobile app development, databases, and machine learning through class,
      team, and personal projects.
    </p>
  </div>

  <div className="skill-list">
    {skills.map((skill) => (
      <span key={skill}>{skill}</span>
    ))}
  </div>
</section>

<section
  className="section timeline"
  aria-labelledby="experience-heading"
>
  <div className="section-heading">
    <p className="section-kicker">Experience</p>
    <h2 id="experience-heading">Learning by building</h2>
  </div>

  <div className="timeline-list">
    {experience.map((item) => (
      <article key={`${item.date}-${item.title}`}>
        <p className="timeline-date">{item.date}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </article>
    ))}
  </div>
</section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-heading">Let us connect.</h2>
        <p>
          Update this section with your school email, LinkedIn, resume, or any
          other link you want visitors to use.
        </p>
        <div className="contact-links">
          <a href="https://github.com/pzare2023" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:zzz.parnia@gmail.com">Email</a>
          <a href="#home">Back to top</a>
        </div>
      </section>
    </main>
  );
}

export default App;
