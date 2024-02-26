import { useState, useRef } from 'react';
import './navbar.css';

const arrayOfNavLinks = ["Home", "Services", "About", "Contact"];

export const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    const toggleDropDown = () => {
        setDropDownState(!dropDownState);
    };

    return (
        <nav className="flex items-center justify-between bg-[#a4c5f9] px-4 py-2 ">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
                <h2>Logistic Business Solution Ltd.</h2>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">
                {arrayOfNavLinks.map((item, index) => (
                    <li key={index} className="group flex cursor-pointer flex-col">
                        {item}
                        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-blue-700  transition-all duration-700 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>
            <div onClick={toggleDropDown} className="relative flex transition-transform md:hidden">
                {dropDownState ? (
                    // Show close icon (X) when dropdown is open
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
                <ul ref={dropDownMenuRef} className={`z-10 gap-2 absolute dropdown-menu rounded-lg ${dropDownState ? 'open' : ''}`}>
                    {arrayOfNavLinks.map((item, index) => (
                        <li key={index} className="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-sky-600">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
