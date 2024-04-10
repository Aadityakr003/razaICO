import React from "react";

interface ItemProps {
  thumb: string;
  title: string;
  content: string;
}

function Item(props: ItemProps) {
  const {content, thumb, title} = props;

  return (
    <div className="gradientLayer after:rounded-b-2xl shadow-100 bg-gray-700 rounded-2xl min-w-[280px]">
      <div>
        <img
          className="w-full object-cover object-top max-h-[169px]"
          src={thumb}
          alt=""
        />
      </div>
      <div className="relative z-20 p-6">
        <h4 className="font-manrope font-extrabold text-3xl text-primary-700 mb-2">
          {title}
        </h4>
        <p className="text-base leading-7 text-gray-25">{content}</p>
      </div>
    </div>
  );
}

export default Item;
