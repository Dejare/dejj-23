import gsap, { Power2, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";

function Nav(props) {

    const bg = useRef()
    // const bgOne = document.getElementById("#bg")
    // const tl = gsap.timeline()
    const toggle = props.toggle;
    const tl = useRef()

    console.log(toggle)
    useEffect(() => {
        tl.current = gsap.timeline(
        )
        tl.current
            .fromTo("#bg", {
                y: 1000,
                paused: false
            }, {
                y: 0,
                duration: 1,
                repeat: 0
            })
            .fromTo("#li", {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: Power2.easeIn
            })
            .fromTo("#status",
                {
                    y: 50,
                    opacity: 0
                }, {
                y: 0,
                opacity: 1,
                duration: .5,
                ease: Power4.easeInOut
            })
    }, []);

    useEffect(() => {
        toggle ? tl.current.play() : tl.current.play()
    }, []);

    return (
        <div className="w-screen h-screen z-[1000]">
            <div className="bg-[#464545] w-11/12 h-[95vh] flex flex-col m-auto rounded-3xl md:p-12 p-4" ref={bg} id="bg">
                <nav className="w-full">
                    <ul className="uppercase text-white heading text-8xl navLink">
                        <li id="li">
                            <div className="flex flex-row items-center">
                                <TfiAngleDoubleRight
                                    size={20}
                                    className="icon mr-3"
                                />
                                <a href="">Home </a>
                            </div>
                            <p>01</p>
                        </li>
                        <hr className="w-full" />
                        <li id="li">
                            <div className="flex flex-row items-center">
                                <TfiAngleDoubleRight
                                    size={20}
                                    className="icon mr-3"
                                />
                                <a href="">Work </a>
                            </div>

                            <p>02</p>
                        </li>
                        <hr className="w-full" />
                        <li id="li">
                            <div className="flex flex-row items-center">
                                <TfiAngleDoubleRight
                                    size={20}
                                    className="icon mr-3"
                                />
                                <a href="">Archives</a>
                            </div>
                            <p>03</p>
                        </li>
                        <hr className="w-full" />
                        <li id="li">
                            <div className="flex flex-row items-center">
                                <TfiAngleDoubleRight
                                    size={20}
                                    className="icon mr-3"
                                />
                                <a href="">Contact</a>
                            </div>

                            <p>04</p>
                        </li>
                        <hr className="w-full" />
                    </ul>
                </nav>
                <div className="text-white flex flex-row items-center justify-between mt-8" id="status">
                    <div>
                        <p className="text-[10px] uppercase text-[#a3a3a3] font-bold">Available in</p>
                        <h2>January 2023</h2>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase text-[#a3a3a3] font-bold">Listening to</p>
                        <h2>The Kid Laroi</h2>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Nav;
