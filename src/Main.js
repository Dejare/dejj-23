import React, { useState } from "react";
import "./assets/styles/main.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import img from "./assets/images/dejj.jpg";
import Nav from "./components/Nav";
import gnd from "./assets/images/gnd.jpg";
import musica from "./assets/images/musica.jpg";
import mallet from "./assets/images/malletNFT.jpg";
import evaluate from "./assets/images/02.jpg";
import adejare from "./assets/images/06.jpg";
import NewProjectCard from "./components/NewProjectCard";
import Clock from "./components/Clock";
import usePageAnimations from "./assets/PageAnimation";

const SERVICES = [
  {
    n: "01",
    title: "Frontend Development",
    desc: "I curate immersive web experiences with various technologies — the one you're on right now, for example, is built in React too.",
    tags: ["React", "Custom code"],
  },
  {
    n: "02",
    title: "Digital Design",
    desc: "Designing for the web is not static. It's about interactions, animations, usability, consistency and so much more.",
    tags: ["Web design", "SCSS"],
  },
  {
    n: "03",
    title: "Art Direction",
    desc: "When overlooking a creative process, the overlap between aesthetics and function has my full attention.",
    tags: ["Concepting", "Art direction"],
  },
  {
    n: "04",
    title: "Interaction Design",
    desc: "Have a frontend project already built and need some help with refining animations and interactions? I got you.",
    tags: ["Animations", "Interactions"],
  },
];

const FACTS = [
  "Self-taught front-end developer",
  "Computer Engineering — Federal University of Technology, Akure",
  "Based in Lagos, working with people all over the world",
];

const Main = () => {
  const [navOpen, setNavOpen] = useState(false);

  usePageAnimations();

  return (
    <div className="relative w-full bg-ink font-body text-bone" id="home">
      <div className="grain" aria-hidden="true" />

      {/* header */}
      <header
        data-header=""
        className="fixed inset-x-0 top-0 z-[100] text-bone mix-blend-difference"
      >
        <div className="flex items-center justify-between px-5 py-5 md:px-10">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="heading text-lg uppercase tracking-display md:text-xl"
            aria-label="Adejare — back to top"
          >
            Adejare<span>©</span>
          </a>
          <p className="hidden items-center gap-3 text-[11px] uppercase tracking-label md:flex">
            Lagos, NG
            <span className="[font-variant-numeric:tabular-nums]">
              <Clock />
            </span>
          </p>
          <button
            type="button"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            className="flex items-center gap-3 text-[11px] uppercase tracking-label transition-transform duration-200 ease-out active:scale-95"
          >
            {navOpen ? "Close" : "Menu"}
            {navOpen ? <TfiClose size={18} /> : <HiOutlineMenuAlt4 size={22} />}
          </button>
        </div>
      </header>

      {navOpen && <Nav closeNav={() => setNavOpen(false)} />}

      <main>
        {/* hero */}
        <section className="px-5 pt-28 md:px-10 md:pt-36">
          <div
            className="flex items-center justify-between border-b border-white/10 pb-4 text-[11px] uppercase tracking-label text-muted"
            data-hero-fade=""
          >
            <p>Adejare Daniels</p>
            <p className="hidden md:block">Front-End Developer &amp; Creative Director</p>
            <p>Lagos, Nigeria</p>
          </div>

          <h1 className="heading mt-8 uppercase leading-[0.84] tracking-display md:mt-12">
            <span className="hero-line">
              <span className="hero-line-inner text-[clamp(4rem,15.2vw,15rem)]">
                Adejare
              </span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner text-outline text-[clamp(4rem,15.2vw,15rem)]">
                Front-End
              </span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner text-[clamp(4rem,15.2vw,15rem)]">
                <img
                  src={img}
                  alt="Portrait of Adejare"
                  className="mx-[0.06em] inline-block h-[0.62em] w-[1.15em] rounded-full object-cover align-[-0.06em]"
                />
                Developer<span className="text-accent">©</span>
              </span>
            </span>
          </h1>

          <div className="mt-12 flex items-end justify-between gap-10 md:mt-16">
            <p
              className="max-w-xl text-lg leading-snug text-bone/90 md:text-2xl"
              data-hero-fade=""
            >
              Hey, I&rsquo;m Adejare. I curate immersive experiences with
              technology and work with people all over the world to create
              tailor-made websites and applications.
            </p>
            <div className="relative hidden h-28 w-28 shrink-0 md:block" data-hero-fade="">
              <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slower">
                <defs>
                  <path
                    id="badge-circle"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text className="fill-bone text-[8.5px] uppercase tracking-[0.16em]">
                  <textPath href="#badge-circle" textLength="236">
                    Open to work • Let&rsquo;s talk • Open to work •
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-accent">
                <FiArrowDown size={20} />
              </span>
            </div>
          </div>
        </section>

        {/* marquee */}
        <div className="mt-16 overflow-hidden border-y border-white/10 py-4 md:mt-24" aria-hidden="true">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            {[0, 1].map((half) => (
              <span
                key={half}
                className="heading pr-2 uppercase leading-none text-2xl text-bone/85 md:text-4xl"
              >
                {"Front-End Developer ✦ Creative Director ✦ Adejare ✦ ".repeat(3)}
              </span>
            ))}
          </div>
        </div>

        {/* about */}
        <section id="about" className="px-5 py-24 md:px-10 md:py-36">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h2
              className="heading uppercase leading-[0.85] text-[clamp(3.4rem,10vw,9rem)]"
              data-reveal=""
            >
              About me
            </h2>
            <span className="heading pt-3 text-xl text-accent md:text-2xl">(01)</span>
          </div>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <div data-parallax-wrap="" className="overflow-hidden rounded-[24px]">
                <div data-clip="" className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px]">
                  <img
                    src={img}
                    alt="Portrait of Adejare"
                    data-parallax=""
                    className="absolute left-0 top-[-12%] h-[124%] w-full object-cover"
                  />
                </div>
              </div>
              <ul className="mt-8">
                {FACTS.map((fact) => (
                  <li
                    key={fact}
                    className="border-t border-white/10 py-4 text-sm leading-relaxed text-bone/75 last:border-b"
                    data-fade=""
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-8 md:pl-6">
              <p className="max-w-[26ch] text-2xl leading-[1.2] text-bone md:text-4xl" data-fade="">
                I&rsquo;m Adejare Daniels — a self-taught front-end developer
                and school-taught computer engineer, now a graduate of the
                Federal University of Technology, Akure.
              </p>
              <p
                className="mt-12 text-2xl leading-[1.3] text-bone md:mt-16 md:text-[2.5rem]"
                data-words=""
              >
                As a creative developer, I focus on design, development and
                functionality, which allows me to work on projects from
                concept until the very moment I hit publish. Unique layouts,
                great typography and a clean, reusable, readable codebase —
                that is what I focus on when working on websites.
              </p>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="button mt-14 inline-flex items-center gap-2 rounded-full border border-bone/30 px-7 py-3.5 text-[11px] uppercase tracking-label text-bone transition-colors duration-300 ease-out hover:bg-bone hover:text-ink"
                data-fade=""
              >
                Explore my work
                <FiArrowDown size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* services */}
        <section id="services" className="px-5 py-24 md:px-10 md:py-36">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h2
              className="heading max-w-[10ch] uppercase leading-[0.85] text-[clamp(3.4rem,10vw,9rem)]"
              data-reveal=""
            >
              Here&rsquo;s what I do
            </h2>
            <span className="heading pt-3 text-xl text-accent md:text-2xl">(02)</span>
          </div>

          <div className="mt-14 md:mt-20">
            {SERVICES.map((s) => (
              <div
                key={s.n}
                className="service-row group border-t border-white/10 last:border-b"
                data-fade=""
              >
                <div className="relative z-[1] grid items-start gap-4 px-1 py-9 md:grid-cols-12 md:items-center md:px-4 md:py-11">
                  <span className="heading text-sm text-accent md:col-span-1">
                    ({s.n})
                  </span>
                  <h3 className="heading uppercase leading-[0.92] text-3xl transition-colors duration-300 group-hover:text-ink md:col-span-5 md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="body max-w-[48ch] leading-relaxed text-bone/70 transition-colors duration-300 group-hover:text-ink/75 md:col-span-4 md:text-lg">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-bubble group-hover:border-ink/40 group-hover:text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="px-5 py-24 md:px-10 md:py-36">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h2 className="heading uppercase leading-[0.85] text-[clamp(3.4rem,10vw,9rem)]">
              <span data-reveal="">Selected Works</span>
              <sup className="ml-4 align-super font-head text-[0.22em] tracking-normal text-accent">
                (05)
              </sup>
            </h2>
            <span className="heading pt-3 text-xl text-accent md:text-2xl">(03)</span>
          </div>
          <p className="body mt-8 max-w-[52ch] text-lg text-bone/70" data-fade="">
            Here are some of my past works — each one designed, built and
            shipped end to end.
          </p>

          <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-40">
            <NewProjectCard
              index={1}
              title="Mallet!"
              details="A simple landing page for an NFT trading organization"
              stackOne="Framer"
              image={mallet}
              link="https://mallet.vercel.app/"
            />
            <NewProjectCard
              index={2}
              title="Musicaa V1.0"
              details="An online music streaming platform with search and sort functionality consuming spotify's API"
              stackOne="Spotify"
              stackTwo="API's"
              image={musica}
              link="https://musicaa.vercel.app"
              flip={true}
            />
            <NewProjectCard
              index={3}
              title="GND Crypto"
              details="An online dashboard for cryptocurrency transactions (mock numbers) with state management"
              stackOne="Redux"
              stackTwo="API's"
              image={gnd}
              link="https://dashboard-dejare.vercel.app"
            />
            <NewProjectCard
              index={4}
              title="Evaluate V1.0"
              details="An all round intuitive, precise testing systems for students"
              stackOne="Supabase"
              image={evaluate}
              link="https://evaluattee.vercel.app"
              flip={true}
            />
            <NewProjectCard
              index={5}
              title="Adejare V1.0"
              details="The last version of my previous portfolio.."
              image={adejare}
              link="https://adejarree.vercel.app/"
            />
          </div>
        </section>
      </main>

      {/* footer */}
      <footer id="contact" className="bg-bone px-5 pb-8 pt-24 text-ink md:px-10 md:pt-32">
        <div
          className="flex flex-col justify-between gap-2 text-[11px] uppercase tracking-label text-ink/60 md:flex-row"
          data-fade=""
        >
          <p>Frontend Developer — Portfolio 2023</p>
          <p>Available for full-time work</p>
        </div>

        <h2
          className="heading mt-14 uppercase leading-[0.85] text-[clamp(3.2rem,10.5vw,10.5rem)]"
          data-fade=""
        >
          Interested in
          <br />
          working <span className="footer-emoji">✌🏾</span>
          <br />
          together?
        </h2>

        <div className="mt-14" data-fade="">
          <p className="text-[11px] uppercase tracking-label text-ink/60">
            Drop me an email
          </p>
          <a
            href="mailto:inioluwaadesida@gmail.com"
            className="link-line mt-2 inline-block text-2xl md:text-4xl"
          >
            inioluwaadesida@gmail.com
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-3" data-fade="">
          <a
            className="c-button"
            href="https://www.linkedin.com/in/adejarree/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="c-button"
            href="https://www.github.com/dejare"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="c-button"
            href="https://twitter.com/Therealnicron?t=if7WE8sL0Lb5S-MNkK7Lrg&s=09"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>

        <div className="mt-16 overflow-hidden md:mt-20">
          <p
            data-wordmark=""
            className="heading text-center uppercase leading-[0.78] text-[clamp(4.2rem,17.4vw,17.5rem)]"
          >
            Adejare<span className="text-accent">©</span>
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-3 border-t border-ink/15 pt-5 text-sm text-ink/60 md:flex-row md:items-center">
          <p>&copy; 2023 — All Rights Reserved</p>
          <p className="hidden md:block">
            Lagos :{" "}
            <span className="[font-variant-numeric:tabular-nums]">
              <Clock />
            </span>{" "}
            — Developed by Adejare
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="button flex items-center gap-2 uppercase tracking-label text-ink/80 transition-colors duration-200 hover:text-accent"
          >
            Back to top
            <FiArrowUp size={14} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Main;
