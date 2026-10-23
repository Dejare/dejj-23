import React, { useState, useEffect } from "react";
import "./assets/styles/main.scss";
import { HiOutlineMenuAlt4, HiArrowCircleUp } from "react-icons/hi";
import { TbCornerRightDown } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import img from "./assets/images/dejj.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav";
import gnd from "./assets/images/gnd.jpg";
import musica from "./assets/images/musica.jpg";
import mallet from "./assets/images/malletNFT.jpg";
import evaluate from "./assets/images/02.jpg";
import adejare from "./assets/images/06.jpg";
import NewProjectCard from "./components/NewProjectCard";
import ButtonOne from "./components/ButtonOne";
import PageAnimation from "./assets/PageAnimation";
import iconOne from "./assets/images/iconOne.svg";
import iconTwo from "./assets/images/iconTwo.svg";
import iconThree from "./assets/images/iconThree.svg";
import iconFour from "./assets/images/iconFour.svg";
import Clock from "./components/Clock";
import HeropageAnimation from "./assets/HeropageAnimation";

gsap.registerPlugin(ScrollTrigger);

const COLOR_MODES = [
  { name: "Charcoal", value: "#292929", swatch: "bg-[#292929]" },
  { name: "Deep red", value: "#2d0b04", swatch: "bg-[#2d0b04]" },
  { name: "Deep green", value: "#152a21", swatch: "bg-[#152a21]" },
];

const Main = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [colorModeVisible, setColorModeVisible] = useState(false);

  PageAnimation();
  // HeropageAnimation()

  useEffect(() => {
    if (!colorModeVisible) return;
    gsap.fromTo(
      "#colorPicker",
      { x: 24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
    );
  }, [colorModeVisible]);

  const applyColorMode = (value) => {
    document.body.style.backgroundColor = value;
    setColorModeVisible(false);
  };

  return (
    <div className="w-full text-bone">
      {/* header */}
      <div className="sticky top-3 z-50 mx-auto w-full max-w-[1440px] px-3 md:top-5 md:px-6">
        <header
          id="header"
          className="w-full justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-5"
        >
          <a href="/" className="heading text-lg tracking-display" aria-label="Adejare — home">
            Adejare<span className="text-accent">™</span>
          </a>
          <div className="flex flex-row items-center gap-2 md:gap-3">
            {colorModeVisible && (
              <div
                id="colorPicker"
                className="flex items-center justify-center gap-1 rounded-full bg-white/[0.04] px-3 py-2 shadow-[inset_0_0_0_1px_#ffffff14]"
                role="group"
                aria-label="Colour mode"
              >
                {COLOR_MODES.map((mode) => (
                  <button
                    key={mode.name}
                    type="button"
                    aria-label={`${mode.name} background`}
                    className={`h-6 w-6 rounded-full shadow-[inset_0_0_0_1px_#ffffff2e] transition-transform duration-200 ease-out hover:scale-110 active:scale-95 ${mode.swatch}`}
                    onClick={() => applyColorMode(mode.value)}
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              aria-expanded={colorModeVisible}
              className="rounded-full bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-label text-bone shadow-[inset_0_0_0_1px_#ffffff14] transition-colors duration-200 ease-out hover:bg-white/10 active:scale-95 md:px-5"
              onClick={() => setColorModeVisible(!colorModeVisible)}
            >
              Color mode
            </button>

            <nav
              role="button"
              tabIndex={0}
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setNavOpen(!navOpen);
                }
              }}
            >
              {navOpen ? <TfiClose size={18} /> : <HiOutlineMenuAlt4 size={20} />}
            </nav>
          </div>
        </header>
      </div>

      {navOpen ? (
        <Nav closeNav={() => setNavOpen(false)} />
      ) : (
        <>
          {/* hero */}
          <div data-scroll>
            <div className="relative flex h-[35vh] w-full items-center overflow-hidden text-[#ffffffb4] md:h-[60vh]">
              <div className="crawling-line crawling-line--large font-head heading inline-flex whitespace-nowrap uppercase md:text-[350px] text-[250px]">
                <div
                  className="inline-block animate-[crawling-line_30s_linear_infinite] align-top"
                  data-line="0"
                  letters-slide-down=""
                  text-split=""
                  id="intro"
                >
                  Frontend Developer &amp; creative director &nbsp;
                </div>
                <div
                  className="mx-8 inline-block animate-[crawling-line_30s_linear_infinite] align-top"
                  data-line="1"
                  letters-slide-down=""
                  text-split=""
                  aria-hidden="true"
                >
                  Frontend Developer &amp; creative director &nbsp;
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1440px] flex-row items-center justify-between px-5 pb-2 text-[11px] uppercase tracking-label text-muted md:px-10">
              <p>
                Adejare Daniels <span className="text-accent">—</span> Lagos, Nigeria
              </p>
              <p className="hidden items-center gap-2 md:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for work
              </p>
            </div>
          </div>

          {/* intro card + portrait */}
          <section
            className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-3 py-5 md:flex-row md:px-6"
            id="firstCard"
          >
            <div className="order-2 flex min-h-[70vh] w-full flex-col items-start justify-between rounded-[28px] bg-paper p-7 text-ink md:order-1 md:min-h-[88vh] md:w-[58%] md:p-10">
              <h2 className="text-xl font-normal md:text-3xl">
                Hey, I&rsquo;m Adejare. I curate immersive experiences with
                technology and work with people all over the world to create
                tailor-made websites and applications.
              </h2>
              <a
                href="#about"
                className="button flex flex-row items-center rounded-full border border-ink uppercase text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
              >
                a bit about me
                <span className="ml-3 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-paper md:ml-4">
                  <TbCornerRightDown />
                </span>
              </a>
            </div>
            <div className="order-1 w-full md:order-2 md:w-[42%]">
              <img
                src={img}
                alt="Portrait of Adejare"
                className="h-[60vh] w-full rounded-[28px] object-cover md:h-full md:min-h-[88vh]"
              />
            </div>
          </section>

          {/* about */}
          <div className="mt-10" id="about">
            <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
              <hr className="border-white/10" />
              <div className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:py-20">
                <div className="w-full md:w-4/12">
                  <h2
                    className="heading text-4xl uppercase md:text-7xl"
                    id="aboutHead"
                    words-slide-down=""
                    text-split=""
                  >
                    About me
                  </h2>
                </div>
                <div className="body w-full text-lg text-bone/85 md:w-7/12 md:text-2xl">
                  <p id="abouBody" className="max-w-[62ch]">
                    I&rsquo;m Adejare Daniels. I am a self-taught Front-end
                    Developer and school taught computer engineer. I&rsquo;m
                    currently a student of the Federal University Of
                    Technology, Akure. <br /> As a creative developer, I focus
                    on both design, development and functionality — allowing me
                    to work on projects from concept until the very moment I
                    hit publish. Unique layouts, functionality, great
                    typography, clean, reuseable and readable codebase is what
                    I focus on when working on websites.
                  </p>
                </div>
              </div>

              <hr className="border-white/10" />
              <div className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:py-20">
                <div className="w-full md:w-4/12">
                  <h2
                    className="heading text-4xl uppercase md:text-7xl"
                    id="aboutHead"
                    words-slide-down=""
                    text-split=""
                  >
                    Here&rsquo;s what I do
                  </h2>
                </div>
                <div className="body w-full text-xl md:w-7/12 md:text-2xl">
                  <div className="service-cards">
                    <div className="service-card">
                      <div>
                        <div className="service-c_icon-w">
                          <img src={iconOne} loading="lazy" alt="" className="service-c_icon" />
                        </div>
                        <h3 className="heading-small">Frontend Development</h3>
                      </div>
                      <div>
                        <p className="service-c_p text-lg">
                          I curate immersive web experience&rsquo;s with
                          various technologies, The one you&rsquo;re on right
                          now, for example, is built in REACT too.
                        </p>
                        <div className="service-c_buttons">
                          <div className="text-bubble">react</div>
                          <div className="text-bubble">custom code</div>
                        </div>
                      </div>
                      <div className="service-c_bg"></div>
                    </div>
                    <div className="service-card">
                      <div>
                        <div className="service-c_icon-w">
                          <img src={iconTwo} loading="lazy" alt="" className="service-c_icon" />
                        </div>
                        <h3 className="heading-small">Digital Design</h3>
                      </div>
                      <div>
                        <p className="service-c_p text-lg">
                          Designing for the web is not static. It&rsquo;s about
                          interactions, animations, usability, consistency and
                          so much more.
                        </p>
                        <div className="service-c_buttons">
                          <div className="text-bubble">web design</div>
                          <div className="text-bubble">SCSS</div>
                        </div>
                      </div>
                      <div className="service-c_bg"></div>
                    </div>
                    <div className="service-card">
                      <div>
                        <div className="service-c_icon-w">
                          <img src={iconThree} loading="lazy" alt="" className="service-c_icon" />
                        </div>
                        <h3 className="heading-small">Art Direction</h3>
                      </div>
                      <div>
                        <p className="service-c_p text-lg">
                          When overlooking a creative process, the overlap
                          between aesthetics and function has my full attention.
                        </p>
                        <div className="service-c_buttons">
                          <div className="text-bubble">concepting</div>
                          <div className="text-bubble">art direction</div>
                        </div>
                      </div>
                      <div className="service-c_bg"></div>
                    </div>
                    <div className="service-card">
                      <div>
                        <div className="service-c_icon-w">
                          <img src={iconFour} loading="lazy" alt="" className="service-c_icon" />
                        </div>
                        <h3 className="heading-small">Interaction Design</h3>
                      </div>
                      <div>
                        <p className="service-c_p text-lg">
                          Have a frontend project already built and need some
                          help with refining animations and interactions? I got
                          you.
                        </p>
                        <div className="service-c_buttons">
                          <div className="text-bubble">animations</div>
                          <div className="text-bubble">interactions</div>
                        </div>
                      </div>
                      <div className="service-c_bg"></div>
                    </div>
                  </div>
                  <a
                    href="#project"
                    className="button mt-8 flex w-fit flex-row items-center rounded-full border border-bone/60 text-lg uppercase text-bone transition-colors duration-300 ease-out hover:bg-paper hover:text-ink"
                  >
                    explore my work
                    <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-paper text-ink">
                      <TbCornerRightDown />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* projects */}
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10" id="projects">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="heading text-5xl uppercase md:text-8xl" id="aboutHead">
                Projects
                <sup className="ml-3 align-super font-body text-lg tracking-label text-accent md:text-2xl">
                  (05)
                </sup>
              </h2>
              <p className="body pb-2 text-muted">Here are some of my past works..</p>
            </div>
            <div id="project" className="my-4"></div>
            <div>
              <NewProjectCard
                title="Mallet!"
                details="A simple landing page for an NFT trading organization"
                stackOne="Framer"
                stackTwo="Null"
                image={mallet}
                link="https://mallet.vercel.app/"
              />
              <NewProjectCard
                title="Musicaa V1.0"
                details="An online music streaming platform with search and sort functionality consuming spotify's API"
                stackOne="Spotify"
                stackTwo="API's"
                image={musica}
                link="https://musicaa.vercel.app"
              />
              <NewProjectCard
                title="GND Crypto"
                details="An online dashboard for cryptocurrency transactions (mock numbers) with state management "
                stackOne="Redux"
                stackTwo="API's"
                image={gnd}
                link="https://dashboard-dejare.vercel.app"
              />
              <NewProjectCard
                title="Evaluate V1.0"
                details="An all round intuitive, precise testing systems for students"
                stackOne="Supabase"
                image={evaluate}
                link="https://evaluattee.vercel.app"
                displayTwo="none"
              />
              <NewProjectCard
                projectclassName={"projectOne"}
                title="Adejare V1.0"
                details="The last version of my previous portfolio.."
                image={adejare}
                link="https://adejarree.vercel.app/"
                display="none"
                displayTwo="none"
              />
            </div>
          </div>

          {/* footer */}
          <footer
            className="relative m-auto mb-12 flex h-[85vh] w-[93vw] max-w-[1440px] flex-col items-center justify-between rounded-[28px] bg-paper p-6 text-ink md:h-[90vh] md:p-10"
            id="contact"
            bg-expand=""
          >
            <div className="flex w-full flex-col items-center justify-between md:flex-row">
              <p className="text-center leading-relaxed text-ink/70">
                Frontend Developer <br />
                Portfolio 2023
              </p>
              <p className="heading hidden text-ink md:block">Adejare</p>
              <p className="mt-5 text-center leading-relaxed text-ink/70 md:mt-0 md:text-right">
                Available for full-time work
                <br /> October 2023
              </p>
            </div>

            <div className="relative text-center">
              <h2
                className="heading footer-text text-center md:text-[180px] text-8xl leading-[5rem] md:leading-[10rem] uppercase text-ink"
                letters-slide-down=""
                text-split=""
              >
                Interested in <br />
                working together?
              </h2>
              <span className="footer-emoji" aria-hidden="true">
                ✌🏾
              </span>
              <p className="mt-10 text-sm uppercase tracking-label text-ink/60">
                Drop me an email
              </p>
              <a
                href="mailto:inioluwaadesida@gmail.com"
                className="mt-1 inline-block text-xl text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 ease-out hover:text-accent md:text-2xl"
              >
                inioluwaadesida@gmail.com
              </a>
            </div>

            <div className="mt-4 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-col items-center text-sm text-ink/70 md:items-start">
                <p className="hidden md:block">
                  LAGOS :{" "}
                  <span className="[font-variant-numeric:tabular-nums]">
                    <Clock />
                  </span>
                </p>
                <p className="hidden md:block">Developed by Adejare</p>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center">
                <ButtonOne
                  btnText={"Linkedin"}
                  link={"https://www.linkedin.com/in/adejarree/"}
                />
                <ButtonOne btnText="Github" link={"https://www.github.com/dejare"} />
                <ButtonOne
                  btnText="Twitter"
                  link={"https://twitter.com/Therealnicron?t=if7WE8sL0Lb5S-MNkK7Lrg&s=09"}
                />
              </div>

              <div className="flex flex-col items-center justify-center text-center text-sm text-ink/70 md:items-end md:text-right">
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex flex-row items-center transition-colors duration-200 ease-out hover:text-accent active:scale-95"
                >
                  <span className="mr-1 md:mr-2">
                    <HiArrowCircleUp />
                  </span>
                  Back to top.
                </button>
                <p>&copy; 2023 - All Rights Reserved</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Main;
