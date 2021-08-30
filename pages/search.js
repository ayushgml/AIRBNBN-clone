import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
    return (
        <div className="h-screen">
            <Header />

            <main className="flex">
                <section className="ml-5">
                    <p className="text-xs mt-4">
                        n+ number of stays for x value of guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in India
                    </h1>

                    <div className="hidden sm:inline-flex items-center 
                    mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms</p>
                        <p className="button">Minimum rating</p>
                        <p className="button">See all filters</p>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    )
}

export default Search
