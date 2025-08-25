// src/components/Home/Home.jsx
import { NavLink } from 'react-router-dom'
import UniversitiesInfo from '../UniversitiesInfo/UniversitiesInfo'
import AcademicPrograms from '../AcademicPrograms/AcademicPrograms'
import About from '../About/About'
import ScholarshipBenefits from './ScholarshipBenefits'
import BgVideo from "../../assets/BgVideo.mp4"
import { FaArrowDown } from "react-icons/fa";
import PosterImage from "../../assets/Images/ManchesterUni/3.jpg" // Import your static image

const Home = () => {
  const handleScroll = () => {
    console.log("Scrolling arrow");
    window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth' 
    });
  }

  return (
    <>
      {/* Landing Page */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden ">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
          src={BgVideo}
          poster={PosterImage} // Add the poster attribute here
        ></video>
        <div className="absolute inset-0 bg-teal-800/60"></div>

        <div data-aos="zoom-in" className="relative z-10 px-6 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
            Welcome to <span className="text-amber-500">Global IT Scholarship Program</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 drop-shadow-md">
            Empowering Future Innovators with Prestigious IT Scholarships
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/applicationForm" className="px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-lg font-semibold shadow-lg transition-colors">
              Apply Now
            </NavLink>
            <NavLink to="/scholarships" className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-teal-800 text-lg font-semibold shadow-lg transition-colors">
              See Guidelines
            </NavLink>
          </div>
        </div>
        <div onClick={handleScroll} className="absolute bottom-6 w-full flex justify-center animate-bounce hover:cursor-pointer">
          <FaArrowDown className="text-white text-3xl" />
        </div>
      </section>
      
      {/* Main Content Sections */}
      <div className='w-full overflow-x-hidden py-24'>
        <About />
        <ScholarshipBenefits />
        <AcademicPrograms />
        <UniversitiesInfo />
      </div>
    </>
  )
}

export default Home;