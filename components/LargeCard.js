import Image from "next/image";

function LargeCard( { img, title, description, buttonText } ) {
    return (
        <section>
            <div className="relative h-96 min-w-[300px]">
                <Image
                    src={ img }
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            
            <div className="absolute">
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>
        </section>
    )
}

export default LargeCard
