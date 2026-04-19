import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import LeadPopup from '@/components/LeadPopup';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main style={{ minHeight: '100vh' }}>
        <Navbar />
        <HomePage />
        <ServicesSection />
        <WhyChooseUs />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <ThemeToggle />
        <LeadPopup />
      </main>
    </SmoothScrollProvider>
  );
}
