import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/Hero";
import Features from "../../components/layout/Features";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import AboutDeveloper from "../../components/layout/AboutDeveloper";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <AboutDeveloper />
      <Footer />
    </>
  );
}

export default Landing;