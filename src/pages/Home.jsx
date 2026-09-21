import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import TryOnStudio from "../components/TryOnStudio";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import SpecialOffer from "../components/SpecialOffer";
import Lookbook from "../components/Lookbook";
import Testimonials from "../components/Testimonials";
import AboutContact from "../components/AboutContact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-vague-bg
        text-vague-black
      "
    >
      <Navbar />

      <Hero />

      <Categories />

      <TryOnStudio />

      <FeaturedProducts />

      <NewArrivals />

      <SpecialOffer />

      <Lookbook />

      <Testimonials />

      <AboutContact />

      <Newsletter />

      <Footer />
    </main>
  );
}

export default Home;
