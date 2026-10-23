import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function usePageAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      /* Hero entrance — masked lines rise, then the supporting pieces fade */
      gsap.set(".hero-line-inner", { yPercent: 115 });
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(".hero-line-inner", {
          yPercent: 0,
          duration: 1.35,
          stagger: 0.12,
        })
        .fromTo(
          "[data-hero-fade]",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
          "-=0.7"
        );

      /* Section headings — line-by-line rise */
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        const split = new SplitType(el, { types: "lines" });
        gsap.fromTo(
          split.lines,
          { y: 52, opacity: 0, rotate: 1.5 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

      /* Manifesto paragraph — words light up as you scroll through it */
      document.querySelectorAll("[data-words]").forEach((el) => {
        const split = new SplitType(el, { types: "words" });
        gsap.fromTo(
          split.words,
          { opacity: 0.13 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
      });

      /* Generic fade-up blocks */
      gsap.utils.toArray("[data-fade]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      /* Image parallax inside their frames */
      gsap.utils.toArray("[data-parallax]").forEach((img) => {
        const wrap = img.closest("[data-parallax-wrap]") || img;
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      /* Clip-path reveal for framed images */
      gsap.utils.toArray("[data-clip]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(14% 8% 14% 8% round 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1.25,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
          }
        );
      });

      /* Footer wordmark drifts up as it enters */
      const wordmark = document.querySelector("[data-wordmark]");
      if (wordmark) {
        gsap.fromTo(
          wordmark,
          { yPercent: 36 },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: wordmark,
              start: "top bottom",
              end: "top 45%",
              scrub: true,
            },
          }
        );
      }

      /* Header hides on the way down, returns on the way up */
      const header = document.querySelector("[data-header]");
      if (header) {
        let lastY = 0;
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            const y = self.scroll();
            if (y > 160 && y > lastY + 4) {
              gsap.to(header, { yPercent: -140, duration: 0.45, ease: "power3.out" });
            } else if (y < lastY - 4 || y <= 160) {
              gsap.to(header, { yPercent: 0, duration: 0.45, ease: "power3.out" });
            }
            lastY = y;
          },
        });
      }
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);
}
