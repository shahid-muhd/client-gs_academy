import React from "react";

function Home() {
  return (
    <div>
      <section className="banner-section w-full ">
        <div className="relative  h-screen w-full">
          {/* Background Image with Dark Overlay */}
          <div className="absolute bg-fixed inset-0 bg-[url('/images/banner-home.jpg')] bg-cover bg-top ">
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Dark overlay */}
          </div>

          {/* Content on top */}
          <div className="relative z-10 flex justify-center items-center h-full">
            <div className="w-3/4 text-center  ">
              <h1 className="text-white text-3xl font-bold leading-relaxed">
                SOAR TO YOUR BRIGHTEST FUTURE WITH TECHNOLOGY DRIVEN LEARNING
                AND PERSONALIZED GUIDANCE
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are w-full flex h-96 z-50 ">
        <div className="h-full w-5/12  float-left text-center flex items-center justify-center ">
          <h1 className="text-5xl font-bold leading-relaxed ">Who We Are</h1>
        </div>

        <div className="h-full md:w-7/12 px-16 text-lg text-justify flex items-center justify-center ">
          {" "}
          <p>
            At GS Academy, we are committed to revolutionizing education through
            the integration of technology and personalized learning. Our mission
            is to equip students with essential skills for professional and
            academic success. We offer a range of specialized programs include
            AceTrack for skill enhancement, ResearchMate for research and
            project support, and TechWorkStation offering hands-on workshops in
            MATLAB, Embedded Systems, and VLSI. NextGenTech provides
            cutting-edge training in Data Science, Machine Learning, and
            AI.Through AI-driven assessments, provide personalized insights,
            helping students focus on their strengths and address areas for
            improvement. At GS Academy, we blend innovation with expertise to
            guide students towards a successful and bright future.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
