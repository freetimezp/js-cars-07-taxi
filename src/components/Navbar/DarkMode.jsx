"use client";
import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';


const DarkMode = () => {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" && localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : "light"
    );

    const element = typeof document !== "undefined" ? document.documentElement : null;

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
            element.classList.remove("light");
        }
    }, [theme, element.classList]);

    return (
        <>
            {theme === "dark" ? (
                <BiSolidSun className='text-2xl' onClick={() => setTheme("light")} />
            ) : (
                <BiSolidMoon className='text-2xl' onClick={() => setTheme("dark")} />
            )}
        </>
    );
}

export default DarkMode;
