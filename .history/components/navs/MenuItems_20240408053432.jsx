import { buyMeCoffeenURL, navRoutes } from '@lib/routes';
import Link from 'next/link';
import React from 'react'
import { BsCart2 } from 'react-icons/bs';

export const MenuItems = ({ toggleSidebar, isNav, isLarge,openCartSpecsModal,totalCartQnty }) => {
    return (
        <div className={` flex ${isLarge ? 'flex-row justify-end items-end gap-4 translate-x-0' : 'flex-col'}  transition-transform transform  ${isNav ? 'translate-x-0 ' : '-translate-x-full'} `}>
            {navRoutes.map(item =>
                <Link
                    onClick={toggleSidebar}
                    href={item.path}
                    key={item.path}
                    className={`${item.path === '/' ? 'md:hidden' : ''} text-gray-300 lg:hover:text-gray-500 cursor-pointer px-2 py-3 rounded hover:bg-white hover:text-oran text-lg`}>
                    {item.name}
                </Link>)}
               {!l}
            <a aria-label="Buy me a coffee" href={'/auth'} target="_blank">
                <button aria-label='Sign in' className='hidden md:flex bg-gradient-to-br from-oran to-[#fb0] text-white px-3 py-3 rounded-md text-lg'>Sign in</button>
            </a>
            <button aria-label='Sign up' className='hidden md:flex bg-gradient-to-br from-oran to-[#fb0] text-white px-3 py-3 rounded-md text-lg'>Admin</button>
        </div>
    )
};