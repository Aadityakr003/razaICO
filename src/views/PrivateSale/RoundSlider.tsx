import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";

const datam = [
  {
    id: 6343,
    round: "Round 1",
    name: "April Price",
    value: "$0.015",
  },
  {
    id: 7546,
    round: "Round 2",
    name: "May Price",
    value: "$0.020",
  },
  {
    id: 8565,
    round: "Round 3",
    name: "June Price",
    value: "$0.030",
  },
  {
    id: 8565,
    round: "Launch",
    name: "July",
    value: "$0.050",
  },
  
];

function RoundSlider() {

  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 4 - 1, 1);     
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 3, 0); 

    const millisecondsInThreeMonths = endDate.getTime() - startDate.getTime();
    const millisecondsSinceStart = currentDate.getTime() - startDate.getTime();

    const fractionOfThreeMonths = millisecondsSinceStart / millisecondsInThreeMonths;

    const newValue = Math.min(Math.ceil(fractionOfThreeMonths * 5), 5); 

    setSliderValue(newValue);

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const millisecondsElapsed = currentTime - startDate.getTime();
      const fractionElapsed = millisecondsElapsed / millisecondsInThreeMonths;
      const newValue = Math.min(Math.ceil(fractionElapsed * 5), 5);
      setSliderValue(newValue);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="max-w-[480px] ml-2 xl:max-w-[550px]">
        <div className="h-[48px] mx-9">
          <ReactSlider
            className="horizontal-slider"
            marks
            markClassName="mark"
            min={1}
            max={5}
            value={sliderValue}
            thumbClassName="thumb"
            trackClassName="track"
            renderThumb={(props, state) => <div {...props} />}
          />
        </div>
        <div className="flex -mx-[13px] md:-mx-[30px] justify-between -translate-y-[28px]">
          
          {datam.map(({id, name, round, value}) => (
            <div className="w-[25%]" key={id}>
              <div className="flex flex-col items-center">
                <img  src="/images/Line 245.svg" alt="" />
                <img className="-mt-12" width={50} height={50} src = "/images/gold_ball.png" />
                <strong className="font bold  text-md leading-6 text-gray-25">
                  {round}
                </strong>
                <p className="text-sm text-gray-100">{name}</p>
                <b className="font-bold text-xl leading-7 text-primary-700">
                  {value}
                </b>
              </div>
            </div>
          ))}
          {/* <span className="w-[25%]" /> */}
        </div>
      </div>
    </div>
  );
}

export default RoundSlider;
