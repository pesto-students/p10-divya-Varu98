import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:text-xl  max-h-[50vh]">
      <div className="max-sm:order-2 md:max-w-[40vw] max-sm:-translate-y-20">
        <h1 className="md:text-5xl font-bold flex flex-col mb-8 gap-4">
          <span className="text-blue-500">Little Link:</span> "Simplify and
          Share with Ease"
        </h1>
        <p className="text-slate-500 font-medium max-sm:mb-8">
          Effortlessly simplify and share long URLs with Little Link. Transform
          web addresses into concise, memorable links for social media and
          emails. Save time and experience the convenience today!
        </p>
      </div>
      <div className="max-sm:order-1 max-sm:-translate-y-16 -z-10">
        <img className="max-sm:h-[40vh] " src="/url-short.gif" alt="" />
      </div>
    </div>
  );
};

export default Header;
