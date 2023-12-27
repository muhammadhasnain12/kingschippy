import AboutUs from "@/components/AboutUs";
import Category from "@/components/Category";
import Food from "@/components/Food";
import Footer from "@/components/Footer";
import HeadlineCards from "@/components/HeadlineCards";
import Hero from "@/components/Hero";
import MenueAccordion from "@/components/MenueAccordion";
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
      <Category />  
      <Footer />
    </main>
  );
}
