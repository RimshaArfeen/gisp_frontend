// src/components/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import UniversitiesInfo from '../UniversitiesInfo/UniversitiesInfo'
import AcademicPrograms from '../AcademicPrograms/AcademicPrograms'
import About from '../About/About'
import ScholarshipBenefits from './ScholarshipBenefits'
import BgVideo from "../../assets/BgVideo.mp4"
import { FaArrowDown } from "react-icons/fa";
import PosterImage from "../../assets/Images/ManchesterUni/3.jpg"
import LoadingComp from '../../Components/LoadingComp'
import "../../index.css"

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake loading time (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth' 
    });
  }

  if (isLoading) {
    return <LoadingComp />; // Show loading screen only
  }

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
          src={BgVideo}
          poster={PosterImage}
        ></video>

        {/* overlay */}
        <div className="absolute inset-0 bg-gray-800/10"></div>

        <div data-aos="zoom-in" className="relative z-10 px-6 max-w-4xl text-text-light">
          <h1 className="text-4xl md:text-6xl text-dark font-extrabold tracking-wide mb-4 drop-shadow-lg">
            Welcome to <span className="text-secondary">Global IT Scholarship Program</span>
          </h1>
          <p className="text-lg md:text-xl  text-gray-900 mb-8 drop-shadow-md">
            Empowering Future Innovators with Prestigious IT Scholarships
          </p>
          <div className="flex flex-wrap justify-center uppercase gap-4">
            <NavLink
              to="/applicationForm"
              className="px-8 py-3 rounded-full transition-all duration-300 bg-amber-600 hover:bg-black hover:text-amber-600 text-lg font-semibold shadow-lg"
            >
              Apply Now
            </NavLink>
            <NavLink
              to="/scholarships"
              className="px-8 py-3 rounded-full border-2 border-text-light bg-gray-100/10 hover:bg-gray-100/40 text-lg font-semibold shadow-lg transition-all duration-300 "
            >
              See Guidelines
            </NavLink>
          </div>
        </div>

        <div
          onClick={handleScroll}
          className="absolute bottom-6 w-full flex justify-center animate-bounce hover:cursor-pointer"
        >
          <FaArrowDown className="text-text-light text-3xl" />
        </div>
      </section>

      <About />
      <ScholarshipBenefits />
      <AcademicPrograms />
      <UniversitiesInfo />
    </>
  );
}

export default Home;
