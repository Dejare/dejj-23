import React from "react";
import "./assets/styles/main.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TbCornerRightDown } from "react-icons/tb";
import img from './assets/images/PicsArt_06-12-09.30.35.jpg'

const App = () => {
  return (
    <div className="w-screen">
      <header className="w-screen justify-between">
        <label htmlFor="logo">Adejare</label>
        <div className="flex flex-row items-center">
          <button className="md:px-5 md:py-2 py-2 px-4 rounded-full bg-neutral-700 text-white text-sm md:mr-5 mr-1">
            COLOR MODE
          </button>
          <nav>
            <HiOutlineMenuAlt4 />
          </nav>
        </div>
      </header>

      {/* section */}
      <div>
        {/* hero */}
        <div data-scroll-speed="2" data-scroll>
          <div className="relative w-screen   md:h-[60vh] h-[35vh] flex items-center z-[5] text-[#f1f1f1] overflow-hidden">
            <div class="inline-flex whitespace-nowrap crawling-line crawling-line--large font-head md:text-[350px] text-[250px] uppercase heading">
              {/* <div
                class="inline-block align-top animate-[crawling-line_10s_linear_infinite]"
                data-line="0"
              >
                Frontend Developer & creative director &nbsp;
              </div>
              <div
                class="inline-block align-top animate-[crawling-line_10s_linear_infinite]"
                data-line="1"
              >
                Frontend Developer & creative director &nbsp;
              </div> */}
              <div
                class="inline-block align-top animate-[crawling-line_30s_linear_infinite]"
                data-line="0"
              >
                Frontend Developer & creative
                director &nbsp;
              </div>
              <div
                class="inline-block align-top animate-[crawling-line_30s_linear_infinite] mx-20"
                data-line="1"
              >
                Frontend Developer & creative
                director &nbsp;
              </div>
            </div>
          </div>
        </div>

        {/* images, card */}
        <div className="flex md:flex-row flex-col p-5 w-screen items-center">
          <div className="md:w-[60vw] w-[98%] md:h-screen h-[80vh] bg-white rounded-xl p-4 ml-5 flex flex-col items-start justify-between md:order-1 order-2">
            <div>
              <h2 className="text-3xl">
                Hey, I'm Adejare. <br /> I
                curate immersive experience with
                technology and work with people
                all over the world to create
                tailor-made websites and
                applications
              </h2>
            </div>
            <button className="button rounded-full uppercase flex flex-row items-center border border-[#292929]">
              a bit about me{" "}
              <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex border  md:ml-2">
                <TbCornerRightDown />
              </div>
            </button>
          </div>
          <div className="md:w-[40vw] w-[100%] md:h-screen rounded-xl p-4 flex flex-col items-center justify-center md:order-2 order-1 md:mb-0 mb-8">
            <div >
              <img src={img} alt="picture OF ADEJARE" className="w-full rounded-2xl md:h-screen" />
            </div>
          </div>
        </div>
      </div>
      {/* about  */}
      <hr className="my-4 border-[#fff7]" />
      <div className="mt-8">
        <div className="flex md:flex-row flex-col items-start justify-between p-4 w-screen text-white mb-12">
          <div className="md:w-2/12 w-full">
            <h1 className="heading md:text-8xl text-5xl">
              ABOUT ME
            </h1>
          </div>
          <p className="md:w-6/12 w-full body md:text-3xl text-xl mr-4 md:mt-0 mt-5">
            As a creative developer, I focus on both
            design, development and functionality —
            allowing me to work on projects from concept
            until the very moment I hit publish. Unique
            layouts, functionality, great typography,
            clean, reuseable and readable codebase is
            what I focus on when working on websites.
          </p>
        </div>
        <hr className="my-4 border-[#fff7]" />
        <div className="flex md:flex-row flex-col items-start justify-between p-4 w-screen text-white mb-12">
          <div className="md:w-2/12 w-full">
            <h1 className="heading md:text-8xl text-5xl">
              WHAT I DO
            </h1>
          </div>
          <div className="md:w-6/12 w-full">
            <p className=" body md:text-3xl  text-xl md:mr-4 md:mt-0 mt-5">
              As a creative developer, I focus on
              both design, development and
              functionality — allowing me to work on
              projects from concept until the very
              moment I hit publish. Unique layouts,
              functionality, great typography,
              clean, reuseable and readable codebase
              is what I focus on when working on
              websites.
            </p>
            <button className="button rounded-full uppercase flex flex-row items-center text-white border-white border ">
              explore my work{" "}
              <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex ml-2">
                <TbCornerRightDown />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
