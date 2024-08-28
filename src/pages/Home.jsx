import React from "react";

function Home() {
  return (
    <div className="w-screen">
      <section className=" w-full banner-section">
        <div className="relative  h-screen w-full">
          {/* Background Image with Dark Overlay */}
          <div className="absolute bg-fixed inset-0 bg-[url('/images/banner-home.avif')] bg-cover bg-top ">
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

      <section className="who-we-are  md:flex h-[80vh] z-50 ">
        <div className="h-full w-5/12  float-left text-center flex items-center justify-center ">
          <h2 className="text-5xl font-bold tracking-wide overflow-hidden">
            Who We Are
          </h2>
        </div>

        <div className="h-full md:w-7/12 px-16 leading-loose text-lg text-justify flex items-center justify-center ">
          {" "}
          <p>
            At GS Academy, we revolutionize education by integrating technology
            and personalized learning to equip students with essential skills
            for academic and professional success. Our specialized programs
            AceTrack for skill enhancement, ResearchMate for project support,
            TechWorkStation for hands-on workshops, and NextGenTech for
            cutting-edge training in Data Science, Machine Learning, and AI—are
            designed to empower students. Through AI-driven assessments, we
            provide personalized insights to help students leverage their
            strengths and address areas for improvement, guiding them towards a
            successful future.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="w-full sticky top-0 h-fit md:h-[85vh] bg-gradient-to-r  from-sky-500 via-30% to-emerald-500 to-90% text-white  py-16">
          <div className="w-full   ">
            <div className="w-full flex justify-center">
              <h2 className="text-4xl font-bold leading-relaxed">
                Why Choose GS Academy?
              </h2>
            </div>
            <div className="w-full flex justify-center mt-10">
              <h3 className="text-lg font-medium leading-relaxed">
                Our dedication to excellence empowers students to achieve their
                academic and professional aspirations.
              </h3>
            </div>

            <div className=" m-auto w-1/2  md:w-full md:flex justify-evenly mt-20  ">
              <div className="why-us-card-wrapper">
                {" "}
                <div className="why-us-img-card ">
                  <img src="/images/why-us-innovation.png" alt="" />
                </div>
                <div className="why-us-card-txt ">
                  <p>Innovation</p>
                </div>
              </div>
              <div className="why-us-card-wrapper">
                {" "}
                <div className="why-us-img-card ">
                  <img src="/images/why-us-quality.png" alt="" />
                </div>
                <div className="why-us-card-txt ">
                  <p>Quality</p>
                </div>
              </div>
              <div className="why-us-card-wrapper">
                {" "}
                <div className="why-us-img-card ">
                  <img src="/images/why-us-service.png" alt="" />
                </div>
                <div className="why-us-card-txt ">
                  <p>Assistance</p>
                </div>
              </div>
              <div className="why-us-card-wrapper">
                {" "}
                <div className="why-us-img-card ">
                  <img
                    className=""
                    src="/images/why-us-versatility.png"
                    alt=""
                  />
                </div>
                <div className="why-us-card-txt ">
                  <p>Versatility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
