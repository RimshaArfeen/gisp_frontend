
//About
import React, { useState } from 'react'

const About = () => {

  const universityImages = [
    { src: "https://d31u7wi7mdb5z3.cloudfront.net/public/provider/sabanci-university-dfe65/main_photo/Sabanci.webp", title: "Sabanci University" },
    { src: "https://tse2.mm.bing.net/th/id/OIP.dr_KTpzmAfMKIDpudfhi4gHaG7?pid=Api&P=0&h=220", title: "Yale University " },
    { src: "https://tse4.mm.bing.net/th/id/OIP.o5yHQY3wRDVvNyQ0XFik2wHaGC?pid=Api&P=0&h=220", title: "Manchester University" },
  ];
  const [onHover, setHoverIdx] = useState(null)

  return (



      <section className="container px-5 lg:px-7 pb-24 mx-auto">
        <div className="flex justify-center flex-wrap w-full mb-20 lg:mb-0">
          <div className="lg:w-[55%] w-full mb-4 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
              About <span className="text-amber-600">The Global Scholarship Hub</span>
            </h1>
            <div className="h-1 w-20 bg-amber-600 rounded"></div>
            <div className="w-full mx-auto flex flex-wrap justify-center lg:justify-start">
              <div className="flex flex-wrap w-[90%] justify-around py-10">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full h-auto object-center block border-[6px] border-teal-600" src="https://img.freepik.com/free-photo/team-meeting-startups_23-2148898711.jpg?t=st=1744041368~exp=1744044968~hmac=920388a33552d412f03a882b2458865b20b7e6bcda274148c0c3337878c9140c&w=740"
                    data-aos="fade-up" />
                </div>
                <div className="md:p-2 p-1 w-1/2 mt-20 ">
                  <img alt="gallery" className="w-full h-auto object-center block border-[6px] border-teal-600" src="https://img.freepik.com/free-photo/professor-lecturing-students-classroom_23-2151932839.jpg?t=st=1744041427~exp=1744045027~hmac=20e59ead47b805a9cada90f0fb54e25ea7cfe6d053997eb6704ba0e15e151492&w=740"
                    data-aos="fade-up" />
                </div>

              </div>


            </div>


          </div>

          <div className='w-full flex flex-col  items-center lg:w-[42%]'
            data-aos="fade-right">

           
    <div className="text-white flex flex-col justify-center sm:items-center bg-teal-600 rounded-xl shadow-md p-6 h-fit mx-auto mt-5 lg:mt-0 w-full">
  <div className="w-full flex flex-col md:flex-row justify-around items-center">
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {universityImages.map((item, idx) => (
        <div
          key={idx}
          className="relative"
          onMouseEnter={() => setHoverIdx(idx)}
          onMouseLeave={() => setHoverIdx(null)}
        >
          <img
            className="w-14 h-14 lg:w-12 lg:h-12 border-2 border-white rounded-full dark:border-gray-700 hover:scale-105 transition-transform duration-200 cursor-pointer"
            src={item.src}
            alt={item.title}
          />

          {onHover === idx && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 p-4 bg-white text-black dark:bg-gray-800 rounded-lg shadow-xl z-10 animate-fadeIn border">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-28 object-cover rounded-md"
              />
              <h5 className="mt-2 text-lg font-semibold">{item.title}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A prestigious institution known worldwide.
              </p>
              <a
                href="#"
                className="mt-3 inline-block px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors"
              >
                Learn More
              </a>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="w-full md:w-1/2 pl-3 flex justify-center items-center lg:items-start mt-3 md:mt-0">
      <h2 className="title-font font-extrabold text-5xl mr-3">3</h2>
      <p className="leading-relaxed text-lg font-medium">World Top Universities</p>
    </div>
  </div>

  <div className="mx-auto w-full md:w-[85%] lg:w-full flex justify-between items-center flex-wrap mt-4">
    {[
      { label: "Successful Graduates", value: "🎓 7k+" },
      { label: "Students", value: "📚 2.7K" },
      { label: "Faculties", value: "🏛️ 7" },
    ].map((stat, i) => (
      <div
        key={i}
        className="py-4 w-1/3 flex flex-col justify-center items-center"
      >
        <h2 className="title-font font-bold text-xl">{stat.value}</h2>
        <p className="leading-relaxed text-sm opacity-90">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

            <div className=' w-full mt-10 text-justify'>
              <p className='tracking-wide text-xl first-letter:font-semibold first-letter:text-3xl  font-light'>At Global Scholarship Hub, we are dedicated to empowering students by providing them with the tools and resources they need to pursue their academic dreams abroad. Our platform connects students with top universities, prestigious faculties, and scholarship opportunities, ensuring that bright minds have access to the education they deserve—regardless of financial constraints.</p>
            </div>


          </div>

        </div>
        {/* <div  className="text-center -my-10">
  <h2  className="text-2xl font-bold text-gray-800">Unlock Global Opportunities</h2>
  <p  className="mt-2 text-gray-600 max-w-2xl mx-auto">
    Studying abroad is more than just academics—it's a gateway to personal growth, global networks, and brighter career prospects. Discover how scholarships can be your stepping stone to the world.
  </p>
</div> */}

     
    </section>
  )
}

export default About
