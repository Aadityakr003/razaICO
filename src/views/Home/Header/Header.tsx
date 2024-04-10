import React from "react";
import Button from "../../../components/common/Button/Button";

function Header() {
  return (
    <section>
      <div className="bg-black gradientLayer overflow-hidden px-4 md:px-0">
        <div className="container">
          <div className="absolute">
            <video
              autoPlay
              muted
              loop
              className="h-[1500px] -translate-y-[25%] -translate-x-[45%] md:-translate-x-[40%] md:-translate-y-[18%] max-h-[none] max-w-none"
              style={{ aspectRatio: "1384 /776" }}
            >
              <source src="/videos/Kaichain_Blockchain_Animation_MP4.mp4" />
            </video>
          </div>
        </div>
        <div className="container">
          <div className="flex justify-between pt-[104px] pb-[152px] md:py-[152px]">
            <span />
            <div className="max-w-[800px] flex flex-col items-center md:items-end text-center md:text-right relative z-20">
              <h1 className="font-manrope text-7xl font-extrabold text-white mb-6 block">
                The Architecture of Flawless Transaction
              </h1>
              <p className="text-gray-100 text-xl mb-20 md:mb-24 max-w-[672px]">
                Kaichain is a rising blockchain network that overcomes the
                upcoming flaws in major ecosystems, such as higher TPS, lower
                operational costs and environment-friendly transactions.
              </p>
              <a href={"https://docs.kaichain.net"}>
                <Button startIcon="/images/Download.svg">Documentation</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
