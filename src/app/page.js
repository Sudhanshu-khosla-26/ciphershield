import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SecuredSection from '@/components/SecuredSection';
import ServicesSection from '@/components/ServicesSection';
import MembershipSection from '@/components/MembershipSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main style={{ background: '#020407', minHeight: '100vh' }}>
        <Navbar />
        <HeroSection />
        <SecuredSection />
        <ServicesSection />
        <MembershipSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
