import React from "react";

interface TimeValueProps {
  time: number;
  name: string;
}

function TimeValue({time, name}: TimeValueProps) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <span className="font-manrope font-light text-[56px] leading-[67px] text-primary-700">
        {time}
      </span>
      <span className="font-manrope font-extrabold text-base leading-5 tracking-[0.2em] text-gray-25">
        {name}
      </span>
    </div>
  );
}

export default TimeValue;
