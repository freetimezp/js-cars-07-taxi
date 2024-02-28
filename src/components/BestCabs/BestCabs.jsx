"use client";
import React from 'react';

import Image2 from '../../assets/images/car2.png';
import Image from 'next/image';

const ServicesData = [
    {
        id: 1,
        img: Image2,
        name: "Economy Class",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit arum nam animi consequatur.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Image2,
        name: "Standart Class",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit arum nam animi consequatur.",
        aosDelay: "300",
    },
    {
        id: 3,
        img: Image2,
        name: "Business Class",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit arum nam animi consequatur.",
        aosDelay: "500",
    },
]

const BestCabs = () => {
    return (
        <div className='py-10 bg-white dark:bg-dark text-black dark:text-white'>
            <div className="container">
                <div
                    data-aos="fade-up"
                    className='text-center mb-20'
                >
                    <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>
                        Choose Best Cab
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14
                    place-items-center">
                    {ServicesData?.map(({ id, img, name, description, aosDelay }) => (
                        <div
                            key={id}
                            data-aos="fade-up"
                            data-aos-delay={aosDelay}
                            className='group rounded-2xl bg-white dark:bg-black hover:!bg-primary
                            shadow-xl duration-300 max-w-[300px] relative'
                        >
                            <div className='h-[110px]'>
                                <Image
                                    src={Image2}
                                    alt="taxi"
                                    className='max-w-[200px] block mx-auto transform -translate-y-20
                                    group-hover:scale-110 group-hover:translate-x-4 duration-300'
                                />
                            </div>
                            <div className='p-4 text-center space-y-4'>
                                <h1 className='text-xl font-bold'>
                                    {name}
                                </h1>
                                <p className='text-gray-500 group-hover:text-black duration-300
                                    text-sm line-clamp-2'>
                                    {description}
                                </p>
                                <p className='text-primary text-2xl font-bold group-hover:text-black'>
                                    $10/km
                                </p>
                                <button className='bg-black text-white px-4 py-2 rounded-lg'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestCabs;
