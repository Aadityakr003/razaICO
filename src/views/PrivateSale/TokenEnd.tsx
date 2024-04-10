import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import TimeValue from "./TimeValue";

const times = [
  {
    id: 523,
    name: "Days",
  },
  // {
  //   id: 567,
  //   name: "Hours",
  // },
  // {
  //   id: 856,
  //   name: "Minutes",
  // },
  // {
  //   id: 123,
  //   name: "Seconds",
  // },
];

interface rendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderer = (props: rendererProps) => {
  const {days, hours, minutes, seconds, completed} = props;

  const timeValues = [days, hours, minutes, seconds];
  const timesSetup = times.map((item, index) => ({
    ...item,
    time: timeValues[index],
  }));

  if (completed) {
    // Render a completed state
    return <></>;
  } else {
    // Render a countdown
    return (
      <>
        {timesSetup.map(({id, ...rest}) => (
          <TimeValue key={id} {...rest} />
        ))}
      </>
    );
  }
};

function TokenEnd() {

  const [endTime, setEndTime] = useState<number|null>(null);

  useEffect(() => {
    const storedEndTime = localStorage.getItem("endTime");
    if (storedEndTime) {
      setEndTime(parseInt(storedEndTime, 10));
    } else {
      const defaultEndTime = Date.now() + 21 * 24 * 60 * 60 * 1000;
      setEndTime(defaultEndTime);
      localStorage.setItem("endTime", defaultEndTime.toString());
    }
  }, []);


  return (
    <div className="bg-white bg-opacity-5 py-6 md:py-8 px-6 rounded-3xl backdrop-blur-[4px]">
      <h5 className="font-manrope text-4xl text-center mb-6">
        Token sale ends in :
      </h5>

      <div className="flex max-w-[300px] md:max-w-auto mx-auto justify-center items-center gap-24 flex-wrap  md:gap-x-6 gap-y-8 md:gap-4">
      {endTime && (
          <Countdown date={endTime} renderer={renderer} onComplete={() => setEndTime(null)} />
        )} 
      </div>
    </div>
  );
}

export default TokenEnd;
