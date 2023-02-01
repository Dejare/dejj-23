import gsap, { Power1, Power3 } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export const pageAnimation = () => {
    const aboutHeader = new SplitType("#aboutHead");
const aboutBody = new SplitType("#aboutBody");

const head = new SplitType("#servicesHead");
const body = new SplitType("#servicesBody");

  gsap.timeline()
  .fromTo(
    ".word",
    { y: 300, skewY: 30 },
    {
      y: 0,
      stagger: 0.03,
      duration: .5,
      ease: Power1.easeIn(),
      skewY: 0,
      
    }
  );
};
