import gsap, { Power1, Power2, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import "../assets/styles/ls.css";

function Nav({ closeNav }) {
  const bg = useRef();
  const tl = useRef();
  const line = useRef();

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
        }
      )
      .fromTo(
        "#line",
        {
          width: 0,
          opacity: 0,
          backgroundColor: "#7c7c7c",
        },
        {
          width: "100%",
          opacity: 1,
          stagger: 0.15,
          backgroundColor: "white",
          ease: Power2.easeIn(),
        },
        "-=1"
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
      );
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
  const random = Math.floor(Math.random() * artist.length);

  const links = [
    { label: "Home", href: "/", index: "01" },
    { label: "About", href: "#about", index: "02" },
    { label: "Projects", href: "#projects", index: "03" },
    { label: "Contact", href: "#contact", index: "04" },
  ];

  return (
    <div className="h-screen w-full">
      <div
        className="m-auto flex h-[95vh] w-11/12 flex-col rounded-[28px] bg-coal p-4 shadow-[inset_0_0_0_1px_#ffffff14] md:p-12"
        ref={bg}
        id="bg"
      >
        <nav className="w-full" aria-label="Primary">
          <ul className="navLink heading uppercase text-bone text-8xl">
            {links.map((item) => (
              <div key={item.index}>
                <li id="li" onClick={closeNav}>
                  <div className="flex flex-row items-center">
                    <TfiAngleDoubleRight size={20} className="icon mr-3" />
                    <a href={item.href}>{item.label}</a>
                  </div>
                  <p>{item.index}</p>
                </li>
                <hr className="w-full" id="line" />
              </div>
            ))}
          </ul>
        </nav>
        <div
          className="mt-auto flex flex-row items-end justify-between pt-8 text-bone"
          id="status"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-label text-muted">
              Available in
            </p>
            <h2 className="mt-1 text-lg">January 2023</h2>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-label text-muted">
              Listening to
            </p>
            <h2 className="mt-1 text-lg">{artist[random]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
