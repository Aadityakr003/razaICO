import React from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/common/Button/Button";

interface ItemProps {
  title: string;
  content: string;
  learnMore: string;
  thumb: string;
}

function Item(props: ItemProps) {
  const {content, learnMore, thumb, title} = props;

  return (
    <Link
      className="gradientLayer group after:rotate-180 after:rounded-2xl technology-card"
      to={learnMore}
    >
      <div className="relative z-20">
        <img
          className="w-full object-cover object-top opacity-0 h-[241px]"
          src={thumb}
          alt=""
        />
        <img
          className="w-full md:w-[320px] md:-translate-x-[12%] lg:w-full lg:translate-x-0 md:max-w-none lg:max-w-full object-cover absolute top-0 object-top "
          src={thumb}
          alt=""
        />
      </div>
      <div className="technology-card-content">
        <h4 className="font-manrope font-extrabold text-3xl text-gray-25 mb-2">
          {title}
        </h4>
        <p className="text-base leading-7 text-gray-100 mb-3">{content}</p>
        <div className="flex justify-end">
          <Button
            className="font-source-sans-pro font-semibold text-base leading-6"
            variant="text"
            color="gray-25"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default Item;
