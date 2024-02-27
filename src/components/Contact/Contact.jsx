"use client";
import React from 'react';

const Contact = () => {
    return (
        <div className='bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center
            duration-300 pt-24 pb-10 sm:pb-0 max-w-[100vw] overflow-x-hidden'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 data-aos="fade-up"
                            className='text-2xl sm:text-3xl font-bold'>
                            Best in City
                        </h1>
                        <h1 data-aos="fade-up" data-aos-delay="400"
                            className='text-3xl sm:text-4xl font-bold'>
                            Trusted cab services in Ukraine
                        </h1>
                        <p
                            data-aos="zoom-out" data-aos-delay="600"
                            className='leading-8 tracking-wide'
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            tempora! Labore dolores obcaecati, incidunt iusto
                            commodi illum debitis vitae quibusdam magni dolorum dolore
                            earum sequi rem dolor nostrum, eius perferendis.
                        </p>

                        <button className='bg-black text-white py-2 px-4 rounded-lg'>
                            Book Now
                        </button>
                    </div>

                    <div data-aos="fade-up"
                        className=''>
                        <div className='w-full md:max-w-[350px] mx-auto'>
                            <h1 className='uppercase text-2xl text-white bg-black px-5
                                py-3'>
                                Book a cab
                            </h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white 
                                p-5">
                                <input type="text" name="" id="" placeholder='Name' className='inputField' />
                                <input type="text" name="" id="" placeholder='Phone' className='inputField' />
                                <input type="text" name="" id="" placeholder='Start' className='inputField' />
                                <input type="text" name="" id="" placeholder='End' className='inputField' />
                                <input type="text" name="" id="" placeholder='Choose car' className='inputField 
                                col-span-2' />

                                <button className='col-span-2 bg-black w-full mt-8 text-white py-2 px-4 
                                    rounded-lg'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
