import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Item from "./Item";
import points from "./points.json";

function BuildFor() {
  return (
    <section>
      <div className="bg-white bg-buildSection bg-cover">
        <div className="container pt-20 md:pt-36 pb-16 md:pb-48">
          <div className="mx-auto max-w-800 mb-16 md:mb-[104px]">
            <h2 className="text-7xl leading-[0.775] mb-5 md:mb-6 font-extrabold font-manrope text-gray-1000">
              <span className="block">Built for Developers</span>
              <span className="md:font-normal text-5xl">
                <span className="font-extrabold">and </span>
                <span>Common Folks</span>
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Everyone have the full access to blockchain no matter how deep
              your knowledge is on blockchain. Kaichain opens the door for
              everyone to explore blockchain and its adoption.
            </p>
          </div>
          <div>
            <ScrollContainer className="flex gap-8">
              {points.map(({id, ...rest}) => (
                <Item key={id} {...rest} />
              ))}
            </ScrollContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildFor;
