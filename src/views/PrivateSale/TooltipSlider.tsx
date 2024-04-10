import React, {useState} from "react";
import ReactSlider from "react-slider";

const datam = [
  {
    id: 6343,
    round: "Round 1",
    value: "$0.012",
  },
  {
    id: 7546,
    round: "Round 2",
    value: "$0.013",
  },
  {
    id: 8565,
    round: "Round 3",
    value: "$0.014",
  },
  {
    id: 9675,
    round: "Round 4",
    value: "$0.015",
  },
];

function TooltipSlider() {
  const [value, setValue] = useState<number>(1);

  return (
    <div>
      <div className="h-[48px] relative mr-6">
        <ReactSlider
          className="horizontal-slider"
          marks
          markClassName="mark"
          min={1}
          max={4}
          thumbClassName="thumb"
          trackClassName="track"
          onChange={(e) => setValue(e)}
          value={value}
          renderThumb={(props, state) => (
            <div {...props}>
              <div className="rounded-[1px] bg-gray-25 absolute -top-24 w-max text-center">
                <div className="relative w-full h-full p-2">
                  <img
                    src="/images/Pointer.svg"
                    className="absolute -bottom-1.5"
                    alt=""
                  />
                  <div className="flex flex-col min-w-[78px]">
                    <span className="text-sm text-gray-1000">
                      {datam[value - 1]?.round}
                    </span>
                    <b className="text-primary-700 text-lg font-bolld">
                      {datam[value - 1]?.value}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default TooltipSlider;
