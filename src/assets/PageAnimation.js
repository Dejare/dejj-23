import gsap, { Power1, Power2, Power3, Power4 } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";
import Observer from "gsap/Observer";
import { useEffect } from "react";

import React from "react";

gsap.registerPlugin(ScrollTrigger);

const PageAnimation = () => {
  const aboutHeader = new SplitType("#aboutHead");
  const aboutBody = new SplitType("#aboutBody");

  const head = new SplitType("#servicesHead");
  const body = new SplitType("#servicesBody");




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


    $(".projects-item").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this).prev();
      let projectCards = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 75%",
          end: "top top",
          scrub: 1,
        },
      });
      projectCards.fromTo(
        targetElement,
        {
          scale: "1",
          duration: 1,
        },
        {
          scale: "0.8",
          duration: 1,
        }
      );
      projectCards.fromTo(
        triggerElement,
        {
          boxShadow: "0rem 0rem 0rem 0rem rgba(0,0,0,0)",
          duration: 1,
        },
        {
          boxShadow: "0rem -4rem 10rem 0rem rgba(0,0,0,0.25)",
          duration: 1,
        }
      );
    });

    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
      types: "words, chars",
      tagName: "span",
    });

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        },
      });
      // Play tl when scrolled into view
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 90%",
        onEnter: () => timeline.play(),
      });
    }
    gsap.fromTo("#header", {
      opacity: 1,
      y: -100
    }, {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: Power3.easeIn()
    })

    gsap.fromTo("#firstCard", {
      opacity: 1,
      y: 1000
    }, {
      opacity: 1,
      duration: 1,
      delay: 2,
      y: 0,
      ease: Power3.easeIn()
    })
    $("[letters-slide-down]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), {
        opacity: 0,
        yPercent: -120,
        duration: 1,
        delay: 1,
        ease: Power2.easeOut(),
        stagger: { amount: 0.5 },
      });
      createScrollTrigger($(this), tl);
    });

    $("[words-slide-down]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), {
        opacity: 0,
        yPercent: -100,
        duration: 0.5,
        ease: Power2.easeOut(),
        stagger: { amount: 0.5 },
      });
      createScrollTrigger($(this), tl);
    });

    $("[bg-expand]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      // tl.from($(this).find(".char"), {
      //   opacity: 0,
      //   yPercent: -100,
      //   duration: 0.5,
      //   ease: Power2.easeOut(),
      //   stagger: { amount: 0.5 },
      // });
      tl.fromTo(
        $(this),
        {
          css: {
            width: "100vw",
          },
          duration: 1,
          ease: Power2.easeOut(),
        },
        {
          css: {
            width: "93vw",
          },
          duration: 1,
          ease: Power2.easeOut(),
        }
      );
      createScrollTrigger($(this), tl);
    });

    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });

    Observer.create({
      target: window,
      type: "pointer",
      onMove: (self) => {
        let velocity = self.velocityX * 0.01;
        let amount = gsap.utils.clamp(-15, 15, velocity);
        let duration = Math.abs(amount * 0.08);
        let clampedDuration = gsap.utils.clamp(0.1, 0.9, duration);
        let tl = gsap.timeline();
        let tlTwo = gsap.timeline();
        tlTwo
          .to(".footer-emoji", {
            rotate: amount + "deg",
            ease: "none",
            duration: 0.2,
            overwrite: true,
          })
          .to(".footer-emoji", {
            rotate: "0deg",
            ease: "power1",
            duration: 0.4,
          });
      },
    });
  }, []);
};

export default PageAnimation;

// window.addEventListener("DOMContentLoaded", (event) => {});
