import gsap, { Power1, Power2, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import "../assets/styles/ls.css";

function Nav({ closeNav }) {
  const bg = useRef();
  const tl = useRef();
  const line = useRef()

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .fromTo(
        "#bg",
        {
          y: 1000,
          paused: false,
        },
        {
          y: 0,
          duration: 0.7,
          repeat: 0,
          ease: Power1.easeIn(),
        }
      )
   

      .fromTo(
        "#li",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: Power2.easeIn(),
        },
      )
      .fromTo(
        "#line",
        {
          width: 0,
          opacity: 0,
          backgroundColor: "#7c7c7c"
        },
        {
         width: "100%",
          opacity: 1,
          stagger: 0.15,
          backgroundColor: "white",
          ease: Power2.easeIn(),
        }, "-=1"
      )
      
      .fromTo(
        "#status",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: Power4.easeInOut(),
        }
      )
  }, []);
  const reverseAnim = () => {
    tl.current.reverse();
  };
  const artist = [
    "Currently Offline",
    "The Kid Laroi",
    "NF",
    "Daughter",
    "Davido",
    "Burna Boy",
    "Currently Offline",
    "Little Simz",
    "Daxx",
    "Young jonn",
  ];
  const random = Math.floor(Math.random() * 10) + 1;

  return (
    <div className="w-screen h-screen">
      <div
        className=" w-11/12 h-[95vh] flex flex-col m-auto rounded-3xl md:p-12 p-4 bg-[#c0c0c010]"
        ref={bg}
        id="bg"
      >
        <nav className="w-full">
          <ul className="text-white uppercase heading text-8xl navLink">
            <li id="li" onClick={closeNav}>
              <div className="flex flex-row items-center">
                <TfiAngleDoubleRight size={20} className="mr-3 icon" />
                <a href="/">Home </a>
              </div>
              <p>01</p>
            </li>
            <hr className="w-full"  id="line"/>
            <li id="li" onClick={closeNav}>
              <div className="flex flex-row items-center">
                <TfiAngleDoubleRight size={20} className="mr-3 icon" />
                <a href="#about">About </a>
              </div>

              <p>02</p>
            </li>
            <hr className="w-full"  id="line"/>
            <li id="li" onClick={closeNav}>
              <div className="flex flex-row items-center">
                <TfiAngleDoubleRight size={20} className="mr-3 icon" />
                <a href="#projects">Projects</a>
              </div>
              <p>03</p>
            </li>
            <hr className="w-full" id="line" />
            <li id="li" onClick={closeNav}>
              <div className="flex flex-row items-center">
                <TfiAngleDoubleRight size={20} className="mr-3 icon" />
                <a href="#contact">Contact</a>
              </div>

              <p>04</p>
            </li>
            <hr className="w-full"  id="line"/>
          </ul>
        </nav>
        <div
          className="flex flex-row items-center justify-between mt-8 text-white"
          id="status"
        >
          <div>
            <p className="text-[10px] uppercase text-[#a3a3a3] font-bold">
              Available in
            </p>
            <h2>January 2023</h2>
          </div>
          <div>
            <p className="text-[10px] uppercase text-[#a3a3a3] font-bold">
              Listening to
            </p>
            <h2>{artist[random]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
