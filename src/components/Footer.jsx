import React from "react";

const Footer = () => {
  return (
    <>
      <section className="container py-10 border-t-2 border-zinc-300">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-sm font-semibold tracking-wide pb-5 uppercase">
            &copy; {new Date().getFullYear()} VANSH KAPADIA.{" "}
          </span>
          <span className="text-sm font-medium tracking-wide uppercase">
            All rights reserved -- Just Kidding This Is Just A Project For
            Learning!!
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
