import {FeaturesSection} from '../Components/Landing/Features';
import {Footer} from '../Components/Landing/Footer';
import {Header} from '../Components/Landing/Header';
import {HeroSection} from '../Components/Landing/Hero';
import { HowItWorksSection} from '../Components/Landing/HowItWorks';
import {TestimonialsSection} from '../Components/Landing/Testimonials';
import { VideoPreview } from '../Components/Landing/VideoPreview';

export const LandingPage = () =>{
    return(
        <div className='w-full bg-gray-50 overflow-x-hidden'>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <VideoPreview />
            <TestimonialsSection />
            <Footer />
        </div>
    )
}