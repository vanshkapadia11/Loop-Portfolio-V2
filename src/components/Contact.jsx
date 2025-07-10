import React from "react";

const Contact = () => {
  return (
    <>
      <section
        className="container mt-24 py-24 md:w-7/12 md:justify-center md:items-center md:mx-auto"
        data-aos="fade-up"
      >
        <div className="mx-4">
          <h2 className="text-3xl font-semibold uppercase heading1 mb-2">
            Contact Me
          </h2>
          <p className="text-sm font-semibold tracking-wide uppercase heading2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            alias ipsum fugiat ipsam.
          </p>
        </div>
        <form action="" className="">
          <div className="flex flex-col">
            <div className="flex flex-col mt-6 mx-4">
              <label htmlFor="name" className="uppercase mx-2 mb-1">
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 ring-2 ring-inset ring-zinc-600 rounded-lg mb-8 outline-none text-xs font-medium dark:bg-zinc-900"
              />
            </div>
            <div className="flex flex-col mb-6 mx-4">
              <label htmlFor="message" className="uppercase mx-2 mb-1">
                message
              </label>
              <textarea
                className="p-2 ring-2 ring-inset ring-zinc-600 rounded-lg mb-8 outline-none text-xs font-medium dark:bg-zinc-900"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button className="flex items-center justify-center space-x-3 uppercase text-sm font-semibold ring-1 ring-inset ring-zinc-700 rounded-xl p-2 mx-20">
              <span>send via Email</span>
              <span className="material-symbols-rounded">mail</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
