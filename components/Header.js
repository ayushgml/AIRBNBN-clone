import Image from "next/image";
import { SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

function Header() {
    return (  
        <header className="sticky top-0 z-50 grid
        grid-cols-3 bg-white shadow-md py-5 px-5
        md: px-10 ">

            <div className="relative flex items-center 
            h-10 my-auto">
                <Image
                    className="cursor-pointer"
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div
                className="flex items-center md:border-2
                rounded-full py-2 md:shadow-sm"
            >
                <input
                    className="flex-grow pl-5 pr-5 bg-transparent outline-none
                    text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Start your Search"
                />
                <SearchIcon
                    className="hidden md:inline h-8 bg-red-400 
                    text-white rounded-full p-2 cursor-pointer
                    md:mx-2"
                />
            </div>

            <div className="flex items-center space-x-4 justify-end
            text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a Host</p>
                <GlobeAltIcon
                    className="h-6 cursor-pointer"
                />
                <div className="flex space-x-1 border-2 rounded-full p-1 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" /></svg>
                    <UserCircleIcon className="w-6 cursor-pointer"/>
                </div>
                
            </div>
        </header>
    )
}

export default Header