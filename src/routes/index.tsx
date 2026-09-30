import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import resumeAsset from "@/assets/Sabarish-M-Resume.pdf.asset.json";
import dudaAsset from "@/assets/duda-developer-certified.png.asset.json";
import mayaAsset from "@/assets/maya-catering.png.asset.json";
import srmAsset from "@/assets/srm-trichy.png.asset.json";
import steliosAsset from "@/assets/stelios-restaurant.png.asset.json";
import texcomsAsset from "@/assets/texcoms-worldwide.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sabarish M — Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sabarish M, a Web Developer with 3+ years of experience building responsive websites, custom components and CMS solutions.",
      },
      { property: "og:title", content: "Sabarish M — Web Developer" },
      {
        property: "og:description",
        content: "Selected web development work, professional experience and skills of Sabarish M.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Certification", "certification"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  {
    number: "01",
    title: "Front-end development",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Web Design", "Mobile-First Design", "Cross-Browser Compatibility"],
  },
  {
    number: "02",
    title: "CMS & platforms",
    skills: ["Duda CMS", "Duda Website Builder", "WordPress — developing knowledge", "CMS Management", "Website Maintenance"],
  },
  {
    number: "03",
    title: "Web development",
    skills: ["Website Customization", "Custom Widgets", "Reusable Components", "API Integration", "EmailJS", "Google Sheets", "Airtable", "Zapier Automation"],
  },
  {
    number: "04",
    title: "SEO, performance & tools",
    skills: ["On-Page SEO", "Core Web Vitals", "Page Speed Optimization", "Technical SEO", "Google Analytics", "Git", "QA Testing", "Agile Delivery", "PHP — basic", "MySQL — basic"],
  },
] as const;

const projects = [
  {
    number: "01",
    name: "SRM Institute of Science and Technology — Trichy",
    category: "Institutional website",
    description: "A large institutional website with responsive layouts, structured department content, performance optimization and SEO considerations.",
    contribution: ["Website development", "Responsive layouts", "Website customization", "Content structure", "Performance optimization", "SEO"],
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript", "SEO"],
    url: "https://www.srmtrichy.edu.in/",
    image: srmAsset.url,
    alt: "SRM Institute of Science and Technology Trichy website homepage",
  },
  {
    number: "02",
    name: "Texcoms Worldwide",
    category: "Corporate / B2B website",
    description: "A professional corporate website for a textile solutions company with structured content, responsive layouts and custom components.",
    contribution: ["Website development", "Responsive UI", "Custom components", "Contact form integration", "EmailJS", "SEO & performance"],
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript", "EmailJS"],
    url: "https://www.texcomsworldwide.com/",
    image: texcomsAsset.url,
    alt: "Texcoms Worldwide corporate website homepage",
  },
  {
    number: "03",
    name: "Stelios Restaurant",
    category: "Restaurant website",
    description: "A responsive restaurant website focused on services, menu information and catering options through a mobile-friendly experience.",
    contribution: ["Website development", "Responsive UI", "Mobile optimization", "Website customization", "Content implementation"],
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript"],
    url: "https://www.steliosrestaurant.com/",
    image: steliosAsset.url,
    alt: "Stelios Family Restaurant website homepage",
  },
  {
    number: "04",
    name: "Maya Indian Catering",
    category: "Business / catering website",
    description: "A service-focused catering website presenting menus and inquiry options through a responsive, conversion-focused experience.",
    contribution: ["Website development", "Responsive design", "Landing page development", "Inquiry forms", "Website customization", "On-page SEO"],
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript", "SEO"],
    url: "https://www.mayacater.com/",
    image: mayaAsset.url,
    alt: "Maya Indian Catering website homepage",
  },
] as const;

const components = [
  [Sparkles, "Animated hero sections"],
  [Layers3, "Testimonials"],
  [ArrowUpRight, "Statistics counters"],
  [Mail, "Contact forms"],
  [Code2, "Custom footers"],
  [BriefcaseBusiness, "Lead generation forms"],
  [Github, "HTML / CSS / JavaScript widgets"],
] as const;

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
    return () => reveal.disconnect();
  }, []);

  return (
    <main id="home" className="portfolio-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#home" aria-label="Sabarish M, home">
            SM<span>.</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <Button asChild variant="ghost" size="sm" className="desktop-action">
              <a href="https://www.linkedin.com/in/sabarish-manikandan-55155128b" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            </Button>
            <Button asChild size="sm" className="desktop-action">
              <a href={resumeAsset.url} target="_blank" rel="noreferrer"><Download /> Résumé</a>
            </Button>
            <Button variant="outline" size="icon" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href={resumeAsset.url} target="_blank" rel="noreferrer">Download résumé <Download /></a>
            <a href="https://www.linkedin.com/in/sabarish-manikandan-55155128b" target="_blank" rel="noreferrer">LinkedIn <Linkedin /></a>
          </nav>
        ) : null}
      </header>

      <section className="hero-section">
        <div className="hero-grid-line hero-line-one" />
        <div className="hero-grid-line hero-line-two" />
        <div className="hero-content reveal is-visible">
          <div className="availability"><span /> Open to web development opportunities</div>
          <p className="hero-kicker">Hello, I’m Sabarish M</p>
          <h1>WEB<br /><span>DEVELOPER</span></h1>
          <div className="hero-copy">
            <p>Building responsive, modern and user-focused websites using front-end technologies and CMS platforms.</p>
            <p>3+ years of professional experience in web development, responsive websites, CMS platforms, custom components and web integrations.</p>
          </div>
          <div className="hero-actions">
            <Button asChild size="lg"><a href="#projects">View my work <ArrowDown /></a></Button>
            <Button asChild variant="outline" size="lg"><a href={resumeAsset.url} target="_blank" rel="noreferrer">Download résumé <Download /></a></Button>
            <a className="text-link" href="https://www.linkedin.com/in/sabarish-manikandan-55155128b" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">01 <span>/ 07</span></div>
      </section>

      <section id="about" className="section light-section reveal">
        <SectionHeading eyebrow="About" title="Engineering the web with clarity and purpose." />
        <div className="about-grid">
          <div className="about-lead">
            <p>I am a Web Developer with 3+ years of hands-on experience building responsive business websites, custom web components and CMS-based websites.</p>
          </div>
          <div className="about-detail">
            <p>My work brings together HTML5, CSS3 and JavaScript with responsive design, custom widgets, API integrations and CMS platforms—including professional experience with Duda.</p>
            <p>I also focus on EmailJS integrations, on-page SEO, Core Web Vitals and dependable website maintenance. I’m currently developing hands-on WordPress knowledge alongside PHP and MySQL fundamentals.</p>
            <div className="fact-row">
              <div><strong>3+</strong><span>Years in web development</span></div>
              <div><strong>15+</strong><span>Responsive websites delivered</span></div>
              <div><strong>20+</strong><span>Custom widgets maintained</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section dark-section reveal">
        <SectionHeading eyebrow="Capabilities" title="A practical toolkit for production-ready websites." intro="Focused skills, applied through real client work—not percentage bars." />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.number}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section light-section reveal">
        <SectionHeading eyebrow="Experience" title="Three years of turning requirements into reliable websites." />
        <div className="experience-grid">
          <div className="experience-meta">
            <span className="timeline-dot" />
            <p>2022 — Present</p>
            <h3>Web Developer</h3>
            <p>Yectra Technologies</p>
            <p>Coimbatore, Tamil Nadu, India</p>
          </div>
          <div className="achievement-grid">
            {[
              "Designed and developed 15+ responsive business websites.",
              "Built and maintained 20+ custom HTML, CSS and JavaScript widgets.",
              "Developed custom animated website components and landing pages.",
              "Built contact forms with EmailJS and international phone validation.",
              "Worked directly with clients across India and Australia.",
              "Optimized page speed, Core Web Vitals and on-page SEO.",
              "Performed ongoing website maintenance and technical support.",
              "Gathered requirements and iterated through client feedback cycles.",
            ].map((item, index) => (
              <div className="achievement" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section reveal">
        <SectionHeading eyebrow="Selected work" title="Four websites. Four distinct business needs." intro="Real projects presented with the original website screenshots." />
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-case ${index % 2 ? "project-reverse" : ""}`} key={project.name}>
              <a className="project-visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live website`}>
                <img src={project.image} alt={project.alt} />
                <span>View live website <ArrowUpRight /></span>
              </a>
              <div className="project-copy">
                <div className="project-label"><span>{project.number}</span><p>{project.category}</p></div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <h4>My contribution</h4>
                <ul>{project.contribution.map((item) => <li key={item}><span />{item}</li>)}</ul>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Button asChild variant="outline"><a href={project.url} target="_blank" rel="noreferrer">View live website <ExternalLink /></a></Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section components-section reveal">
        <SectionHeading eyebrow="Custom web components" title="20+ reusable components built and maintained." intro="Scoped, practical HTML, CSS and JavaScript solutions that extend native CMS capabilities." />
        <div className="component-grid">
          {components.map(([Icon, title], index) => (
            <article className="component-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon /><h3>{title}</h3></article>
          ))}
        </div>
      </section>

      <section id="certification" className="section credentials-section reveal">
        <div className="credential-column">
          <p className="eyebrow">Certification</p>
          <article className="certificate-card">
            <BadgeCheck />
            <div><span>Duda · Issued July 2026</span><h2>Duda Developer Certified</h2><p>Valid through July 2027</p><small>Certificate no. 392439216</small></div>
            <figure className="certificate-figure">
              <img
                src={dudaAsset.url}
                alt="Duda Developer Certified credential awarded to Sabarish M, certificate no. 392439216, issued by Duda, valid through 2027-07-08"
                loading="lazy"
              />
            </figure>
          </article>
        </div>
        <div className="credential-column">
          <p className="eyebrow">Education</p>
          <article className="education-item"><GraduationCap /><div><h3>Master of Computer Applications</h3><p>Bharathiar University, Tamil Nadu</p><span>In progress · Expected 2026</span></div></article>
          <article className="education-item"><GraduationCap /><div><h3>B.Sc Computer Science</h3><p>Tamil Nadu, India</p><span>2016</span></div></article>
        </div>
      </section>

      <section id="contact" className="contact-section reveal">
        <p className="eyebrow">Contact</p>
        <h2>LET’S <span>CONNECT.</span></h2>
        <p className="contact-intro">I’m open to Web Developer, Front-End Developer and CMS-based web development opportunities.</p>
        <div className="contact-actions">
          <Button asChild size="lg"><a href="mailto:sabari30596sabari@gmail.com"><Mail /> Email me</a></Button>
          <Button asChild variant="outline" size="lg"><a href="https://www.linkedin.com/in/sabarish-manikandan-55155128b" target="_blank" rel="noreferrer"><Linkedin /> Connect on LinkedIn</a></Button>
          <Button asChild variant="ghost" size="lg"><a href={resumeAsset.url} target="_blank" rel="noreferrer"><Download /> Download résumé</a></Button>
        </div>
        <div className="contact-details">
          <a href="mailto:sabari30596sabari@gmail.com"><Mail /> sabari30596sabari@gmail.com</a>
          <a href="tel:+916369425065"><Phone /> +91 63694 25065</a>
        </div>
      </section>

      <footer>
        <div><a className="wordmark" href="#home">SM<span>.</span></a><p>Sabarish M · Web Developer</p></div>
        <nav aria-label="Footer navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <p>© 2026 Sabarish M. All rights reserved.</p>
      </footer>
    </main>
  );
}