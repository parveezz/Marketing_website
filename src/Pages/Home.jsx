import SEO from "../Components/SEO";
import Hero from "../Components/Home/Hero";
import ShowcaseBanner from "../Components/Home/ShowcaseBanner";
import TrustedBy from "../Components/Home/TrustedBy";
import Stats from "../Components/Home/Stats";
import ServicesSection from "../Components/Home/ServicesSection";
import FeaturedWork from "../Components/Home/FeaturedWork";
import Testimonials from "../Components/Home/Testimonials";
import ProcessSection from "../Components/Home/ProcessSection";
import PhilosophySection from "../Components/Home/PhilosophySection";
import HomeCTA from "../Components/Home/HomeCTA";

const Home = () => {
  return (
    <main className="relative w-full bg-[#0a0a0a] text-white overflow-hidden">
      <SEO title="Home" description="A Digital Marketing Studio that will Work." />

      <Hero />
      <ShowcaseBanner />
      <TrustedBy />
      <Stats />
      <ServicesSection />
      <PhilosophySection />
      <FeaturedWork />
      <ProcessSection />
      <Testimonials />
      <HomeCTA />
    </main>
  );
};

export default Home;