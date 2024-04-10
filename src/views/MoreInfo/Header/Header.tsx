import React from "react";
import Button from "../../../components/common/Button/Button";

function Header() {
  return (
    <section className="bg-[#0a0a0a] relative -z-[0] gradientLayerBoth xl:after:opacity-40 xl:before:opacity-40 md:after:opacity-70 md:before:opacity-70 after:opacity-30 before:opacity-30">
      <div className="container">
        <div className="flex md:flex-row flex-col md:py-36">
          <div className="flex-grow">
            <video
              autoPlay
              muted
              loop
              src="/videos/KaiChain Option 1A - transparent bg.mp4"
              className="w-[943px]  md:absolute top-0 -z-10 md:-translate-y-[13%] md:-translate-x-[12%]"
              style={{
                aspectRatio: "1/1",
              }}
            />
          </div>
          <div className="w-full max-w-[489px] flex flex-col items-center md:items-end text-center md:text-right z-20 relative md:py-0 py-12">
            <h1 className="text-white font-manrope font-extrabold text-7xl mb-4">
              In-House Features
            </h1>
            <p className="text-xl text-gray-100 mb-14 md:mb-20">
              We have some upcoming features that is scheduled or expected to be
              presented or released in the near future this features which offer
              you a great benefit as shown on our roadmap.
            </p>
            <Button startIcon="/images/Download.svg">Documentation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
