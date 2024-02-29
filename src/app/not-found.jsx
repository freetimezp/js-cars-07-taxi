import React from 'react';
import Image from 'next/image';

import NotFoundImg from '../assets/images/notfound.svg';

const NotFound = () => {
    return (
        <div className='bg-white dark:bg-dark h-screen flex flex-col gap-12 
            justify-center items-center duration-300 dark:text-white'>
            <Image
                src={NotFoundImg}
                alt="not found"
                className='max-w-[400px]'
            />
            <h1 className='text-3xl font-bold text-center dark:text-white'>
                Page Not Found
            </h1>
        </div>
    );
}

export default NotFound;
