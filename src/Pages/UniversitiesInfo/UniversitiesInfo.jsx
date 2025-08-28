import React, { useState, useEffect } from 'react';
import universities from './UniData.js';
import { useParams, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// The UniversitiesInfo component is not modified as the focus is on UniDetails.
const UniversitiesInfo = () => {
  return (

    //Scholarship
<section className="pb-48 h-fit ">
      <div className="container mx-auto px-5 h-fit overflow-hidden">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark-text mb-2">
            Explore Our Partner Universities
          </h2>
          <div className="h-1.5 w-24 bg-amber-600 mx-auto rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {universities.map((item, index) => (
            <div key={index} className="p-4 w-full sm:w-[85%] mx-auto my-2 md:my-0 md:w-1/3">
              <div className="bg-gray-200 rounded-xl shadow-lg overflow-hidden h-full transform transition-transform duration-300 ">
                
                <NavLink to={`/UniDetails/${item.name}`}>
                  <div className="h-64 overflow-hidden">
                    <img
                      alt={item.name}
                      className="object-cover object-center h-full w-full"
                      src={item.imgUrl}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-teal-800">
                      {item.name}
                    </h3>
                  </div>
                </NavLink>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export const UniDetails = () => {
  const { id } = useParams();
  const university = universities.find((uni) => uni.name === id);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
  };

  if (!university) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#CFD8DC]">
        <h2 className="text-center text-3xl font-semibold text-red-600">
          University not found
        </h2>
      </div>
    );
  }

  return (
  <section className="relative ">
  {/* Sticky Table of Contents */}
  <nav
    className={`hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
      isSticky ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`}
  >
    <ul className="flex flex-col space-y-2 px-4 py-5/90 backdrop-blur-md rounded-r-2xl shadow-xl border-l-[6px] border-primary">
      {[
        { id: 'about', label: 'About' },
        { id: 'virtual-tour', label: 'Virtual Tour' },
        { id: 'scholarships', label: 'Scholarships' },
        { id: 'apply-now', label: 'Apply Now' },
      ].map((item) => (
        <li key={item.id} className="group w-full">
          <a
            href={`#${item.id}`}
            className="flex items-center justify-center px-3 py-2 rounded-lg dark-text font-medium transition-all duration-300 group-hover:bg-primary group-hover:text-text-light group-hover:shadow-lg"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>

  {/* Hero Section */}
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${university.imgUrl}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    className="px-6 w-full mx-auto pt-24 lg:pt-56 pb-16 text-gray-100 text-center min-h-[500px] flex flex-col justify-center"
  >
    <h1 className="mb-4 text-4xl font-bold leading-none md:text-5xl lg:text-6xl drop-shadow-lg">
      {university.name}
    </h1>
    <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl mb-8 text-gray-300">
      Unlock your future with top-tier education and exclusive scholarship
      opportunities.
    </p>
    <div className="flex justify-center mt-6">
      <a
        href="#scholarships"
        className="inline-flex items-center py-4 px-8 text-xl font-medium bg-amber-600 text-gray-950  hover:bg-black hover:text-amber-600 rounded-full  transition-all duration-300 ease-in-out group"
      >
        Explore Scholarships
        <svg
          className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
    <div className="w-full flex flex-wrap justify-start md:justify-center mt-12 gap-y-6 gap-x-12">
      {university.contact.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="material-symbols-outlined flex items-center justify-center bg-gray-100/20 p-3 rounded-full text-2xl drop-shadow-md">
            {item.icon}
          </span>
          <p className=" ml-2 sm:ml-4 text-text-light text-sm text-left  sm:text-lg">{item.description}</p>
        </div>
      ))}
    </div>
  </div>

  {/* University Overview and Slider Section */}
  <div id="about" className="w-full lg:w-[85%] mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div className="lg:flex-grow lg:w-[56%] md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center">
      <div className="flex flex-col items-start w-full">
        <h2 className="text-3xl font-bold dark-text">
          About {university.name}
        </h2>
         <div className="h-1 w-5/6 sm:w-40 mx-auto sm:mx-0 bg-amber-600 rounded my-2"></div>
        <p className="leading-relaxed text-lg dark-text text-justify mb-8">
          {university.overview}
        </p>
        <div className="flex items-center p-4 rounded-lg shadow-sm mt-4 ">
          <img
            alt="Vice Chancellor"
            src={university.chancellorImg}
            className="w-20 h-20 rounded-full object-cover object-center border-2 border-primary"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="text-xl font-bold dark-text">{university.chancellor}</span>
            <span className="text-sm dark-text tracking-wider mt-1">
              Vice Chancellor
            </span>
          </span>
        </div>
      </div>
    </div>
    <div className="lg:w-[45%] md:w-1/2 w-full mx-auto  overflow-hidden">
      <Slider {...sliderSettings}>
        {university?.sliderImgs?.map((img, index) => (
          <div key={index}>
            <img className="shadow-xl object-cover object-center w-full h-[40vh]" alt="University Campus" src={img} />
          </div>
        ))}
      </Slider>
    </div>
  </div>

 <div className="h-[2px] w-60 bg-amber-600 rounded my-20 mx-auto"></div>
  {/* Virtual Tour */}
  <div id="virtual-tour" className="bg-transparent py-14">
    <div className="w-3/4 mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 dark-text uppercase">
        Take a Virtual Campus Tour
      </h2>
      <div className="relative w-full">
        <iframe
          width="1000"
          height="450"
          src={university.ytLink}
          title="Campus Virtual Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className=' w-fit sm:w-full'
        ></iframe>
      </div>
    </div>
  </div>

  {/* Scholarship Section */}
  <div className="px-5 py-24 mx-auto" id="scholarships">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-3xl lg:text-4xl font-bold dark-text tracking-wide uppercase mb-2">
        Scholarship Opportunities
      </h1>
 <div className="h-[2px] w-60 bg-amber-600 rounded my-2 mx-auto"></div>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl mb-8 dark-text">
        Discover the scholarships offered by {university.name}.
      </p>
    </div>

    {university.scholarships.map((item, index) => (
      <div
        key={index}
        className="mb-16 p-3 sm:p-8 rounded-xl shadow-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <h3 className="text-3xl font-bold dark-text text-center mb-2">
          {item.name}
        </h3>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center mb-8 dark-text">
          {item.description}
        </p>
        <div className="flex lg:w-[84%] w-full flex-col md:flex-row mx-auto items-start justify-between px-2 sm:px-8 lg:px-0 gap-8">
          {/* Eligibility */}
          <div className="w-full md:w-1/2 lg:w-[46%] p-6 rounded-lg border border-amber-600">
            <h4 className="text-2xl font-bold dark-text mb-4">
              Eligibility Criteria
            </h4>
            <ul className="space-y-6">
              {item.eligibilityCriteria.map((criteria, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="material-symbols-outlined  text-amber-800 text-2xl mr-4">
                    {criteria.icon}
                  </span>
                  <div>
                    <h5 className="text-lg font-semibold dark-text">
                      {criteria.title}
                    </h5>
                    <p className="text-base dark-text">
                      {criteria.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits & Application */}
          <div className="w-full md:w-1/2 lg:w-[46%] p-6 rounded-lg border border-amber-600">
            <h4 className="text-2xl font-bold dark-text mb-4">
              Benefits & Application
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="material-symbols-outlined  text-amber-800 text-2xl mr-4">
                  card_giftcard
                </span>
                <div>
                  <h5 className="text-lg font-semibold dark-text">Benefits</h5>
                  <p className="text-base dark-text">{item.benefits}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined   text-amber-800 text-2xl mr-4">
                  sync_alt
                </span>
                <div>
                  <h5 className="text-lg font-semibold dark-text">
                    Application Process
                  </h5>
                  <p className="text-base dark-text">{item.applicationProcess}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined  text-amber-800 text-2xl mr-4">
                  schedule
                </span>
                <div>
                  <h5 className="text-lg font-semibold dark-text">Deadline</h5>
                  <p className="text-base dark-text">{item.deadline}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ))}

    {/* CTA */}
    <div
      id="apply-now"
      className="bg-primary flex flex-col md:flex-row items-center justify-between mx-auto mt-8  w-full py-14 px-8 rounded-lg"
    >
      <h1 className="flex-grow sm:pr-16 font-semibold text-3xl tracking-wider text-center md:text-left">
        Unlock Your Future – Take the First Step Today!
      </h1>
      <NavLink
        to="/applicationForm"
        className="text-xl w-full md:w-1/3 lg:w-1/4 flex-shrink-0 dark-text bg-text-light border-2 border-text-light py-4 px-8 focus:outline-none rounded-full md:text-lg mt-10 md:mt-0 uppercase font-bold text-center transition-colors"
      >
        Apply Now
      </NavLink>
    </div>
  </div>
</section>

  );
};

export default UniversitiesInfo;