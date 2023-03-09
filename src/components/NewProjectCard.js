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
      className={`w-12/12 md:h-[90vh] max-h-fit bg-white text-black border-2 border-neutral-600 flex md:flex-row flex-col md:m-auto md:rounded-[32px] rounded-2xl ${projectClass} projects-item md:my-24 my-12`}
      id={id}
    >
      <div className="flex flex-col md:justify-between justify-evenly w-4/4 md:w-2/4 md:p-8 p-4">
        <div className="w-full">
          <h1 className="heading md:text-8xl text-8xl uppercase">{title}</h1>
          <div className="flex flex-row  flex-wrap items-center md:w-2/4 mt-1 md:mt-0">
            <div className="stack mt-1">React</div>
            <div className="stack mt-1">Tailwind</div>
            <div className="stack mt-1">Gsap</div>
            <div className="stack mt-1" style={{ display: `${display}` }}>
              {stackOne}
            </div>
            <div
              className="stack mt-1 md:mt-1"
              style={{ display: `${displayTwo}` }}
            >
              {stackTwo}
            </div>
          </div>
        </div>
        <div className="md:w-2/4 mt-12 md:mt-0">
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

      <div className="w-4/4 md:w-2/4 h-2/4 md:h-full  md:object-cover mt-12 md:mt-0 relative ">
        {" "}
        <img
          src={image}
          alt="Project Image"
          className="h-full w-full  object-cover md:rounded-r-[30px] rounded-b-2xl"
        />
      </div>
    </div>
  );
};

export default NewProjectCard;
