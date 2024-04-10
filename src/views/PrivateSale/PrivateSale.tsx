import React, { useState } from "react";
import CryptoLogos from "./CryptoLogos";
import Header from "./Header";
import RoundSlider from "./RoundSlider";
import TokenEnd from "./TokenEnd";
import TooltipSlider from "./TooltipSlider";

function PrivateSale() {

  return (
    <div className="relative">
      <div className="videoWrapper">
        <video
          className="w-full videoWrapper absolute -z-10 object-cover h-full"
          autoPlay
          muted
          loop
          src="/videos/39823475.mp4"
        />
      </div>
      <div className="container md:pb-[120px] relative z-20">
        <Header />
        <section className="flex lg:flex-row flex-col gap-16 md:gap-0">
          <div className="flex-grow">
            <div className=" lg:block">
              <RoundSlider />
            </div>
            {/* <div className="lg:hidden flex gap-4">
              <div className="flex-grow">
                <TooltipSlider />
              </div>
              <div className="hidden lg:hidden md:block -translate-y-7">
                <CryptoLogos />
              </div>
            </div> */}
            <div className="md:hidden lg:block">
              <CryptoLogos />
            </div>
          </div>
          <div className="md:pr-8 w-full max-w-[490px]">
            <TokenEnd />
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivateSale;
