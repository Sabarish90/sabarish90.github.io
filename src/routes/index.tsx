import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  ArrowUpRight,
  BadgeCheck,
  Code2,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const LINKEDIN = "https://www.linkedin.com/in/sabarish-manikandan-55155128b";
const EMAIL = "sabari30596sabari@gmail.com";
const RESUME = "/Sabarish_M_Web_Developer_Resume.pdf";
const GITHUB = "https://github.com/Sabarish90";

const TITLE = "Sabarish M | Web Developer";
const DESCRIPTION =
  "Web Developer with 3+ years of experience in Duda CMS, HTML, CSS, JavaScript, responsive web development, custom widgets, and website optimization.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/favicon.png", type: "image/png" }],
  }),
  component: Portfolio,
});

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

const skillGroups: { title: string; skills: [string, string?][] }[] = [
  { title: "Frontend", skills: [["HTML5"], ["CSS3"], ["JavaScript ES6+"]] },
  {
    title: "CMS / Website Platforms",
    skills: [["Duda CMS / Duda Website Builder"], ["WordPress", "Working knowledge"], ["Web Publishing"], ["Website Maintenance"]],
  },
  { title: "Backend / Database", skills: [["PHP", "Basic"], ["MySQL", "Basic"]] },
  {
    title: "Integrations",
    skills: [["REST APIs"], ["EmailJS"], ["Google Sheets"], ["Airtable"], ["Zapier"]],
  },
  {
    title: "Other",
    skills: [
      ["Responsive Design"],
      ["Cross-Browser Compatibility"],
      ["SEO"],
      ["Core Web Vitals"],
      ["Git"],
      ["QA / Testing"],
    ],
  },
];

const achievements = [
  "Developed and published 15+ responsive business websites for clients in India and Australia.",
  "Built 20+ custom HTML/CSS/JavaScript widgets — animated hero sections, testimonials, stats counters, contact forms and footers — to extend Duda CMS.",
  "Managed the full website workflow: create, customize, update, QA, publish and maintain.",
  "Built a production homepage with 13 content sections, animated counters and scroll-reveal effects.",
  "Built an EmailJS contact form widget with a searchable 195-country dropdown and real-time validation.",
  "Built a pricing-automation prototype with Google Sheets, Airtable and Zapier.",
  "Optimized page speed, Core Web Vitals and on-page SEO; ran responsive and cross-browser testing.",
  "Maintained client websites with content updates, layout changes and first-line technical support.",
];

const projects = [
  {
    name: "SRM College, Trichy",
    category: "Institutional website",
    description:
      "A large institutional website with responsive layouts, structured department content, performance optimization and SEO considerations.",
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript", "SEO"],
    url: "https://www.srmtrichy.edu.in/",
    image: "/srm-trichy.png",
    alt: "SRM Institute of Science and Technology, Trichy website homepage",
  },
  {
    name: "Texcoms Worldwide",
    category: "Corporate / B2B website",
    description:
      "B2B machinery website with product catalogue, company profile, and a custom EmailJS contact form with international phone and country validation.",
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript", "EmailJS"],
    url: "https://www.texcomsworldwide.com/",
    image: "/texcoms-worldwide.png",
    alt: "Texcoms Worldwide corporate website homepage",
  },
  {
    name: "Stelios Restaurant",
    category: "Restaurant website",
    description:
      "Restaurant website with dynamic menu showcases and a mobile-optimized UI.",
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript"],
    url: "https://www.steliosrestaurant.com/",
    image: "/stelios-restaurant.png",
    alt: "Stelios Family Restaurant website homepage",
  },
  {
    name: "Maya Indian Catering",
    category: "Business / catering website",
    description:
      "A service-focused catering website presenting menus and inquiry options through a responsive, conversion-focused experience.",
    tags: ["Duda CMS", "HTML", "CSS", "JavaScript", "SEO"],
    url: "https://www.mayacater.com/",
    image: "/maya-catering.png",
    alt: "Maya Indian Catering website homepage",
  },
  {
    name: "US Electronics",
    category: "Corporate electronics website",
    description:
      "Corporate electronics website showcasing electronic components, custom power solutions, rechargeable battery systems, displays, and engineering-focused product solutions.",
    tags: [] as string[],
    url: "https://www.us-electronics.com/",
    image: "/us-electronics.png",
    alt: "US Electronics website homepage",
  },
];

const widgets = [
  "Custom HTML / CSS / JavaScript widgets",
  "Animated sections",
  "Counters",
  "Scroll reveal effects",
  "Forms",
  "Searchable country dropdown",
  "API integrations",
  "Reusable website components",
];

function SectionTitle({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mono-label">
        {index}. {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introTimer = window.setTimeout(() => setIntroVisible(false), reduceMotion ? 120 : 1800);

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(introTimer);
      reveal.disconnect();
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      {introVisible ? (
        <div className="portfolio-loader" role="status" aria-label="Loading Sabarish M portfolio">
          <span className="loader-corner loader-corner-tl" aria-hidden="true" />
          <span className="loader-corner loader-corner-tr" aria-hidden="true" />
          <span className="loader-corner loader-corner-bl" aria-hidden="true" />
          <span className="loader-corner loader-corner-br" aria-hidden="true" />

          <div className="loader-terminal">
            <div className="loader-mark" aria-hidden="true">
              <span>S</span>
            </div>
            <p className="loader-kicker">BOOT SEQUENCE</p>
            <p className="loader-name">sabarish.dev</p>
            <ol className="loader-steps" aria-hidden="true">
              <li><span>01</span>// ingress: sabarish.dev</li>
              <li><span>02</span>verify profile … ok</li>
              <li><span>03</span>hydrate portfolio … ok</li>
              <li><span>04</span>signal projects … ready</li>
            </ol>
          </div>

          <div className="loader-handoff" aria-hidden="true">
            <span>CHANNEL OPEN</span>
            <i />
            <span>AWAIT HANDOFF</span>
          </div>
        </div>
      ) : null}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <a href="#home" className="font-display text-lg font-bold" aria-label="Sabarish M, home">
            <span className="text-primary">&lt;</span>Sabarish
            <span className="text-primary"> /&gt;</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link" data-active={active === id}>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <a href={RESUME} target="_blank" rel="noopener noreferrer">
                <Download /> Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="container-x grid pb-5 md:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-border py-3 text-sm font-semibold ${
                  active === id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </a>
            ))}
            <div className="mt-4 flex gap-2">
              <Button asChild size="sm">
                <a href={RESUME} target="_blank" rel="noopener noreferrer">
                  <Download /> Resume
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </Button>
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero-bg relative flex min-h-[100svh] items-center pt-16">
          <div className="grid-dots pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="container-x relative grid items-center gap-10 py-12 md:grid-cols-[1.2fr_1fr] md:gap-8 lg:gap-14 lg:py-16">
            <div className="reveal is-visible min-w-0">
              <p className="mono-label">Hi, I'm Sabarish</p>
              <h1 className="mt-5 text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.2rem] lg:text-7xl">
                <span className="text-gradient">Web Developer</span>
                <span className="blink text-primary">_</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Web Developer with 3+ years of experience building responsive and user-focused
                websites using Duda CMS, HTML, CSS, and JavaScript.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap [&>a]:w-full sm:[&>a]:w-auto">
                <Button asChild size="lg">
                  <a href="#projects">
                    View Projects <ArrowRight />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={RESUME} target="_blank" rel="noopener noreferrer">
                    <Download /> Download Resume
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <Linkedin /> LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                    <Github /> GitHub
                  </a>
                </Button>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" /> Coimbatore, Tamil Nadu, India
              </p>
            </div>

            <div className="reveal is-visible card-surface w-full max-w-full min-w-0 box-border overflow-hidden font-mono text-[0.72rem] sm:text-sm">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-accent/80" />
                <span className="size-3 rounded-full bg-primary/80" />
                <span className="ml-3 text-xs text-muted-foreground">sabarish.js</span>
              </div>
              <pre className="whitespace-pre-wrap break-words p-4 leading-6 text-muted-foreground sm:p-6 sm:leading-7">
                <code>
                  <span className="text-accent">const</span> developer = {"{"}
                  {"\n"}  name: <span className="text-primary">"Sabarish M"</span>,
                  {"\n"}  role: <span className="text-primary">"Web Developer"</span>,
                  {"\n"}  experience: <span className="text-primary">"3+ years"</span>,
                  {"\n"}  stack: [<span className="text-primary">"HTML5"</span>,{" "}
                  <span className="text-primary">"CSS3"</span>,{" "}
                  <span className="text-primary">"JavaScript"</span>],
                  {"\n"}  cms: [<span className="text-primary">"Duda"</span>,{" "}
                  <span className="text-primary">"WordPress"</span>],
                  {"\n"}  focus: <span className="text-primary">"responsive, fast, SEO-ready"</span>,
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-pad border-t border-border bg-surface">
          <div className="container-x reveal">
            <SectionTitle index="01" label="About" title="About me" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm a <span className="text-foreground">Web Developer with 3+ years</span> of
                  hands-on experience building responsive, mobile-first business websites using
                  HTML5, CSS3 and JavaScript ES6+.
                </p>
                <p>
                  Much of my work is on <span className="text-foreground">Duda CMS / Duda Website
                  Builder</span>, where I create custom widgets and reusable components, integrate
                  APIs and handle ongoing website maintenance.
                </p>
                <p>
                  I also focus on SEO and Core Web Vitals so the websites I build stay fast and
                  discoverable.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 self-start md:grid-cols-1">
                {[
                  ["3+", "Years of experience"],
                  ["15+", "Responsive websites"],
                  ["20+", "Custom widgets"],
                ].map(([n, l]) => (
                  <div key={l} className="card-surface card-hover p-5">
                    <p className="font-display text-3xl font-bold text-gradient">{n}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-pad">
          <div className="container-x reveal">
            <SectionTitle index="02" label="Experience" title="Where I've worked" />
            <div className="relative border-l border-border pl-8 md:pl-12">
              <span className="absolute -left-[7px] top-2 size-3.5 rounded-full bg-primary shadow-[0_0_0_6px_var(--glow)]" />
              <div className="card-surface p-6 md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      Web Developer{" "}
                      <span className="text-muted-foreground">— Duda CMS &amp; Platform Developer</span>
                    </h3>
                    <p className="mt-1 font-semibold text-primary">Yectra Technologies</p>
                    <p className="mt-1 text-sm text-muted-foreground">Coimbatore, Tamil Nadu</p>
                  </div>
                  <span className="chip font-mono">2023 – Present</span>
                </div>
                <ul className="mt-7 grid gap-4 md:grid-cols-2">
                  {achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1 text-primary">▹</span>
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-pad border-y border-border bg-surface">
          <div className="container-x reveal">
            <SectionTitle index="03" label="Skills" title="Tools & technologies" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g) => (
                <article key={g.title} className="card-surface card-hover p-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Code2 className="size-5 text-primary" /> {g.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.skills.map(([s, level]) => (
                      <span key={s} className="chip">
                        {s}
                        {level ? (
                          <span className="rounded-full bg-accent/15 px-1.5 text-[0.68rem] text-accent">
                            {level}
                          </span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-pad">
          <div className="container-x">
            <div className="reveal">
              <SectionTitle index="04" label="Projects" title="Featured projects" />
            </div>
            <div className="grid gap-20 md:gap-28">
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  className="reveal grid items-center gap-8 md:grid-cols-12"
                >
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.name} website`}
                    className={`group card-surface block overflow-hidden md:col-span-7 ${
                      i % 2 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </a>
                  <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                    <p className="mono-label">
                      {String(i + 1).padStart(2, "0")} · {p.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{p.name}</h3>
                    <p className="mt-4 rounded-xl border border-border bg-card p-5 leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    {p.tags.length ? <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul> : null}
                    <Button asChild variant="outline" className="mt-6">
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        View Website <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WIDGETS */}
        <section className="section-pad border-y border-border bg-surface" aria-labelledby="widgets-title">
          <div className="container-x reveal">
            <div className="mb-12 md:mb-16">
              <p className="mono-label">05. Custom work</p>
              <h2 id="widgets-title" className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Custom components &amp; widgets
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Hand-built HTML, CSS and JavaScript solutions that extend what the CMS offers out of
                the box.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {widgets.map((w, i) => (
                <div key={w} className="card-surface card-hover p-5">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-6 font-display font-semibold leading-snug">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATION + EDUCATION */}
        <section id="certification" className="section-pad">
          <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="reveal">
              <p className="mono-label">06. Certification</p>
              <article className="card-surface mt-6 overflow-hidden">
                <div className="flex items-start gap-4 p-6 md:p-8">
                  <BadgeCheck className="size-8 shrink-0 text-primary" />
                  <div>
                    <h2 className="text-2xl font-semibold">Duda Developer Certified</h2>
                    <p className="mt-1 text-muted-foreground">Duda · Issued July 8, 2026</p>
                    <p className="text-sm text-muted-foreground">Valid through July 8, 2027 · Certificate No. 392439216</p>
                  </div>
                </div>
                <div className="border-t border-border bg-foreground/95 p-3">
                  <img
                    src="/duda-certificate.png"
                    alt="Duda Developer Certified credential issued by Duda to Sabarish M, valid through July 2027"
                    loading="lazy"
                    className="mx-auto block h-auto w-full max-w-md"
                  />
                </div>
              </article>
            </div>

            <div className="reveal">
              <p className="mono-label">07. Education</p>
              <div className="mt-6 grid gap-4">
                {[
                  ["MCA", "Bharathiar University", "In Progress · Expected 2026"],
                  ["B.Sc Computer Science", "Tamil Nadu", "Completed"],
                ].map(([deg, inst, when]) => (
                  <article key={deg} className="card-surface card-hover flex gap-4 p-6">
                    <GraduationCap className="size-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">{deg}</h3>
                      <p className="text-muted-foreground">{inst}</p>
                      <p className="mt-2 font-mono text-xs text-accent">{when}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-pad hero-bg border-t border-border">
          <div className="container-x reveal text-center">
            <p className="mono-label">08. What's next?</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Let's <span className="text-gradient">work together</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              I'm open to Web Developer, Front-End Developer and CMS Web Developer roles. My inbox
              is always open.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href={`mailto:${EMAIL}`}>
                  <Mail /> Say hello
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={RESUME} target="_blank" rel="noopener noreferrer">
                  <Download /> Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="size-4 text-primary" /> {EMAIL}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Coimbatore, Tamil Nadu, India
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <p>
            <span className="font-display font-semibold text-foreground">Sabarish M</span> · Web
            Developer
          </p>
          <nav className="flex gap-6" aria-label="Footer">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              GitHub
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-primary">
              Email
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
