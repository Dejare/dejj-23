import React, { useEffect, useState, useRef } from "react";
import "./assets/styles/main.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TbCornerRightDown } from "react-icons/tb";
import { TfiClose } from 'react-icons/tfi'
import img from "./assets/images/PicsArt_06-12-09.30.35.jpg";
import ProjectCard from "./components/ProjectCard";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav";
import gnd from "./assets/images/gnd.jpg";
import musica from './assets/images/musica.jpg';
import evaluate from './assets/images/evaluate.jpg'
import adejare from './assets/images/adejare.png'
gsap.registerPlugin(ScrollTrigger)


const Main = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [Toggle, setToggle] = useState();

    const cardOne = useRef()

    useEffect(() => {
        const scrollEl = document.querySelector("[data-scroll-container]");

        const scroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            lerp: 0.06,
            inertia: .65,
            tablet: {
                breakpoint: 768,
            },
            smartphone: { smooth: true, inertia: .65 }
        });

        setTimeout(() => {
            scroll.update();
        }, 1000);

        scroll.on("scroll", ScrollTrigger.update);

    }, []);



    return (
        <div data-scroll-container>
            <div div className="w-screen" >
                <header className="w-screen justify-between">
                    <label htmlFor="logo">Adejare™</label>
                    <div className="flex flex-row items-center">
                        <button className="md:px-5 md:py-2 py-2 px-4 rounded-full bg-neutral-700 text-white text-sm md:mr-5 mr-1">
                            COLOR MODE
                        </button>
                        <nav onClick={
                            () => {
                                setNavOpen(!navOpen)

                            }

                        }>
                            {navOpen ? <TfiClose /> : <> <HiOutlineMenuAlt4 onClick={() => setToggle(false)} /></>}
                        </nav>
                    </div>
                </header>

                {/* section */}
                {
                    navOpen ? <>
                        <Nav closeNav={() => setNavOpen(false)} />

                    </> :
                        <>
                            <div>
                                {/* hero */}
                                <div data-scroll>
                                    <div className="relative w-screen   md:h-[60vh] h-[35vh] flex items-center z-[5] text-[#f1f1f1] overflow-hidden">
                                        <div class="inline-flex whitespace-nowrap crawling-line crawling-line--large font-head md:text-[350px] text-[250px] uppercase heading">

                                            <div
                                                class="inline-block align-top animate-[crawling-line_30s_linear_infinite]"
                                                data-line="0"
                                            >
                                                Frontend Developer & creative
                                                director &nbsp;
                                            </div>
                                            <div
                                                class="inline-block align-top animate-[crawling-line_30s_linear_infinite] mx-8"
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
                                            <h2 className="text-3xl font-normal">
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
                                            <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex ml-4">
                                                <TbCornerRightDown />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div id="work">

                                <ProjectCard
                                    title="Adejare V1.0"
                                    details="A super-clean award winning websites for an independent art director and web designer currently based in barca"
                                    image={adejare}
                                    ref={cardOne}
                                />

                                <ProjectCard
                                    title="Evaluate V1.0"
                                    details="An all round intuitive, precise testing systems for students"
                                    stackOne="Supabase"
                                    image={evaluate}

                                />
                                <ProjectCard
                                    title="Musicaa V1.0"
                                    details="An online music streaming platform with search and sort functionality consuming spotify's API"
                                    stackOne="Spotify"
                                    stackTwo="API's"
                                    image={musica}
                                />
                                <ProjectCard
                                    title="GND Crypto"
                                    details="An online dashboard for cryptocurrency transactions (mock numbers) with state management "
                                    stackOne="Redux"
                                    stackTwo="API's"
                                    image={gnd}
                                />
                            </div>

                            {/* footer */}
                            <div className="w-[95vw] h-[90vh] bg-[#fff] m-auto rounded-2xl mb-12 p-6 flex flex-col items-center justify-between text-[#292929]" id="contact">
                                <div className="flex md:flex-row flex-col items-center w-full justify-between font-[100]">
                                    <div>
                                        <p className="text-[#292929]">
                                            Frontend Developer <br />
                                            Portfolio '23 - '24
                                        </p>
                                    </div>
                                    <p className="hidden md:block text-[#292929]">Adejare</p>
                                    <div className="text-center md:text-left mt-5 md:mt-0 text-[#292929]">
                                        Available for full-time work
                                        <br /> January '23{" "}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h1 className="heading md:text-[180px] text-8xl leading-[5rem] md:leading-[10rem] uppercase text-center text-[#292929]">
                                        Interested in <br /> working together?
                                    </h1>
                                    <p className="text-sm ">Drop me an email</p>
                                    <a
                                        href="@mailto:inioluwaadesida@gmail.com"
                                        className="text-xl"
                                    >
                                        inioluwaadesida@gmail.com
                                    </a>
                                </div>
                                <div className="flex md:flex-row flex-col md:items-center md:justify-between w-full">
                                    <p className="hidden md:flex">
                                        Developed by <a href="">Adejare</a>
                                    </p>

                                    <div className="flex-row flex-wrap items-center justify-center md:flex m-auto flex">

                                        <button class="nav__button c-button contact-scroll" onClick={() => {
                                            window.open("https://www.linkedin.com/in/adejarree/", "_blank")
                                        }}>
                                            <span class="c-link">
                                                <span class="c-link__inner">
                                                    <span> linkedin </span>
                                                    <span class="c-link__animated"> Linkedin </span>
                                                </span>
                                            </span>
                                        </button>

                                        <button class="nav__button c-button contact-scroll" onClick={() => {
                                            window.open("https://www.github.com/dejare", "_blank")
                                        }}>
                                            <span class="c-link">
                                                <span class="c-link__inner">
                                                    <span> Github </span>
                                                    <span class="c-link__animated"> Github </span>
                                                </span>
                                            </span>
                                        </button>

                                        <button class="nav__button c-button contact-scroll" onClick={() => {
                                            window.open("https://twitter.com/Therealnicron?t=if7WE8sL0Lb5S-MNkK7Lrg&s=09", "_blank")
                                        }}>
                                            <span class="c-link">
                                                <span class="c-link__inner">
                                                    <span> Twitter </span>
                                                    <span class="c-link__animated"> Twitter </span>
                                                </span>
                                            </span>
                                        </button>


                                    </div>
                                    <div className="text-center mt-5 md:text-left">
                                        <button onClick={() => {
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}>Back to top</button>
                                        <p>&copy; 2022 - All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>

                        </>


                }
            </div>
        </div >
    )
}

export default Main
