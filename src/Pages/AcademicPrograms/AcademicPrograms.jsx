// src/components/AcademicPrograms/AcademicPrograms.jsx
import React from 'react';
import Slider from "react-slick";
import { academicPrograms } from './Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AcademicPrograms = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 900,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    
//AcademicPrograms

    <section className="text-gray-600 body-font py-24">
      <div className="container px-5 mx-auto flex flex-wrap justify-between">
        <div className="md:w-[30%] md:px-2 lg:px-4 mb-8 md:mb-0">
          <h2 data-aos="fade-right" className="md:text-4xl text-3xl font-bold uppercase tracking-widest title-font mb-2 dark-text">
            Academic <span className='block text-amber-600'>Programs</span>
          </h2>
          <div data-aos="zoom-in" className="h-1.5 bg-amber-600 w-2/3 mb-4 rounded"></div>
          <p data-aos="fade-right" className="leading-relaxed text-justify text-base text-gray-700">
            Our academic programs provide a dynamic learning experience, combining theoretical knowledge with practical skills.
          </p>
        </div>
        
        <div data-aos="fade-left" className="w-full md:w-[67%] lg:w-[69%]">
          <Slider {...settings}>
            {academicPrograms.map((item, index) => (
              <div key={index} className="p-2">
                <div className="h-64 px-6 py-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white text-gray-800 transition-all duration-300 transform group">
                  <h2 className="tracking-widest text-xs font-semibold mb-4 text-white px-3 py-1 rounded-full bg-teal-600 inline-block">
                    {item.category}
                  </h2>
                  <h1 className="sm:text-xl text-2xl font-bold uppercase dark-text leading-6 mb-2">
                    {item.faculty}
                  </h1>
                  <p className="leading-relaxed text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
