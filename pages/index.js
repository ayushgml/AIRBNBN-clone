import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>AIRBNB clone by Ayush Gupta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-5 xl mx-auto px-8 sm:px-16">
        <section className="pt-6 mb-10">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from the server */ }
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          { exploreData?.map( ( { img, location, distance } ) => (
            <SmallCard
              key={ img }
              img={ img }
              location={ location }
              distance={ distance }
            /> 
          ) ) }
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll ml-4 p-2
          scrollbar-hide">
          { cardsData?.map( ( { img, title } ) => (
            <MediumCard key={ img } img={ img } title={ title }/> 
          ) ) }
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Adventure in Outdoors"
          description="Checkout the wishlist by AirBnb"
          buttonText="Go to Page"
        />
      </main>

      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch( 'https://links.papareact.com/pyp' ).then(
    ( res ) => res.json()
  );

  const cardsData = await fetch( 'https://links.papareact.com/zp1' ).then(
    ( res ) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}