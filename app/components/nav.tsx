'use client'

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import React, { useState } from 'react'

const navigation = [
    { 
        name: 'Home', 
        href: '#home', 
        class: '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-950 lg:text-sm lg:leading-6' 
    },
    { 
        name: 'Benefits', 
        href: '#benefits', 
        class: '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-950 lg:text-sm lg:leading-6' 
    },
]
const auth = [
    { 
        name: 'Log In', 
        href: '/login', 
        class: '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-950 lg:text-sm lg:leading-6 lg:mr-3' 
    },
    { 
        name: 'Sign Up', 
        href: '/register', 
        class: '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-950 lg:text-sm lg:leading-6' 
    }
]

interface NavItemProps {
    class: string;
    navGroup: NavItemType[];
}
interface NavItemType {
    name: string;
    href: string;
    class: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
    return (
        <div className={props.class}>
            {
                props.navGroup.map(item => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={item.class}
                    >
                        {item.name}
                    </a>
                ))
            }
        </div>
    )
}

export default function Nav() {
    const [mobileMenuOpen, setMoblieMenuOpen] = useState(false);

    return (
        <>
            <nav
                className='flex items-center justify-between p-6 lg:px-8'
                aria-label='Global'
            >
                <div className='flex lg:flex-1'>
                    <a href='#' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Wreathe</span>
                        <Image
                            src='./logo.svg'
                            alt='wreathe logo'
                            width={50}
                            height={50}
                            className='h-8 w-auto'
                        />
                    </a>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gra-200'
                        onClick={() => setMoblieMenuOpen(true)}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>
                </div>
                <NavItem navGroup={navigation} class="hidden lg:flex lg:gap-x-12" />
                <NavItem navGroup={auth} class="hidden lg:flex lg:flex-1 lg:justify-end"  />
            </nav>
            <Dialog
                as='div'
                className='lg:hidden'
                open={mobileMenuOpen}
                onClose={setMoblieMenuOpen}
            >
                <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900'>
                    <div className='flex items-center justify-between'>
                        <a href='#' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Wreathe</span>
                            <Image 
                                src="./logo.svg"
                                alt='wreathe logo'
                                width={50}
                                height={50}
                                className='h-8 w-auto'
                            />
                        </a>
                        <button
                            type='button'
                            className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200'
                            onClick={() => setMoblieMenuOpen(false)}
                        >
                            <span className='sr-only'>Close menu</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden="true" />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <NavItem navGroup={navigation} class="space-y-2 py-6" />
                            <NavItem navGroup={auth} class="py-6" />
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}