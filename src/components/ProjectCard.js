import React from 'react'
import { TbCornerRightDown } from 'react-icons/tb'

const ProjectCard = ({ title, details, stackOne, stackTwo }) => {
    return (
        <div className='w-[95vw] h-[90vh] bg-[#f9f9f9] flex m-auto rounded-2xl p-8 mb-12'>
            <div className='flex flex-col justify-between'>
                <div className='w-full'>
                    <h1 className='heading md:text-8xl text-4xl uppercase'>{title}</h1>
                    <div className='flex flex-row  flex-wrap items-center md:w-1/4 mt-5 md:mt-0'>
                        <div className='stack'>React</div>
                        <div className='stack'>Tailwind</div>
                        <div className='stack'>Gsap</div>
                        <div className='stack'>{stackOne}</div>
                        <div className='stack mt-5 md:mt-0'>{stackTwo}</div>
                    </div>
                </div>
                <div className='md:w-2/4'>
                    <p>{details}</p>
                    <button className="button rounded-full uppercase flex flex-row items-center border border-[#292929] text-sm">
                        Visit Live{" "}
                        <div className="bg-[#292929] text-white rounded-full w-5 h-5 items-center justify-center flex border ml-3 md:ml-2">
                            <TbCornerRightDown />
                        </div>
                    </button>
                </div>
            </div>

            <div></div>
        </div>
    )
}

export default ProjectCard
