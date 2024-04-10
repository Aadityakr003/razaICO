import React from "react";
import items from "./items.json";

function Features() {
  return (
    <div>
      <div className="grid grid-cols-3 md:flex bg-primary-700 lg:justify-center">
        {items.map(({id, icon, name}) => (
          <div
            key={id}
            className="bg-primary-700 py-7 px-4 flex flex-col items-center text-center gap-1 md:gap-3 w-full md:max-w-[160px] border-r border-b md:border-b md:last:border-r-0 border-gray-1000"
          >
            <img className="xl:w-auto lg:w-12 w-10" src={icon} alt={name} />
            <span className="text-black text-base leading-5">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
