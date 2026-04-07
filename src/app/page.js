import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
// import SecuredSection from '@/components/SecuredSection';  // Commented out to reduce scroll
import ServicesSection from '@/components/ServicesSection';
// import MembershipSection from '@/components/MembershipSection';  // Commented out to reduce scroll
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', transition: 'background 0.5s ease' }}>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <Footer />
        <ThemeToggle />
      </main>
    </SmoothScrollProvider>
  );
}
