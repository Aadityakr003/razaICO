import React from "react";

function CryptoLogos() {
  return (
    <div className="mt-4 flex justify-center md:justify-start">
      <div className="bg-white backdrop-blur-[4px] p-4 rounded-2xl bg-opacity-5 flex gap-8 w-max">
        {[
          "/images/Crypto Logo543s.svg",
          "/images/Crypto Logos.svg",
          "/images/Crypto Logos (1).svg",
        ].map((value, index) => (
          <img src={value} key={index} alt="" />
        ))}
      </div>
    </div>
  );
}

export default CryptoLogos;
