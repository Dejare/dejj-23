import React, { useState} from "react";
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
import mallet from './assets/images/malletNFT.jpg'
import evaluate from "./assets/images/02.jpg";
import adejare from "./assets/images/06.jpg";
import NewProjectCard from "./components/NewProjectCard";
import ButtonOne from "./components/ButtonOne";
import PageAnimation from "./assets/PageAnimation";
import iconOne from "./assets/images/iconOne.svg";
import iconTwo from "./assets/images/iconTwo.svg";
import iconThree from "./assets/images/iconThree.svg";
import iconFour from "./assets/images/iconFour.svg";


gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [Toggle, setToggle] = useState();



  PageAnimation();

  return (
    <div>
      <div className="w-screen">
        <header className="justify-between w-screen">
          <label htmlFor="logo">Remilekun</label>
          <div className="flex flex-row items-center">
            <button className="px-4 py-2 mr-1 text-sm text-white rounded-full md:px-5 md:py-2 bg-neutral-700 md:mr-5">
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
                <div className="relative w-screen   md:h-[60vh] h-[35vh] flex items-center z-[5] text-[#f1f1f1] overflow-hidden">
                  <div className="inline-flex whitespace-nowrap crawling-line crawling-line--large font-head md:text-[350px] text-[250px] uppercase heading">
                    <div
                      className="inline-block align-top animate-[crawling-line_30s_linear_infinite]"
                      data-line="0"
                      letters-slide-down=""
                      text-split=""
                    >
                      Website Developer & Marketing Expert &nbsp;
                    </div>
                    <div
                      className="inline-block align-top animate-[crawling-line_30s_linear_infinite] mx-8"
                      data-line="1"
                      letters-slide-down=""
                      text-split=""
                    >
                      Website Developer & Marketing Expert &nbsp;
                    </div>
                  </div>
                </div>
              </div>

              {/* images, card */}
              <div className="flex flex-col items-center w-screen p-5 md:flex-row">
                <div className="md:w-[60vw] w-[98%] md:h-screen h-[80vh] bg-white rounded-xl p-4 ml-5 flex flex-col items-start justify-between md:order-1 order-2">
                  <div>
                    <h2 className="text-xl font-normal md:text-3xl">
                      Hey, I'm Remilekun. I help companies achieve measurable
                      results through strategic digital marketing and website
                      development that increases revenue, brand equity, and
                      market share.
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
                      alt="picture OF Remilekun"
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
                  <p id="abouBody" words-slide-down="" text-split="">
                    Hello, I'm Remilekun Joseph a results-driven digital
                    marketing expert and website developer, I specialize in
                    creating, publishing, and distributing marketing strategies
                    and functional websites that achieve your business goals. My
                    focus is to help you increase revenue and profit by
                    targeting actual prospective customers, outperforming
                    competitors, and improving brand equity and market share.
                    With years of experience and expertise in various web
                    development technologies, I pride myself on delivering
                    high-quality work that exceeds your expectations.
                  </p>
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
                    class="service-cards"
                  >
                    <div
                      id="w-node-a0908745-6970-8cec-49ed-c7bfd166c501-2dc1d759"
                      class="service-card"
                    >
                      <div>
                        <div class="service-c_icon-w">
                          <img
                            src={iconOne}
                            loading="lazy"
                            alt=""
                            class="service-c_icon"
                          />
                        </div>
                        <h2 class="heading-small">Website Development</h2>
                      </div>
                      <div>
                        <p class="service-c_p text-lg">
                          I curate immersive web experience&#x27;s with various
                          technologies, The one you&#x27;re on right now, for
                          example, is built in REACT too.
                        </p>
                        <div class="service-c_buttons">
                          <div class="text-bubble">react</div>
                          <div class="text-bubble">custom code</div>
                        </div>
                      </div>
                      <div class="service-c_bg"></div>
                    </div>
                    <div
                      id="w-node-_3c0064e8-6f78-db31-4761-a1876f59d8d3-2dc1d759"
                      class="service-card"
                    >
                      <div>
                        <div class="service-c_icon-w">
                          <img
                            src={iconTwo}
                            loading="lazy"
                            alt=""
                            class="service-c_icon"
                          />
                        </div>
                        <h2 class="heading-small">Digital Marketing</h2>
                      </div>
                      <div>
                        <p class="service-c_p text-lg">
                          harnesses the power of technology and creativity to
                          reach and engage with your target audience, driving
                          measurable results that fuel your business growth.
                        </p>
                        <div class="service-c_buttons">
                          <div class="text-bubble">web design</div>
                          <div class="text-bubble">SCSS</div>
                        </div>
                      </div>
                      <div class="service-c_bg"></div>
                    </div>
                    <div
                      id="w-node-ed0f781a-0a60-4506-1940-e568d2a7ab81-2dc1d759"
                      class="service-card"
                    >
                      <div>
                        <div class="service-c_icon-w">
                          <img
                            src={iconThree}
                            loading="lazy"
                            alt=""
                            class="service-c_icon"
                          />
                        </div>
                        <h2 class="heading-small">NFTs</h2>
                      </div>
                      <div>
                        <p class="service-c_p text-lg">
                          transform digital content into unique, one-of-a-kind
                          assets that can be owned and traded, unlocking a new
                          world of possibilities for creators and collectors
                          alike.
                        </p>
                        <div class="service-c_buttons">
                          <div class="text-bubble">concepting</div>
                          <div class="text-bubble">art direction</div>
                        </div>
                      </div>
                      <div class="service-c_bg"></div>
                    </div>
                    <div
                      id="w-node-eb2f5a02-521f-6de1-d114-63516e5b5e77-2dc1d759"
                      class="service-card"
                    >
                      <div>
                        <div class="service-c_icon-w">
                          <img
                            src={iconFour}
                            loading="lazy"
                            alt=""
                            class="service-c_icon"
                          />
                        </div>
                        <h2 class="heading-small">Graphics design</h2>
                      </div>
                      <div>
                        <p class="service-c_p text-lg">
                          use visual storytelling to captivate audiences,
                          communicate messages, and elevate brands to the next
                          level with stunning, eye-catching designs.
                        </p>
                        <div class="service-c_buttons">
                          <div class="text-bubble">animations</div>
                          <div class="text-bubble">interactions</div>
                        </div>
                      </div>
                      <div class="service-c_bg"></div>
                    </div>
                  </div>
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
                  projectClass={"projectOne"}
                  title="consulting V1.0"
                  details=" G Gives Consulting move you from surviving to thriving.."
                  image={adejare}
                  link="https://www.ggivesconsulting.com/"
                  display="none"
                  displayTwo="none"
                />
                <NewProjectCard
                  title="Mallet!"
                  details="A simple landing page for an NFT trading organization"
                  stackOne="Framer"
                  stackTwo="Null"
                  image={mallet}
                  link="https://mallet.vercel.app/"
                />

                <NewProjectCard
                  title="Investing V1.0"
                  details="passive income via multi-family investments"
                  stackOne="Supabase"
                  image={evaluate}
                  link="https://www.granitetowersequitygroup.com/"
                  displayTwo="none"
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
                  title="service v1.0"
                  details="Take House Cleaning Off Your To-Do List Today"
                  stackOne="Redux"
                  stackTwo="API's"
                  image={gnd}
                  link="https://veracleaners.com/"
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
                <p className="hidden md:block text-[#292929] text-sm">joseph</p>
                <div className="text-center md:text-left mt-5 md:mt-0 text-[#292929]">
                  Available for roles & full time work
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
                    class="footer-emoji"
                  />
                </div>
                <p className="text-sm ">Drop me an email</p>
                <a href="mailto:remilekunjoseph7@gmail.com" className="text-xl">
                  remilekunjoseph7@gmail.com
                </a>
              </div>
              <div className="flex flex-col w-full mt-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col items-center w-1/5 ">
                  <p className="hidden md:flex">
                    LAGOS : <span className="animate-pulse">12:00</span>
                  </p>
                  <p className="hidden md:block">Developed by joseph </p>
                </div>

                <div className="flex flex-row items-center justify-center w-3/5 m-auto md:flex">
                  <ButtonOne
                    btnText="Facebook"
                    link={"https://web.facebook.com/remilekun.joseph.125"}
                  />

                  <ButtonOne
                    btnText="Github"
                    link={"https://www.github.com/dejare"}
                  />

                  <ButtonOne
                    btnText="Twitter"
                    link={"https://https://twitter.com/RemdekJoe"}
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
