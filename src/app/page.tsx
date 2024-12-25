import AboutUs from "@/components/Aboutus";
import ActiveProcess from "@/components/ActiveProcess";
import Experiences from "@/components/Experiences";
import FoodCategory from "@/components/FoodCategory";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestBlog from "@/components/LatestBlogs";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import OurChefs from "@/components/OurChefs";
import TestimonialsSection from "@/components/Testimonials";
import WhyChooseUs from "@/components/Whyus";


export default function Home() {
  return (
    <div>
      <Navbar
        brandName="Foodtuck"
        links={[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          { name: "Blog", path: "/blog" },
          { name: "About", path: "/about" },
          { name: "Pages", path: "/pages" },
          { name: "Shop", path: "/shop" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <Hero />
      <AboutUs />
      <FoodCategory />
      <WhyChooseUs />
      <Experiences />
      <Menu />
      <OurChefs />
      <TestimonialsSection />
      <ActiveProcess />
      <LatestBlog />
      <Footer />
    
    </div>
  );
}
