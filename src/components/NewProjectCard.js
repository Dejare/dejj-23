import React from "react";
import { TbCornerRightDown } from "react-icons/tb";

const NewProjectCard = ({
  title,
  details,
  stackOne,
  stackTwo,
  image,
  link,
  display,
  displayTwo,
  id,
  projectClass,
}) => {
  return (
    <article
      className={`projects-item group mx-auto my-12 flex max-h-fit w-full flex-col overflow-hidden rounded-[28px] bg-paper text-ink shadow-[0_32px_64px_-32px_rgba(0,0,0,0.6)] md:my-24 md:h-[90vh] md:flex-row ${projectClass || ""}`}
      id={id}
    >
      <div className="flex w-full flex-col justify-evenly p-6 md:w-1/2 md:justify-between md:p-10">
        <div className="w-full">
          <h3 className="heading uppercase text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95]">
            {title}
          </h3>
          <div className="mt-4 flex flex-row flex-wrap items-center gap-y-2">
            <div className="stack">React</div>
            <div className="stack">Tailwind</div>
            <div className="stack">Gsap</div>
            {stackOne && (
              <div className="stack" style={{ display: `${display}` }}>
                {stackOne}
              </div>
            )}
            {stackTwo && (
              <div className="stack" style={{ display: `${displayTwo}` }}>
                {stackTwo}
              </div>
            )}
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:max-w-[42ch]">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">
            {details}
          </p>

          <div className="mt-6">
            <button
              type="button"
              className="nav__button c-button contact-scroll"
              onClick={() => {
                window.open(`${link}`, "_blank", "noopener,noreferrer");
              }}
            >
              <span className="c-link">
                <span className="c-link__inner">
                  <span> Visit Live </span>
                  <span className="c-link__animated"> Visit Live </span>
                </span>
              </span>
              <span className="ml-3 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-paper md:ml-2">
                <TbCornerRightDown />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-6 w-full p-3 md:mt-0 md:h-full md:w-1/2 md:p-4">
        <img
          src={image}
          alt={`${title} project screenshot`}
          loading="lazy"
          className="h-full w-full rounded-[20px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    </article>
  );
};

export default NewProjectCard;
