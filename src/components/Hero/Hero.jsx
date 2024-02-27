import React from 'react';
import Image from 'next/image';

import yellowCab from '../../assets/images/yellow-cab.png';
import bgCity from '../../assets/images/city.jpg';

const bgStyle = {
    backgroundImage: `url(${bgCity.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "520px",
    width: "100vw"
};

const Hero = () => {
    return (
        <div style={bgStyle}>
            <div className='dark:bg-black/60 bg-white/70 backdrop-blur-sm dark:text-white
                duration-300 h-[520px] flex'>
                <div className="container grid grid-cols-1 place-items-center">
                    <div className='text-center space-y-5 py-14'>
                        <p
                            data-aos="fade-up"
                            className='text-primary text-3xl font-semibold uppercase'
                        >
                            Book Taxi now
                        </p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="700"
                            className='text-4xl md:text-6xl font-bold'
                        >
                            +12 345 67890
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            className='tracking-[8px] text-base sm:text-xl font-semibold'
                        >
                            www.taxidomain.com
                        </p>
                    </div>
                    <div
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                    >
                        <Image src={yellowCab} alt="taxi" className='max-h-[460px] sm:scale-125
                            translate-y-10 sm:translate-y-0' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
