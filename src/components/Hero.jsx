import React from "react";

const Hero = ({ title, desc }) => {
  return (
    <>
      <section className="container1 mt-24 uppercase" data-aos="fade-up">
        <div className="">
          <div className="mb-6">
            <img
              src="/public/images/image.png"
              width={200}
              height={200}
              className="grayscale rounded-xl"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold tracking-wide mb-4 heading1 dark:text-red-500 bg-red-700">
              {title}
            </h2>
            <p className="text-sm font-semibold heading2 mb-4">{desc}</p>
            <button className="flex justify-center items-center p-2 ring-1 space-x-2 ring-inset ring-zinc-700 rounded-xl hover:ring-zinc-800 transition-colors">
              <span className="text-sm font-semibold heading2 uppercase">
                download the resume
              </span>
              <span className="material-symbols-rounded">download</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
