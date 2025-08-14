import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Howitworks from '../../components/Howitworks/Howitworks';
import Testimonial from '../../components/Testimonial/Testimonial';
import Future from '../../components/Future/Future';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <Howitworks />
        <Testimonial />
        <Future />
        <Footer />
    </>
  )
}
export default Homepage;