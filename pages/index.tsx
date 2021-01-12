import ComboOffer from '../Components/ComboOffer';
import EnrollmentFeatures from '../Components/EnrollmentFeatures';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Nav from '../Components/Nav';
import Testimonials from '../Components/Testimonials';
import PlatformSpecificFeatures from '../Components/PlatformSpecificFeatures';
import AboutAuthor from '../Components/AboutAuthor';

// export const config = {
//   unstable_runtimeJS: false,
// };

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <EnrollmentFeatures />
      <ComboOffer />
      <AboutAuthor />
      <Testimonials />
      <PlatformSpecificFeatures />
      <Footer />
    </div>
  );
}
