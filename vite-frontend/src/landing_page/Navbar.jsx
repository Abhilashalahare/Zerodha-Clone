import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()

    return (

        

        <nav className='bg-white border-0 shadow-sm sticky top-0 z-50'>
            <div className=' px-4 py-3 flex items-center justify-between'>
                {/* logo */}
                <Link to={'/'}>
                    <img src="media/images/logo.svg" alt="Logo" className='w-32' />
                </Link>

                {/* Nav Links (visible only on large screens) */}
                <ul className=" text-gray-700 hidden lg:flex space-x-15 font-medium mr-40">
                    <li className='text-gray-600'>
                        <Link onClick={()=>navigate('../login')}
                            to={'/login'}
                            className=" hover:text-blue-600  no-underline hover:underline transition "
                        >
                           Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/about'}
                            className=" hover:text-blue-600 no-underline hover:underline transition"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/product'}
                            className=" hover:text-blue-600 no-underline hover:underline transition"
                        >
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/pricing'}
                            className="text-gray-700 hover:text-blue-600 no-underline hover:underline transition"
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/support'}
                            className="text-gray-700 hover:text-blue-600 no-underline hover:underline transition"
                        >
                            Support
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;