import React from "react";

function About() {
  return (
    <div>
      <section className="relative w-full h-[120vh] ">
        <div className="w-full h-1/2 overflow-hidden bg-red-200">
          <img className=" w-full" src="/images/banner-home.avif" alt="" />
        </div>
        <div className="flex w-full top-1/4 justify-center absolute">
          <div className=" p-10  w-10/12 h-fit rounded-[3rem] space-y-3 bg-slate-100 overflow-hidden">
            <div className="w-full h-fit | text-6xl text-center  ">
              <h2>Who We Are</h2>
            </div>
            <div className="w-full  text-lg text-justify leading-relaxed space-y-5">
              <p>
                GS Academy stands at the forefront of educational innovation,
                dedicated to equipping students with the skills and knowledge
                required to thrive in a rapidly evolving world. We specialize in
                delivering technology-driven, personalized learning experiences
                that empower students to achieve excellence in both their
                academic and professional journeys. Our commitment to fostering
                growth is exemplified through our unique initiatives, including
                AceTrack, which offers tailored coaching in aptitude, reasoning,
                English, and programming, guided by advanced AI-based
                assessments that precisely identify each student’s strengths and
                areas for improvement. This approach allows us to create
                customized learning paths that maximize growth and foster
                achievement.{" "}
              </p>{" "}
              <p>
                Our expertise extends beyond conventional education with
                ResearchMate, where we provide robust support for research
                projects, helping students and professionals alike navigate
                complex challenges and achieve publication success.
                Additionally, TechWorkStation bridges the gap between academia
                and industry by offering immersive workshops in MATLAB, Embedded
                Systems, and VLSI, equipping students with practical,
                industry-aligned skills crucial for their careers. NextGenTech
                offers training in cutting-edge technologies such as Data
                Science, Machine Learning, and AI, equipping students with the
                expertise to excel in emerging fields and meet the demands of
                tomorrow's workforce.{" "}
              </p>{" "}
              <p>
                At GS Academy, we are more than an educational institution, we
                are a catalyst for transformation. Our holistic approach
                combines rigorous academic training with real world application,
                fostering a culture of integrity, innovation, and collaboration.
                By seamlessly integrating technology and expert guidance, we
                guide our students toward achieving their fullest potential,
                preparing them not only to succeed in exams but to become
                leaders in their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full h-screen"></section>
    </div>
  );
}

export default About;
