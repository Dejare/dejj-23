import React, { useEffect, useRef } from 'react'
import { TbCornerRightDown } from 'react-icons/tb'
import musica from '../assets/images/musica.jpg'
import gsap from 'gsap'

const ProjectCard = ({ title, details, stackOne, stackTwo, image, ref, link, display, displayTwo }) => {



    return (

        <div className='w-[95vw] h-[90vh] bg-[#f9f9f9] flex flex-col md:flex-row m-auto rounded-2xl  mb-24' id="project" ref={ref}>
            <div className='flex flex-col md:justify-between justify-evenly w-4/4 md:w-2/4 p-8'>
                <div className='w-full'>
                    <h1 className='heading md:text-8xl text-4xl uppercase'>{title}</h1>
                    <div className='flex flex-row  flex-wrap items-center md:w-2/4 mt-5 md:mt-0'>
                        <div className='stack mt-1'>React</div>
                        <div className='stack mt-1' >Tailwind</div>
                        <div className='stack mt-1'>Gsap</div>
                        <div className='stack mt-1'style={{"display": `${display}`}}>{stackOne}</div>
                        <div className='stack mt-1 md:mt-1' style={{"display": `${displayTwo}`}}>{stackTwo}</div>
                    </div>
                </div>
                <div className='md:w-2/4 mt-12 md:mt-0'>
                    <p>{details}</p>
                   
                  <div className='mt-5'>
                  <button class="nav__button c-button contact-scroll " onClick={() => {
                                            window.open(`${link}`, "_blank")
                                        }}>
                                            <span class="c-link">
                                                <span class="c-link__inner">
                                                    <span> Visit Live </span>
                                                    <span class="c-link__animated"> Visit Live </span>
                                                </span>
                                            </span>
                                            <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex border ml-3 md:ml-2">
                            <TbCornerRightDown />
                        </div>
                                        </button>
                  </div>
                </div>
            </div>


            <div className="w-4/4 md:w-2/4 h-2/4 md:h-full  md:object-cover mt-12 md:mt-0 relative"> <img src={image} alt="Project Image" className='h-full w-full  object-cover' /></div>
        </div>
    )
}

export default ProjectCard
