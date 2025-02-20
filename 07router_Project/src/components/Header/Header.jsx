import React from 'react'
import {Link, NavLink} from 'react-router-dom'
// link is used in place of a taglink is used in place of a tag

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src=" data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? 'text-gray-700' : 'text-orange-700'} 
                                    border-b border-gray-100
                                     hover:bg-gray-50 lg:hover:bg-transparent
                                      lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? 'text-gray-700' : 'text-orange-700'} 
                                    border-b border-gray-100
                                     hover:bg-gray-50 lg:hover:bg-transparent
                                      lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? 'text-gray-700' : 'text-orange-700'} 
                                    border-b border-gray-100
                                     hover:bg-gray-50 lg:hover:bg-transparent
                                      lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  Contact us
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/Github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                    ${isActive ? 'text-gray-700' : 'text-orange-700'} 
                                    border-b border-gray-100
                                     hover:bg-gray-50 lg:hover:bg-transparent
                                      lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

