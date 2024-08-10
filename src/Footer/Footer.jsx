import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const playClickSound = () => {
        const clickSound = new Audio("/Put.mp3");
        clickSound.play();
    };

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <li>
                        <NavLink
                            to="/data-protection"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "text-gray-900" : "text-gray-400 hover:text-teal-300"
                            }
                        >
                            Data Protection
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/terms"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "text-gray-900" : "text-gray-400 hover:text-teal-300"
                            }
                        >
                            Terms of Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/privacy"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "text-gray-900" : "text-gray-400 hover:text-teal-300"
                            }
                        >
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>

                <div className="mt-6 sm:mt-0 flex items-center">
                    <img
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/JoshLogo.JPG?raw=true"
                        alt="Art"
                        className="h-12 w-12 rounded-full wobble1"
                    />
                </div>
            </div>

            <div className="text-center mt-4">
                <p className="text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
