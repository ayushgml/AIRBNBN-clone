import Image from "next/image";
import { StarIcon, HeartIcon } from '@heroicons/react/solid';

function Infocard({img, location, title, description, star, price, total}) {
    return (
        <div className="flex py-3 md:py-5">
            <div className="relative h-24 w-40 md:h-52 md:w-80
            flex-shrink-0">
                <Image
                    className="rounded-xl"
                    src={ img }
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p className="text-gray-400 text-xs md:text-sm">{ location }</p>
                    <HeartIcon className="h-7 cursor-pointer text-red-400"/>
                </div>

                <h4 className="text-md md:text-xl">{ title }</h4>

                <div>
                    <p className="flex text-sm">
                        <StarIcon className="h-5 text-yellow-300" />
                        {star}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Infocard
