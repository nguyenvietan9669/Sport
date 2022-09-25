import Contact from "../components/Contact/Contact";
import Course from "../components/Course";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Program from "../components/Program";
import Reason from "../components/Reasons";
import Testimonial from "../components/Testimonials";

function Main() {
    return ( <div>
        <Hero/>
        <Program/>
        <Reason/>
        <Course/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div> );
}

export default Main;