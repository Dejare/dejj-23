import React from "react";
import { TbCornerRightDown } from "react-icons/tb";

const NewProjectCard = ({
  title,
  details,
  stackOne,
  stackTwo,
  image,
  ref,
  link,
  display,
  displayTwo,
  id,
  projectClass,
}) => {
  return (
    <div
      className={`w-10/12 md:h-[90vh] max-h-fit bg-white text-black border-2 border-neutral-600 flex md:flex-row flex-col md:m-auto md:rounded-[32px] rounded-2xl ${projectClass} projects-item md:my-24 my-12 `}
      id={id}
    >
      <div className="flex flex-col p-4 md:justify-between justify-evenly w-4/4 md:w-2/4 md:p-8">
        <div className="w-full">
          <h1 className="uppercase heading md:text-8xl text-8xl">{title}</h1>
          <div className="flex flex-row flex-wrap items-center mt-1 md:w-2/4 md:mt-0">
            <div className="mt-1 stack">React</div>
            <div className="mt-1 stack">Tailwind</div>
            <div className="mt-1 stack">Gsap</div>
            <div className="mt-1 stack" style={{ display: `${display}` }}>
              {stackOne}
            </div>
            <div
              className="mt-1 stack md:mt-1"
              style={{ display: `${displayTwo}` }}
            >
              {stackTwo}
            </div>
          </div>
        </div>
        <div className="mt-12 md:w-2/4 md:mt-0">
          <p>{details}</p>

          <div className="mt-5">
            <button
              className="nav__button c-button contact-scroll "
              onClick={() => {
                window.open(`${link}`, "_blank");
              }}
            >
              <span className="c-link">
                <span className="c-link__inner">
                  <span> Visit Live </span>
                  <span className="c-link__animated"> Visit Live </span>
                </span>
              </span>
              <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex border ml-3 md:ml-2">
                <TbCornerRightDown />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-12 w-4/4 md:w-2/4 h-2/4 md:h-full md:object-cover md:mt-0 rounded-2xl">
        {" "}
        <img
          src={image}
          alt="Project Image"
          className="object-cover w-full h-full p2 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default NewProjectCard;
