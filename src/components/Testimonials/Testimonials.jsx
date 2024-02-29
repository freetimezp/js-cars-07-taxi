/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import Slider from 'react-slick';
import { RiDoubleQuotesR } from "react-icons/ri";

import BgImage from '../../assets/images/testimonial.png';

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
};

const TestimonialsData = [
    {
        id: 1,
        name: "Adam",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Dolor sed voluptatibus repudiandae corrupti maiores a aut,
            dicta ducimus consequatur ommodi.`,
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Eva",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Dolor sed voluptatibus repudiandae corrupti maiores a aut,
            dicta ducimus consequatur ommodi.`,
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Boris",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Dolor sed voluptatibus repudiandae corrupti maiores a aut,
            dicta ducimus consequatur ommodi.`,
        img: "https://picsum.photos/103/103"
    },
    {
        id: 4,
        name: "Slava",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Dolor sed voluptatibus repudiandae corrupti maiores a aut,
            dicta ducimus consequatur ommodi.`,
        img: "https://picsum.photos/104/104"
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={bgStyle}>
            <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
                <div className="container">
                    <div
                        data-aos="fade-up"
                        className='text-center mb-10'
                    >
                        <h1 className='text-4xl font-bold'>
                            Testimonials
                        </h1>
                    </div>
                    <div data-aos="zoom-in">
                        <Slider {...settings}>
                            {TestimonialsData.map(({ id, name, text, img }) => (
                                <div key={id} className='my-6'>
                                    <div className='flex flex-col gap-6 shadow-lg py-8 px-6 mx-4
                                        rounded-3xl bg-white dark:bg-dark relative'>
                                        <RiDoubleQuotesR className='absolute top-[50%] right-0 text-[6rem]
                                            opacity-10 transform -translate-y-1/2' />

                                        <div className='flex flex-col items-center gap-4'>
                                            <p className='text-xs'>
                                                {text}
                                            </p>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <img
                                                src={img}
                                                alt="testimonial"
                                                className='rounded-full w-16 h-16'
                                            />
                                            <div className='space-y-2'>
                                                <h1 className='text-xl font-bold text-black/60 dark:text-primary
                                                    italic'>
                                                    {name}
                                                </h1>
                                                <p className='text-sm font-bold text-black/45 dark:text-white'>
                                                    Business Man
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
