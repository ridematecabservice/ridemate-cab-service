import { useEffect } from 'react';
import Hero from '../components/Hero';
import ServiceAreas from '../components/ServiceAreas';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import PopularRoutes from '../components/PopularRoutes';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  useEffect(() => {
    document.title = 'RideMate Cab Service Mathura | Taxi Service in Mathura';
  }, []);

  return (
    <main>
      <Hero />
      <ServiceAreas />
      <Services />
      <Fleet />
      <PopularRoutes />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;
