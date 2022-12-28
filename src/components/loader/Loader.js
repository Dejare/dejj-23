import gsap, { Power0 } from 'gsap';
import React, { useEffect, useState, useRef } from 'react'

const Loader = () => {
    const [LoadingValue, setLoadingValue] = useState(0);

    const wrapper = useRef()

    useEffect(() => {
        const loadingInterval = setInterval(() => { setLoadingValue(prevValue => prevValue + 1) }, 20)

        setTimeout(() => {
            clearInterval(loadingInterval)
            gsap.fromTo(wrapper.current, {
                y: 0,
                opacity: 1
            }, {
                y: 500,
                ease: Power0.easeOut,
                duration: .6,
                opacity: .05
            })
        }, 2000);

    }, []);
    return (
        <div className='w-screen h-screen fixed bg-[#292929] text-white z-10' >


            <h1 className='heading text-[150px] absolute top-0 right-0 mr-12' ref={wrapper}>{LoadingValue}%</h1>

        </div>
    )
}

export default Loader
