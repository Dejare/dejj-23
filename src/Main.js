import React, { useState } from "react";
import "./assets/styles/main.scss";
import { HiOutlineMenuAlt4, HiArrowCircleUp } from "react-icons/hi";
import { TbCornerRightDown } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import img from "./assets/images/dejj.jpg";
import gsap, { Power4 } from "gsap";
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
import { useEffect } from "react";
import HeropageAnimation from "./assets/HeropageAnimation";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [ColorModeVisible, setColorModeVisible] = useState(false);
  const [Toggle, setToggle] = useState();

  PageAnimation();
// HeropageAnimation()
  useEffect(() => {
    gsap.fromTo(
      "#colorPicker",
      {
        x: 70,
        zIndex: 1,
        // opacity: 0,
        // scale: 0.2,
      },
      {
        x: 0,
        zIndex: -0,
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: Power4.easeInOut(),
      }
    );
  });

  const changeColorRed = () => {
    document.body.style.backgroundColor = "#2d0b04";
    setColorModeVisible(false);
  };
  const changeColorGrey = () => {
    document.body.style.backgroundColor = "#292929";
    setColorModeVisible(false);
  };
  const changeColorGreen = () => {
    document.body.style.backgroundColor = "#152a21";
    setColorModeVisible(false);
  };


  return (
    <div>
      <div className="w-screen">
        <div className="flex m-auto items-center justify-center m-20">
        <div className="flex items-center justify-center backdrop-blur-xl m-auto fixed z-[10000000000000000] m-10">
        <header className="justify-between md:w-[60vw] bg-[#c0c0c010] rounded-xl border border-[0.2] border-[#ababab] p-5" id="header">
          <label htmlFor="logo">Adejare™</label>
          <div className="flex flex-row items-center">
            {ColorModeVisible ? (
              <div
                id="colorPicker"
                className="flex items-center justify-center px-4 py-2 mr-1 text-sm text-white rounded-full md:px-5 md:py-2 bg-[#c0c0c010] md:mr-5"
              >
                <button
                  className="px-2 py-2 mx-1 bg-gray-500 rounded-full"
                  onClick={changeColorGrey}
                ></button>
                <button
                  className="px-2 py-2 mx-1 bg-[#2d0b04] rounded-full"
                  onClick={changeColorRed}
                ></button>
                <button
                  className="px-2 py-2 mx-1 bg-[#152a21] rounded-full"
                  onClick={changeColorGreen}
                ></button>
              </div>
            ) : null}

            <button
              className="px-4 py-2 mr-1 text-sm text-white rounded-full md:px-5 md:py-2 bg-[#c0c0c010] md:mr-5 hove"
              onClick={() => {
                setColorModeVisible(!ColorModeVisible);
              }}
            >
              COLOR MODE
            </button>

            <nav
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              {navOpen ? (
                <TfiClose />
              ) : (
                <>
                  {" "}
                  <HiOutlineMenuAlt4 onClick={() => setToggle(false)} />
                </>
              )}
            </nav>
          </div>
        </header>
        </div>
        </div>
        {/* section */}
        {navOpen ? (
          <>
            <Nav closeNav={() => setNavOpen(false)} />
          </>
        ) : (
          <>
            <div>
              {/* hero */}
              <div data-scroll>
                <div className="relative w-screen   md:h-[60vh] h-[35vh] flex items-center z-[5] text-[#ffffffb4] overflow-hidden">
                  <div className="inline-flex whitespace-nowrap crawling-line crawling-line--large font-head md:text-[350px] text-[250px] uppercase heading">
                    <div
                      className="inline-block align-top animate-[crawling-line_30s_linear_infinite] "
                      data-line="0"
                      letters-slide-down=""
                      text-split=""
                      id="intro"
                    >
                      Frontend Developer & creative director &nbsp;
                    </div>
                    <div
                      className="inline-block align-top animate-[crawling-line_30s_linear_infinite] mx-8 "
                      data-line="1"
                      letters-slide-down=""
                      text-split=""
                      id="intro"
                    >
                      Frontend Developer & creative director &nbsp;
                    </div>
                  </div>
                </div>
              </div>

              {/* images, card */}
              <div className="flex flex-col items-center w-screen p-5 md:flex-row" id="firstCard">
                <div className="md:w-[60vw] w-[98%] md:h-screen h-[80vh] bg-white rounded-xl p-4 ml-5 flex flex-col items-start justify-between md:order-1 order-2">
                  <div>
                    <h2 className="text-xl font-normal md:text-3xl">
                      Hey, I'm Adejare. <br /> I curate immersive experience
                      with technology and work with people all over the world to
                      create tailor-made websites and applications
                    </h2>
                  </div>
                  <button className="button rounded-full uppercase flex flex-row items-center border border-[#292929]">
                    a bit about me{" "}
                    <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex border ml-3  md:ml-4">
                      <TbCornerRightDown />
                    </div>
                  </button>
                </div>
                <div className="md:w-[40vw] w-[100%] md:h-screen rounded-xl p-4 flex flex-col items-center justify-center md:order-2 order-1 md:mb-0 mb-8">
                  <div>
                    <img
                      src={img}
                      alt="picture OF ADEJARE"
                      className="w-full rounded-2xl md:h-screen"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* about  */}
            <hr className="my-4 border-[#fff7]" />

            <div className="mt-8" id="about">
              <div className="flex flex-col items-start justify-between w-screen p-4 mb-12 text-white md:flex-row">
                <div className="w-full md:w-2/12">
                  <h1
                    className="text-4xl heading md:text-7xl"
                    id="aboutHead"
                    words-slide-down=""
                    text-split=""
                  >
                    ABOUT ME
                  </h1>
                </div>
                <div className="w-full mt-5 mr-4 text-xl md:w-6/12 body md:text-2xl md:mt-0">
                  <p id="abouBody">
                    I'm Adejare Daniels. I am a self-taught Front-end Developer
                    and school taught computer engineer. I'm currently a student
                    of the Federal University Of Technology, Akure. <br /> As a
                    creative developer, I focus on both design, development and
                    functionality — allowing me to work on projects from concept
                    until the very moment I hit publish. Unique layouts,
                    functionality, great typography, clean, reuseable and
                    readable codebase is what I focus on when working on
                    websites.
                  </p>
                </div>
              </div>
              <hr className="my-4 border-[#fff7]" />
              <div className="flex flex-col items-start justify-between w-screen p-4 mb-12 text-white md:flex-row">
                <div className="w-full md:w-3/12">
                  <h1
                    className="text-4xl uppercase heading md:text-7xl"
                    id="aboutHead"
                    words-slide-down=""
                    text-split=""
                  >
                    Here's what i do
                  </h1>
                </div>
                <div className="w-full mt-5 mr-4 text-xl md:w-6/12 body md:text-2xl md:mt-0">
                  <div
                    id="w-node-eb47866e-f418-d7c2-890d-5e395350cf10-2dc1d759"
                    className="service-cards"
                  >
                    <div
                      id="w-node-a0908745-6970-8cec-49ed-c7bfd166c501-2dc1d759"
                      className="service-card"
                    >
                      <div>
                        <div className="service-c_icon-w">
                          <img
                            src={iconOne}
                            loading="lazy"
                            alt=""
                            className="service-c_icon"
                          />
                        </div>
                        <h2 className="heading-small">Frontend Development</h2>
                      </div>
                      <div>
                        <p className="service-c_p text-lg">
                          I curate immersive web experience&#x27;s with various
                          technologies, The one you&#x27;re on right now, for
                          example, is built in REACT too.
                        </p>
                        <div className="service-c_buttons">
                          <div className="text-bubble">react</div>
                          <div className="text-bubble">custom code</div>
                        </div>
                      </div>
                      <div className="service-c_bg"></div>
                    </div>
                    <div
                      id="w-node-_3c0064e8-6f78-db31-4761-a1876f59d8d3-2dc1d759"
                      className="service-card"
                    >
                      <div>
                        <div className="service-c_icon-w">
                          <img
                            src={iconTwo}
                            loading="lazy"
                            alt=""
                            className="service-c_icon"
                          />
                        </div>
                        <h2 className="heading-small">Digital Design</h2>
                      </div>
                      <div>
                        <p className="service-c_p text-lg">
                          Designing for the web is not static. It&#x27;s about
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
                    <div
                      id="w-node-ed0f781a-0a60-4506-1940-e568d2a7ab81-2dc1d759"
                      className="service-card"
                    >
                      <div>
                        <div className="service-c_icon-w">
                          <img
                            src={iconThree}
                            loading="lazy"
                            alt=""
                            className="service-c_icon"
                          />
                        </div>
                        <h2 className="heading-small">Art Direction</h2>
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
                    <div
                      id="w-node-eb2f5a02-521f-6de1-d114-63516e5b5e77-2dc1d759"
                      className="service-card"
                    >
                      <div>
                        <div className="service-c_icon-w">
                          <img
                            src={iconFour}
                            loading="lazy"
                            alt=""
                            className="service-c_icon"
                          />
                        </div>
                        <h2 className="heading-small">Interaction Design</h2>
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
                  <button className="flex flex-row items-center text-lg text-white uppercase border border-white rounded-full button">
                    <a href="#project" className="flex flex-row items-center">
                      explore my work{" "}
                      <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex ml-2">
                        <TbCornerRightDown />
                      </div>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-6 text-white " id="projects">
              <h1
                className="text-5xl text-white heading md:text-8xl"
                id="aboutHead"
              >
                PROJECTS
              </h1>
              <p>Here are some of my past works..</p>
              <div id="project" className="my-20"></div>
              <div className="md:mx-12">
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
            <div
              className=" w-[93vw] md:h-[90vh] h-[85vh] bg-[#fff] m-auto rounded-2xl mb-12 p-6 flex flex-col items-center justify-between text-[#292929] relative"
              id="contact"
              bg-expand=""
            >
              <div className="flex md:flex-row flex-col items-center w-full justify-between font-[100]">
                <div>
                  <p className="text-[#292929] text-center">
                    Frontend Developer <br />
                    Portfolio 2023
                  </p>
                </div>
                <p className="hidden md:block text-[#292929] text-sm">
                  Adejare
                </p>
                <div className="text-center md:text-left mt-5 md:mt-0 text-[#292929]">
                  Available for full-time work
                  <br /> March 2023
                </div>
              </div>
              <div className="text-center">
                <h1
                  className="heading md:text-[180px] text-8xl leading-[5rem] md:leading-[10rem] uppercase text-center text-[#292929] footer-text"
                  letters-slide-down=""
                  text-split=""
                >
                  Interested in <br />
                  working together?
                </h1>
                <div className="footer-emoji_w">
                  <img
                    src="https://assets.website-files.com/6017e817edf32734686c1b92/6378f8ddab34502e20fad52d_emoji.png"
                    loading="lazy"
                    alt="Peace hand emoji"
                    className="footer-emoji"
                  />
                </div>
                <p className="text-sm ">Drop me an email</p>
                <a href="mailto:inioluwaadesida@gmail.com" className="text-xl">
                  inioluwaadesida@gmail.com
                </a>
              </div>
              <div className="flex flex-col w-full mt-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col items-center w-1/5 ">
                  <p className="hidden md:flex">
                    LAGOS :{" "}
                    <span className="animate-pulse">
                      <Clock />
                    </span>
                  </p>
                  <p className="hidden md:block">Developed by Adejare </p>
                </div>

                <div className="flex flex-row items-center justify-center w-3/5 m-auto md:flex">
                  <ButtonOne
                    btnText={"Linkedin"}
                    link={"https://www.linkedin.com/in/adejarree/"}
                  />

                  <ButtonOne
                    btnText="Github"
                    link={"https://www.github.com/dejare"}
                  />

                  <ButtonOne
                    btnText="Twitter"
                    link={
                      "https://twitter.com/Therealnicron?t=if7WE8sL0Lb5S-MNkK7Lrg&s=09"
                    }
                  />
                </div>
                <div className="flex flex-col items-center justify-center mt-5 text-center md:text-left md:w-1/5">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex flex-row items-center "
                  >
                    <div className="mr-1 md:mr-2">
                      <HiArrowCircleUp />
                    </div>{" "}
                    Back to top.
                  </button>
                  <p>&copy; 2023 - All Rights Reserved </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
