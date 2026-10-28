import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, ArrowUp, Bot, Brain, Briefcase, Code2, Database, Github, GraduationCap,
  Linkedin, Mail, Menu, Rocket, Terminal, X, Wrench, Cpu, Sparkles,
} from "lucide-react";
import avatarUrl from "@/assets/avatar.png";
import { LINKS, NAV, SERVICES, SKILLS } from "@/components/portfolio/data";
import { CampusFindPreview, SonarPreview, UniConnectPreview } from "@/components/portfolio/Previews";

const TITLE = "Dhruv Dash | AI and machine learning developer";
const DESC =
  "Dhruv Dash is an artificial intelligence and machine learning student focused on computer vision, model evaluation, and web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActive() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function Btn({ href, children, variant = "primary", external }: { href: string; children: ReactNode; variant?: "primary" | "ghost"; external?: boolean }) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
  const v = variant === "primary"
    ? "bg-gradient-brand text-primary-foreground shadow-glow"
    : "border border-border bg-card/60 text-foreground hover:border-primary/50";
  return <a href={href} className={`${base} ${v}`} {...(external ? ext : {})}>{children}</a>;
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="reveal mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground">{children}</span>;
}

function Header() {
  const active = useActive();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="font-mono text-sm font-medium">
          <span className="text-accent">~/</span>dhruv<span className="text-primary">.dash</span>
        </a>
        <ul className="hidden gap-1 md:flex">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${active === id ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-md p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-border bg-background px-5 py-3 md:hidden">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 ${active === id ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

const CODE = [
  ["from", " ultralytics ", "import", " YOLO"],
  ["model", " = YOLO(", "\"yolo11n.pt\"", ")"],
  ["model", ".train(data=", "\"sonar.yaml\"", ", epochs=30)"],
  ["#", " mAP@50 → 0.850", "", ""],
];

const RAIN = Array.from({ length: 72 }, (_, i) => ({
  left: `${(i * 37 + (i % 5) * 19) % 100}%`,
  delay: `${-((i * 17) % 90) / 10}s`,
  duration: `${6 + ((i * 13) % 55) / 10}s`,
  opacity: 0.2 + ((i * 7) % 6) / 10,
}));

function CodeCard() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setN(CODE.length);
    const t = setInterval(() => setN((v) => (v >= CODE.length ? 0 : v + 1)), 1100);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="card-surface w-full max-w-sm p-4 font-mono text-xs shadow-glow backdrop-blur" aria-label="Code snippet training a YOLO model">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" /><span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 text-muted-foreground">train.py</span>
      </div>
      {CODE.map((l, i) => (
        <p key={i} className={`leading-6 transition-opacity duration-500 ${i < n ? "opacity-100" : "opacity-0"}`}>
          {l[0] === "#" ? <span className="text-muted-foreground">{l[0]}{l[1]}</span> : (
            <><span className="text-violet">{l[0]}</span>{l[1]}<span className="text-accent">{l[2]}</span>{l[3]}</>
          )}
        </p>
      ))}
      <span className="animate-blink inline-block h-3.5 w-1.5 bg-primary align-middle" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> AI and machine learning · Software development · Founder
          </p>
          <h1 className="reveal mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Developing <span className="text-gradient">practical AI systems.</span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I’m Dhruv Dash, an Artificial Intelligence and Machine Learning student focused on computer vision, model evaluation, and AI applications. I develop practical prototypes that connect technical ideas with real use cases.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <Btn href="#projects">Explore My Work <ArrowRight size={16} /></Btn>
            <Btn href="#contact" variant="ghost">Contact Me</Btn>
          </div>
          <div className="reveal mt-8 flex gap-4 text-muted-foreground">
            <a href={LINKS.github} {...ext} aria-label="GitHub profile" className="contact-flip hover:text-foreground"><Github size={20} /></a>
            <a href={LINKS.linkedin} {...ext} aria-label="LinkedIn profile" className="contact-flip hover:text-foreground"><Linkedin size={20} /></a>
            <a href={LINKS.email} aria-label="Send email" className="contact-flip hover:text-foreground"><Mail size={20} /></a>
          </div>
        </div>
        <div className="reveal relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="animate-float relative overflow-hidden rounded-[2rem] border border-border">
            <img src={avatarUrl} width={1254} height={1254} alt="Dhruv's illustrated developer avatar" className="aspect-square w-full object-cover" />
          </div>
          <div className="relative -mt-16 ml-auto mr-[-0.5rem] flex justify-end sm:mr-[-2rem]"><CodeCard /></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const hl = [
    [Brain, "AI & Machine Learning", "Deep learning, model training and evaluation"],
    [Cpu, "Computer Vision", "Object detection with YOLO on real datasets"],
    [Code2, "Full-stack Web", "Next.js, React, Tailwind and Firebase"],
    [Rocket, "Founder mindset", "Director at Lendrix Ventech Pvt Ltd"],
  ] as const;
  return (
    <Section id="about" eyebrow="01 · About" title={<>Building through <span className="text-gradient">experimentation.</span></>}>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>I’m pursuing a B.Tech in Artificial Intelligence and Machine Learning at <span className="text-foreground">Sri Sri University in Odisha</span>. My technical interests include computer vision, model development, and practical software.</p>
          <p>I’m also Founder and Director of <span className="text-foreground">Lendrix Ventech Pvt Ltd</span>, where I contribute to business direction and explore opportunities for technology to support new ventures.</p>
          <p>My approach is hands on: build a prototype, evaluate its performance, and improve it through iteration. I’m interested in developing useful AI products and software.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {hl.map(([Icon, t, d]) => (
            <div key={t} className="reveal card-surface glow-border p-5">
              <Icon className="text-primary" size={22} />
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const ICONS = { brain: Brain, code: Code2, bot: Bot };

function Services() {
  return (
    <Section id="services" eyebrow="02 · Services" title="What I'd love to help you build.">
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <article key={s.title} className="reveal card-surface glow-border flex flex-col p-7 transition-transform hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><Icon size={20} /></div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.items.map((i) => <li key={i} className="flex gap-2"><span className="text-accent">▹</span>{i}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">{s.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <a href={`${LINKS.email}?subject=${encodeURIComponent(`Inquiry: ${s.title}`)}`} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                Start a conversation <ArrowRight size={14} />
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "UniConnect", cat: "Student networking platform with AI features", preview: <UniConnectPreview />,
      desc: "A student networking platform concept with profile creation and AI generated summaries. CareerBot, the career guidance assistant, remains in development.",
      status: [["Implemented", "Student profiles and AI generated summaries"], ["In development", "CareerBot career guidance assistant"]],
      tech: ["Next.js", "React", "Tailwind CSS", "Firebase / Firestore", "Framer Motion"],
      link: "https://github.com/Robin288/UniConnect", linkLabel: "View repository",
    },
    {
      title: "Sonar Object Detection", cat: "AI / Computer Vision", preview: <SonarPreview />,
      desc: "Prepared a four class dataset of side scan sonar images, trained YOLO11n, and evaluated its object detection performance.",
      metrics: [["Precision", "0.902"], ["Recall", "0.827"], ["mAP@50", "0.850"], ["mAP@50–95", "0.701"]],
      tech: ["Python", "YOLO11n", "PyTorch", "Ultralytics", "Computer Vision"],
      link: LINKS.github, linkLabel: "Browse my GitHub profile",
    },
    {
      title: "CampusFind", cat: "Campus utility · Web application", preview: <CampusFindPreview />,
      desc: "A campus lost and found application concept that lets students post item reports and browse listings shared by others.",
      tech: ["Next.js", "Firebase", "Firebase Auth", "Firestore", "Tailwind CSS"],
      link: LINKS.github, linkLabel: "Browse my GitHub profile",
    },
  ];
  return (
    <Section id="projects" eyebrow="03 · Projects" title="Featured work.">
      <div className="space-y-8">
        {projects.map((p, idx) => (
          <article key={p.title} className="reveal card-surface glow-border grid overflow-hidden transition-all hover:-translate-y-1 hover:shadow-glow lg:grid-cols-2">
            <div className={`h-60 border-b border-border bg-background/60 lg:h-auto lg:min-h-80 lg:border-b-0 ${idx % 2 ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>{p.preview}</div>
            <div className="flex flex-col p-7 md:p-9">
              <p className="font-mono text-xs text-accent">{p.cat}</p>
              <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
              {p.status && (
                <dl className="mt-5 space-y-2 text-sm">
                  {p.status.map(([k, v]) => <div key={k} className="flex flex-wrap gap-x-2"><dt className="font-mono text-xs leading-5 text-violet">{k}:</dt><dd>{v}</dd></div>)}
                </dl>
              )}
              {p.metrics && (
                <>
                  <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {p.metrics.map(([k, v]) => (
                      <div key={k} className="rounded-lg border border-border bg-secondary p-3">
                        <dt className="font-mono text-[10px] text-muted-foreground">{k}</dt>
                        <dd className="mt-1 text-lg font-semibold text-gradient">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 font-mono text-[11px] text-muted-foreground">Validation results after 30 training epochs. These results do not guarantee performance in real world use.</p>
                </>
              )}
              <div className="mt-5 flex flex-wrap gap-1.5">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <a href={p.link} {...ext} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-primary">
                <Github size={16} /> {p.linkLabel} <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const icons = [Brain, Code2, Database, Wrench, Briefcase];
  return (
    <Section id="skills" eyebrow="04 · Skills" title="Tools I work with.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((g, i) => {
          const Icon = icons[i];
          return (
            <div key={g.title} className="reveal card-surface p-6">
              <div className="flex items-center gap-3">{Icon && <Icon size={18} className="text-accent" /> }<h3 className="font-semibold">{g.title}</h3></div>
              <div className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          );
        })}
        <div className="reveal flex items-center gap-3 rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
          <Sparkles size={18} className="shrink-0 text-violet" /> Currently exploring language model integrations and workflow automation.
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const items = [
    { icon: Rocket, role: "Founder and Director", org: "Lendrix Ventech Pvt Ltd", date: "July 2025 to present",
      desc: "Contribute to business direction across wealth management, real estate, marketplaces, and startup advisory. Explore ways technology can support these services." },
    { icon: Terminal, role: "AI and software projects", org: "Academic and personal work", date: "Ongoing",
      desc: "Develop web applications, computer vision models, and digital tools through academic and independent projects." },
    { icon: GraduationCap, role: "B.Tech, Artificial Intelligence & Machine Learning", org: "Sri Sri University, Odisha", date: "Expected 2028",
      desc: "Apply coursework in machine learning and computer science to practical software projects." },
  ];
  return (
    <Section id="experience" eyebrow="05 · Journey" title="Education & experience.">
      <ol className="relative ml-4 border-l border-border">
        {items.map((it) => (
          <li key={it.role} className="reveal relative pb-12 pl-10 last:pb-0">
            <span className="absolute -left-[18px] grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-primary"><it.icon size={16} /></span>
            <p className="font-mono text-xs text-accent">{it.date}</p>
            <h3 className="mt-1 text-xl font-semibold">{it.role}</h3>
            <p className="text-muted-foreground">{it.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="reveal relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 text-center md:p-16">
        <div className="absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-violet/20 blur-[100px]" />
        <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-accent">06 · Contact</p>
        <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">Have a project in mind? <span className="text-gradient">Let’s discuss it.</span></h2>
        <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">I welcome conversations about artificial intelligence, software development, and emerging technology products.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Btn href={LINKS.email}><Mail size={16} /> {LINKS.emailText}</Btn>
          <Btn href={LINKS.linkedin} variant="ghost" external><Linkedin size={16} /> LinkedIn</Btn>
          <Btn href={LINKS.github} variant="ghost" external><Github size={16} /> GitHub</Btn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Dhruv Dash. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href={LINKS.github} {...ext} aria-label="GitHub" className="contact-flip hover:text-foreground"><Github size={18} /></a>
          <a href={LINKS.linkedin} {...ext} aria-label="LinkedIn" className="contact-flip hover:text-foreground"><Linkedin size={18} /></a>
          <a href={LINKS.email} aria-label="Email" className="contact-flip hover:text-foreground"><Mail size={18} /></a>
          <a href="#home" className="back-to-top inline-flex items-center gap-1 hover:text-foreground">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.append(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <>
      <div className="grid-bg page-rain" aria-hidden="true">
        {RAIN.map((drop, i) => <span key={i} className="rain-drop" style={{ left: drop.left, animationDelay: drop.delay, animationDuration: drop.duration, opacity: drop.opacity }} />)}
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero /><About /><Services /><Projects /><Skills /><Experience /><Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
