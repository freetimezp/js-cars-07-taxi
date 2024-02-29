"use client";
import React from 'react';
import {
    FaAndroid,
    FaAppStoreIos,
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaMapMarker,
    FaMousePointer,
    FaTwitter
} from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';


const Footer = () => {
    return (
        <div className="bg-white text-black dark:bg-black dark:text-white">
            <div className='bg-primary'>
                <div className="container text-black text-center py-10 lg:py-14 text-2xl
                    font-bold space-y-4">
                    <p>
                        We are ready to take your call 24 hours, 7 days
                    </p>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        +12 345 67890
                    </h1>
                </div>
            </div>
            <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 
                md:gap-20 py-12'>
                <div className='space-y-6'>
                    <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
                        About Our Hub
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corrupti autem deleniti fuga odit, quaerat cupiditate, modi error,
                        suscipit temporibus natus corporis laboriosam tenetur recusandae
                        laudantium.
                    </p>

                    <div className='flex items-center text-primary gap-3 text-2xl'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaGoogle />
                        <FaTwitter />
                    </div>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
                        Download
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        laboriosam tenetur recusandae laudantium.
                    </p>
                    <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
                        Android user{" "}
                        <span>
                            <FaAndroid className='text-2xl text-black dark:text-white' />
                        </span>
                    </h1>
                    <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
                        IOS user{" "}
                        <span>
                            <FaAppStoreIos className='text-2xl text-black dark:text-white' />
                        </span>
                    </h1>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
                        Contact
                    </h1>
                    <div className='flex items-center gap-4'>
                        <FaMapMarker /> 123 Street, Ukraine, Kyiv
                    </div>
                    <div className='flex items-center gap-4'>
                        <MdCall /> +12 345 67890
                    </div>
                    <div className='flex items-center gap-4'>
                        <MdEmail /> email@email.com
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaMousePointer /> www.mydomain.com
                    </div>
                </div>
            </div>
            <p className='text-center py-4 text-sm border-t-2 border-gray-100'>
                Copyright @ 2024. All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
