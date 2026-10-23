import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ARTISTS = [
  "The Kid Laroi",
  "NF",
  "Daughter",
  "Davido",
  "Burna Boy",
  "Little Simz",
  "Dax",
  "Young Jonn",
];

const LINKS = [
  { label: "Home", href: "#home", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Services", href: "#services", index: "03" },
  { label: "Projects", href: "#projects", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adejarree/" },
  { label: "GitHub", href: "https://www.github.com/dejare" },
  {
    label: "Twitter",
    href: "https://twitter.com/Therealnicron?t=if7WE8sL0Lb5S-MNkK7Lrg&s=09",
  },
];

function Nav({ closeNav }) {
  const rootRef = useRef(null);
  const artist = useMemo(
    () => ARTISTS[Math.floor(Math.random() * ARTISTS.length)],
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.85, ease: "expo.out" }
      );
      gsap.fromTo(
        ".nav-item",
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.07,
          delay: 0.3,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        ".nav-meta",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          delay: 0.65,
          ease: "power3.out",
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    closeNav();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[90] flex flex-col bg-coal text-bone"
      style={{ clipPath: "inset(0 0 100% 0)" }}
    >
      <nav
        aria-label="Primary"
        className="flex flex-1 flex-col justify-center px-5 pt-24 md:px-10"
      >
        <ul>
          {LINKS.map((item) => (
            <li key={item.index} className="nav-item border-t border-white/10 last:border-b">
              <a
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="group flex items-baseline gap-4 py-2 transition-transform duration-500 ease-out md:gap-8"
              >
                <span className="font-head text-sm text-accent md:text-base">
                  ({item.index})
                </span>
                <span className="heading uppercase leading-[0.95] text-[clamp(3.2rem,10.5vw,7.5rem)] transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:text-accent md:group-hover:translate-x-5">
                  {item.label}
                </span>
                <FiArrowUpRight
                  className="ml-auto shrink-0 self-center text-accent opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
                  size={36}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-6 px-5 pb-8 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="nav-meta">
          <p className="text-[10px] font-bold uppercase tracking-label text-muted">
            Status
          </p>
          <p className="mt-1 flex items-center gap-2 text-lg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work
          </p>
        </div>
        <div className="nav-meta">
          <p className="text-[10px] font-bold uppercase tracking-label text-muted">
            Listening to
          </p>
          <p className="mt-1 text-lg">{artist}</p>
        </div>
        <div className="nav-meta flex gap-5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="link-line text-sm uppercase tracking-label text-bone/80 transition-colors duration-200 hover:text-bone"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;
