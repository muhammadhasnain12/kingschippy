import AboutUs from "@/components/AboutUs";
import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Food from "@/components/Food";
import Footer from "@/components/Footer";
import HeadlineCards from "@/components/HeadlineCards";
import Hero from "@/components/Hero";
import Menues from "@/components/Menue";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="bg_kingschippy">
      <Navbar />
      <Hero />
      </div>
      <HeadlineCards />
      <Food />
      <AboutUs />
      <Menues />
      <Category />
      <Contact />  
      <Footer />
    </main>
  );
}
