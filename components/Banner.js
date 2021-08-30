import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px]
        lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect!</p>
                <button className="text-purple-600 sm:text-lg shadow-md mt-2  bg-white py-1 px-4 
                rounded-full md:py-2 px-7 lg:py-4 px-10">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
