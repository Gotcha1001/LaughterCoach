import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebaseconfig/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const clickSoundRef = useRef(null);
    const navigate = useNavigate();
    const adminEmail = "admin@example.com";
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
    const adminDropdownRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger menu state

    // State for user details
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        clickSoundRef.current = new Audio("/Put.mp3");

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                if (currentUser.providerData[0].providerId === 'google.com') {
                    setUserDetails({
                        firstName: currentUser.displayName,
                        lastName: ''
                    });
                } else {
                    try {
                        const usersRef = collection(db, 'users');
                        const q = query(usersRef, where('uid', '==', currentUser.uid));
                        const querySnapshot = await getDocs(q);
                        if (!querySnapshot.empty) {
                            const userDoc = querySnapshot.docs[0].data();
                            setUserDetails(userDoc);
                        } else {
                            console.log("No such document!");
                            setUserDetails(null);
                        }
                    } catch (error) {
                        console.error("Error fetching user details:", error);
                        setUserDetails(null);
                    }
                }
            } else {
                setUser(null);
                setUserDetails(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const playClickSound = () => {
        clickSoundRef.current.play();
    };

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/"); // Redirect to the home page after logout
        } catch (error) {
            console.error(error);
        }
    };

    const toggleAdminDropdown = () => {
        setIsAdminDropdownOpen(!isAdminDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
                setIsAdminDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        playClickSound();
        setIsMenuOpen(false);
    };

    // Function to capitalize each word in the user's name
    const capitalizeName = (name) => {
        if (!name) return "";
        return name
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    return (
        <nav className="bg-red-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Title Section */}
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                    <Link to="/" className="text-2xl font-bold flex flex-col items-center" onClick={playClickSound}>
                        <img
                            src="/LogoNav.PNG"
                            alt="Logo"
                            className="w-12 h-12 mb-2"
                        />
                        <span>MyApp</span>
                    </Link>
                </div>

                {/* Navigation Links Section */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <NavLink
                        to="/"
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-white hover:text-teal-300 "
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                            isActive ? "text-black " : "text-white hover:text-teal-300 shadow-sunset rounded-lg p-2"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-white hover:text-teal-300"
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-white hover:text-teal-300"
                        }
                    >
                        Contact
                    </NavLink>

                    {user && (
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                            {user.email === adminEmail && (
                                <div className="relative">
                                    <button onClick={toggleAdminDropdown} className="text-white bg-purple-500 rounded-md px-4 py-2 hover:bg-purple-700 focus:outline-none">
                                        Admin Actions
                                    </button>
                                    {isAdminDropdownOpen && (
                                        <ul ref={adminDropdownRef} className="absolute mt-2 bg-gray-700 rounded shadow-lg">
                                            <li>
                                                <NavLink
                                                    to="/video-upload"
                                                    className={({ isActive }) =>
                                                        isActive ? "block px-4 py-2 text-teal-400" : "block px-4 py-2 text-white hover:text-teal-300"
                                                    }
                                                    onClick={handleLinkClick}
                                                >
                                                    Video Upload
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            )}
                            <span className="text-lg">
                                Welcome, {userDetails ? `${capitalizeName(userDetails.firstName)} ${capitalizeName(userDetails.lastName)}` : 'User'}
                            </span>

                            <button onClick={logout} className="text-white hover:text-teal-300">
                                Logout
                            </button>
                        </div>
                    )}
                    {!user && (
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                            <NavLink
                                to="/register"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "text-black" : "text-white hover:text-teal-300"
                                }
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "text-black" : "text-white hover:text-teal-300"
                                }
                            >
                                Login
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;