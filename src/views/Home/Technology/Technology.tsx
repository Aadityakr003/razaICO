import React from "react";
import Item from "./Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from "./items.json";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <></>,
  prevArrow: <></>,
  customPaging: () => <div className="w-2 h-2 rounded-full bg-primary-700" />,
};

function Technology() {
  return (
    <section className="bg-technologySection bg-center bg-cover">
      <div className="container pt-20 pb-20 md:pt-36 md:pb-[104px] relative z-20">
        <h1 className="font-manrope text-7xl text-gray-25 text-center mb-10 md:mb-20">
          The Kaichain Technology
        </h1>
        <div className="">
          <div className="md:hidden">
            <Slider {...settings}>
              {items.map(({id, ...rest}) => (
                <div key={id} className="grid relative">
                  <Item {...rest} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-8">
            {items.map(({id, ...rest}) => (
              <Item key={id} {...rest} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
