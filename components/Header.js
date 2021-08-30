import Image from "next/image";
import { SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function Header() {
    const [ searchInput, setSearchInput ] = useState( "" );
    const [ startDate, setStartDate ] = useState( new Date() );
    const [ endDate, setEndDate ] = useState( new Date() );
    const [ noOfGuests, setNoOfGuests ] = useState(1);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate( ranges.selection.startDate );
        setEndDate( ranges.selection.endDate );
    }

    const resetInput = () => {
        setSearchInput( "" );
    }

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
                    value={ searchInput }
                    onChange={(e) => setSearchInput(e.target.value)}
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
            
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={ [ selectionRange ] }
                        minDate={ new Date() }
                        rangeColors={["FD725C"]}
                        onChange={ handleSelect }
                        color="FD725C"
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={ noOfGuests }
                            onChange={ e => setNoOfGuests( e.target.value ) }
                            min={1}
                            className="w-10 pl-2 outline-none text-red-400"
                            type="number" />
                    </div>
                    <div className="grid grid-cols-2">
                        <button
                            onClick={resetInput}
                            className="cursor-pointer hover:shadow-md p-2 rounded-xl">
                            Cancel
                        </button>

                        <button
                            className="text-red-400 cursor-pointer hover:shadow-md rounded-xl">
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header