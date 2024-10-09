import Book from "./Book";
import Footer from "./Footer";
import Hero from "./Hero";
import HikeList from "./HikeList";
import LocationList from "./LocationList";
import Newsletter from "./Newsletter";

export default function page() {
  return (
    <div>
      <Hero />
      <HikeList />
      <Book />
      <LocationList />
      <Newsletter />
      <Footer />
    </div>
  )
}
