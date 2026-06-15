import React from "react";
import "./App.css";
import profileImage from "./assets/IMG_6714.jpg";
import mdsaTeamImage from "./assets/2025-09-12 16.56.43 (1).jpg";
import mdsaEventImage from "./assets/photo_2025-03-13 00.13.43 (1).jpeg";
import mdsaBadgeImage from "./assets/photo_2025-03-13 00.13.55 (1).jpeg";
import workshopImage from "./assets/workshops.JPG";
import buildBridgePresentationImage from "./assets/build a bridge presentation.jpg";
import buildBridgeMeImage from "./assets/build bridge me.jpg";

const projects = [
  {
    title: "TTC Companion App",
    description:
      "Expo and TypeScript mobile app project with backend/proxy folders, speech-to-text backend work, and TTC real-time proxy integration. Built as a full-stack app structure with mobile-first development in mind.",
    tags: ["TypeScript", "JavaScript", "Expo", "Node.js", "Express"],
    repoUrl: "https://github.com/pzare2023/Build-a-bridge",
    presentationUrl: "https://canva.link/suaa72sauvy2t01",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Collection of Python machine learning projects covering decision trees, regression analysis, neural networks with Keras, and KMeans clustering on human activity sensor data.",
    tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas"],
    repoUrl: "https://github.com/pzare2023/Machine-Learning",
  },
  {
    title: "Ride and Pick-Up DBMS",
    description:
      "Database management system for a ride-sharing and delivery service, including ER/EER modeling, normalization to BCNF, Oracle SQL queries, shell scripting, and optional PHP/Python interfaces.",
    tags: ["Oracle DB", "SQL", "PL/SQL", "Bash", "Python", "PHP"],
    repoUrl: "https://github.com/pzare2023/Databases",
  },
  {
    title: "Bug Report System",
    description:
      "Team-built bug reporting system with user authentication, bug creation/editing/closing flows, Firebase backend services, email notifications, and a React frontend.",
    tags: ["React", "Firebase", "Vite", "Tailwind CSS", "Chakra UI"],
    repoUrl: "https://github.com/pzare2023/bug-reporting-system",
  },
];

const activities = [
  {
    date: "Jun 2025 – Present",
    title: "Event Coordinator — AWS Cloud Club TMU",
    description:
      "Coordinated and promoted student-led AWS Cloud Club events by creating Google Forms, sending invites, managing logistics, and sharing event content across social channels. Helped increase event visibility, student participation, and access to AWS-supported professional development and cloud technology resources.",
  },
  {
    date: "Jun 2024 – May 2025",
    title: "Director of Data Science — Metropolitan Data Science Association",
    description:
      "Led and created workshop content on SQL, Python with NumPy and pandas, and Power BI for 150+ students. Supported attendees during and after sessions, collaborated with the team to improve data science events based on feedback, and helped create networking opportunities with peers and industry professionals.",
  },
];

const activityImages = [
  {
    src: mdsaTeamImage,
    alt: "MDSA team members posing together at a campus event",
    caption: "MDSA team event",
  },
  {
    src: mdsaEventImage,
    alt: "Large student group photo during an MDSA event",
    caption: "Student networking event",
  },
  {
    src: mdsaBadgeImage,
    alt: "Director of Data Science name badge with flowers",
    caption: "Director of Data Science role",
  },
  {
    src: workshopImage,
    alt: "Students attending a data science workshop in a classroom",
    caption: "Workshop session",
  },
  {
    src: buildBridgePresentationImage,
    alt: "Build-a-Bridge team presenting the Transit Companion app",
    caption: "Build-a-Bridge presentation",
  },
  {
    src: buildBridgeMeImage,
    alt: "Parnia presenting during the Build-a-Bridge project showcase",
    caption: "Project showcase",
  },
];

const skills = [
  "Machine Learning",
  "System Design",
  "Laravel",
  "Vue.js",
  "Ionic Framework",
  "TypeScript",
  "JavaScript",
  "Prompt Engineering",
  "Python",
  "SQL",
  "Oracle DB",
  "Node.js",
  "Expo",
  "TensorFlow",
  "scikit-learn",
  "GitHub Pages",
];

const experience = [
  {
  date: "Jan 2026 – Present",
  title: "Machine Learning and Software Developer Intern — Twelve70",
  description:
    "Building AI-powered and frontend features for a fashion-tech web app focused on virtual wardrobes and outfit planning. Developed Gemini API garment recognition workflows, mapped detected clothing items to the platform taxonomy, improved multimodal prompts, created production garment assets, supported Vue/Ionic frontend work, and contributed to Amplitude analytics, UX testing, onboarding improvements, and TestFlight feedback.",
  linkUrl: "https://app.twelve70.com/",
  linkLabel: "View Twelve70 app",
  },
  {
    date: "Mar 2025 – Present",
    title:
      "Full-Stack Web Developer — National Plastic Heater- Freelancer",
    description:
      "Managed and troubleshot a customized HTML/CSS/MySQL website as a freelance developer, resolving 25+ technical issues across broken queries, layout bugs, uptime, and mobile responsiveness. Improved SEO, accessibility, metadata, keyword visibility, and performance across 20+ pages while delivering monthly technical reports that helped support organic traffic growth.",
  },
  {
    date: "Oct 2023 – May 2026",
    title: "Beauty Advisor — L'OCCITANE Group",
    description:
      "Exceeded monthly sales KPIs by 10-15% through tailored sales techniques, personalized skincare consultations, and strong client relationships. Supported boutique operations with Excel sales reporting, KPI analysis, customer outreach, and 1-3 monthly events, including VIP skincare masterclasses and brand collaborations, while using post-event insights to improve future customer engagement.",
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
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#activities">Activities</a>
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
          I enjoy building and learning new skills. My goal is to make everyday tasks easier through technology. Outside of tech, I enjoy scrap jounraling and crochet. I also have a passion for fashion which inspires the way i think about creativity design and deatils.
        </p>
      </section>

      <section
        className="section timeline"
        id="experience"
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
              <p className="timeline-description">{item.description}</p>
              {item.linkUrl && (
                <a
                  className="project-link"
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkLabel}
                </a>
              )}
            </article>
          ))}
        </div>
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
        <a
          className="project-link"
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
        {project.presentationUrl && (
          <a
            className="project-link"
            href={project.presentationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Presentation
          </a>
        )}
      </article>
    ))}
  </div>
</section>

<section
  className="section timeline"
  id="activities"
  aria-labelledby="activities-heading"
>
  <div className="section-heading">
    <p className="section-kicker">Volunteer & Clubs</p>
    <h2 id="activities-heading">Leadership beyond the classroom</h2>
  </div>

  <div className="timeline-list">
    {activities.map((item) => (
      <article key={`${item.date}-${item.title}`}>
        <p className="timeline-date">{item.date}</p>
        <h3>{item.title}</h3>
        <p className="timeline-description">{item.description}</p>
      </article>
    ))}
  </div>

  <div className="activity-gallery" aria-label="Activity photos">
    {activityImages.map((image) => (
      <figure key={image.caption} className="activity-photo">
        <img src={image.src} alt={image.alt} />
        <figcaption>{image.caption}</figcaption>
      </figure>
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

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-heading">Let us connect.</h2>
        <div className="contact-links">
          <a href="https://github.com/pzare2023" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/parnia-zare/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:zzz.parnia@gmail.com">Email</a>
          <a href="#home">Back to top</a>
        </div>
      </section>
    </main>
  );
}

export default App;
