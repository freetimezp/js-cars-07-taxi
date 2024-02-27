import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { FaUserCircle } from 'react-icons/fa';

import { itemsLinks } from './Navbar';

const ResponsiveMenu = ({ showMenu }) => {
    const [Navlinks, setNavlinks] = useState([]);

    useEffect(() => {
        setNavlinks(itemsLinks);
    }, []);

    return (
        <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed bottom-0 top-0
            z-20 h-screen w-[75%] flex flex-col justify-between bg-white dark:bg-dark
            dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden 
            rounded-r-xl shadow-md`}>
            <div>
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle className='text-5xl' />

                    <div>
                        <h1>Hello, User</h1>
                        <h1 className='text-sm text-slate-500'>Premium user</h1>
                    </div>
                </div>

                <nav className='mt-8'>
                    <ul>
                        {Navlinks?.map(({ name, link, id }) => (
                            <li key={id} className='py-3'>
                                <Link href={link} className={`text-xl flex font-medium text-black dark:text-white
                                         duration-300 transition-all hover:translate-x-2 hover:text-primary 
                                         hover:dark:text-primary`}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="footer">
                <h1>
                    Made with ❤️ by <a href="https://github.com/freetimezp">Freetime</a>{" "}
                </h1>
            </div>
        </div>
    )
}

export default ResponsiveMenu;
