"use client";

import { useEffect, useState } from "react";
import  Moon  from "./_icons/Moon";
import  Sun  from "./_icons/Sun";


export default function Header() {

    const size : string = "24px";
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    const switchMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(()=> {
        if (darkMode) {
        localStorage.setItem("darkMode", "true");
        window.document.documentElement.classList.add("dark");
        } else if (darkMode === false) {
            
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove("dark");

        } else {
            setDarkMode(localStorage.getItem("darkMode") === "true");

        }
    }, [darkMode]);

    return (
        <header className="flex items-center justify-end w-full p-4">
            <div
            className="transition cursor-pointer hover:text-blue-600"
            onClick={switchMode}
            >   
                {!darkMode ? (
                    <Moon width={size} height={size}/>
                ) : (
                    <Sun width={size}  height={size} />
                )}
            </div>
        </header>
    );


}