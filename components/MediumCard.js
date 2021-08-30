import Image from "next/image";

function MediumCard({ img, title }) {
    return (
        <div className="cursor-pointer hover:scale-105 
        transform transition duration-300 ease-out mb-10
        p-1 rounded-xl">
            <div className="relative h-80 w-80">
                <Image
                    className="rounded-xl"
                    src={ img }
                    layout='fill'
                    objectFit="contain"
                />
            </div>
            <h3 className="text-lg font-semibold">{ title }</h3>
        </div>
    )
}

export default MediumCard
