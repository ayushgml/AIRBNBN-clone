import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infocard from "../components/Infocard";

function Search({searchResults}) {
    const router = useRouter();
    const { location, noOfGuests } = router.query;

    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${noOfGuests} guests`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs mt-4">
                        30+ number of stays for {noOfGuests} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>

                    <div className="hidden sm:inline-flex items-center 
                    mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms</p>
                        <p className="button">Minimum rating</p>
                        <p className="button">See all filters</p>
                    </div>

                    <div className="flex flex-col">
                    { searchResults.map( ({ img, location, title, description, star, price, total }) => (
                        <Infocard
                            key={ img }
                            img = { img }
                            location={ location }
                            title={ title }
                            description={ description }
                            star={ star }
                            price={ price }
                            total={ total }
                        />
                    ))}
                    </div>

                    
                </section>
            </main>
            
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch( "https://links.papareact.com/isz" ).then(
        res => res.json()
    );

    return {
        props: {
            searchResults,
        },
    };
}