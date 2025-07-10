import React from "react";

const ProjectCard = () => {
  return (
    <>
      <section className=" mt-28 py-20 uppercase border-b-2 border-zinc-400">
        <div className="container1" data-aos="fade-up">
          <h2 className="text-3xl font-semibold heading1">Projects</h2>
          <p className="text-zinc-700 mt-4 text-sm font-medium md:w-10/12 tracking-wider heading-2 mb-10 heading2">
            I have worked with a number of clients ranging from nascent startup
            to Fortune 500 companies. Check what I can do.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 container"
          data-aos="fade-up"
        >
          <div className="p-10 ring-2 ring-inset ring-zinc-700 rounded-xl">
            <div className="flex flex-col">
              <span
                className="material-symbols-rounded text-black heading1"
                style={{ fontSize: "40px" }}
              >
                account_tree
              </span>
              <h2 className="text-zinc-800 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-white ">
                Ideation and Prototyping
              </h2>
              <p className="text-zinc-800 mt-4 text-sm md:w-10/12 tracking-wide heading2">
                Idea generation and prototyping are two of the most important
                aspects of product development.
              </p>
            </div>
          </div>
          <div
            className="p-10 ring-2 ring-inset ring-zinc-700 rounded-xl"
            data-aos="fade-up"
          >
            <div className="flex flex-col">
              <span
                className="material-symbols-rounded text-black heading1"
                style={{ fontSize: "40px" }}
              >
                globe_asia
              </span>
              <h2 className="text-zinc-800 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-white">
                Headless Web Development
              </h2>
              <p className="text-zinc-800 mt-4 text-sm md:w-10/12 tracking-wide heading2">
                Headless architecture can improve performance since the frontend
                is optimized to render content efficiently
              </p>
            </div>
          </div>

          <div
            className="p-10 ring-2 ring-inset ring-zinc-700 rounded-xl"
            data-aos="fade-up"
          >
            <div className="flex flex-col">
              <span
                className="material-symbols-rounded text-black heading1"
                style={{ fontSize: "40px" }}
              >
                construction
              </span>
              <h2 className="text-zinc-800 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-white">
                Redesigning Products
              </h2>
              <p className="text-zinc-800 mt-4 text-sm md:w-10/12 tracking-wide heading2">
                Sometimes you don't need to start everything from scratch.
                Redesigning existing apps can be cost effective.
              </p>
            </div>
          </div>

          <div
            className="p-10 ring-2 ring-inset ring-zinc-700 rounded-xl"
            data-aos="fade-up"
          >
            <div className="flex flex-col">
              <span
                className="material-symbols-rounded text-black heading1"
                style={{ fontSize: "40px" }}
              >
                school
              </span>
              <h2 className="text-zinc-800 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-white">
                Coach teams
              </h2>
              <p className="text-zinc-800 mt-4 text-sm md:w-10/12 tracking-wide heading2">
                In can coach team of small and medium size. Topics I can coach
                on are frontend development and UI design.
              </p>
            </div>
          </div>
        </div>
        <button className="flex items-center space-x-2 justify-self-center mt-20 uppercase p-4 ring-1 ring-inset ring-zinc-700 rounded-xl ">
          <span className="font-sm font-semibold">view more!!</span>
          <span className="material-symbols-rounded text-black heading1">
            arrow_outward
          </span>
        </button>
      </section>
    </>
  );
};

export default ProjectCard;
