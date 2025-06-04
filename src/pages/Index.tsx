import Hero from "@/components/Hero";
import AboutBook from "@/components/AboutBook";
import Chapters from "@/components/Chapters";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutBook />
      <Chapters />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
