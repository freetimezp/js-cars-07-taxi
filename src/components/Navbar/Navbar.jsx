import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';

import DarkMode from './DarkMode';
import ResponsiveMenu from './ResponsiveMenu';

export const itemsLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Features',
        link: '/features'
    },
    {
        id: 4,
        name: 'Blog',
        link: '/blog'
    },
    {
        id: 5,
        name: 'Contact',
        link: '/contact'
    },
];

const Navbar = () => {
    const [Navlinks, setNavlinks] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        setNavlinks(itemsLinks);
    }, []);

    return (
        <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white
            duration-300'>
            <div className="container py-2 md:py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className='text-3xl font-bold'>
                        <span>Taxi</span>
                        <span className='text-primary'>Hub</span>
                    </Link>

                    <div className="hidden md:block">
                        <ul className='flex items-center gap-6'>
                            {Navlinks?.map(({ name, link, id }) => (
                                <li key={id} className='py-3'>
                                    <Link href={link} className={`text-lg font-medium text-black dark:text-white
                                        py-2 px-4 rounded-full hover:bg-primary duration-300`}>
                                        {name}
                                    </Link>
                                </li>
                            ))}

                            <DarkMode />
                        </ul>
                    </div>

                    <div className='md:hidden flex items-center gap-4'>
                        <DarkMode />

                        {showMenu ? (
                            <HiMenuAlt1
                                className='cursor-pointer transition-all duration-300'
                                size={30}
                                onClick={toggleMenu}
                            />
                        ) : (
                            <HiMenuAlt3
                                className='cursor-pointer transition-all duration-300'
                                size={30}
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                </div>
            </div>

            <ResponsiveMenu showMenu={showMenu} />
        </nav>
    );
}

export default Navbar;
