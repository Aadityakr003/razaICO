import React from "react";
import {Link, To} from "react-router-dom";

export interface ButtonProps {
  to?: To;
  children?: string;
  variant?: "contained" | "outlined" | "text";
  startIcon?: string;
  endIcon?: string;
  color?: "primary" | "gray-25";
  size?: "large" | "medium" | "small";
  shape?: "circle" | "square";
  className?: string;
  onButtonClick?:() => void
}

function Button(props: ButtonProps) {
  const {
    to,
    children,
    color = "primary",
    endIcon,
    shape = "circle",
    size = "medium",
    startIcon,
    variant = "contained",
    className = "",
    onButtonClick
  } = props;

  // Style control
  let variantStyle: string = "";
  let colorStyle: string = "";
  let shapeStyle: string = "";
  let sizeStyle: string = "";
  if (variant === "contained") {
    variantStyle = "";
    if (color === "primary") {
      colorStyle = "bg-primary-700 text-gray-1000 hover:bg-white";
    }
  }

  if (variant === "text") {
    variantStyle = "";
    if (color === "gray-25") {
      colorStyle = "text-gray-25";
    }
    if (color === "primary") {
      colorStyle = "text-primary-700";
    }
  }

  if (size === "large") {
    sizeStyle = "font-bold text-xl px-7 py-4";
  }
  if (size === "medium") {
    sizeStyle = "font-bold text-lg px-5 md:px-6 py-2.5 md:py-3";
  }
  if (size === "small") {
    sizeStyle = "text-md px-3 py-2 font-semibold leading-[20px]";
  }

  if (shape === "circle") {
    shapeStyle = "rounded-full";
  }

  const combine = [
    variantStyle,
    colorStyle,
    shapeStyle,
    sizeStyle,
    className,
  ].join(" ");
  const attributes = {
    className: `flex duration-300 items-center gap-2 whitespace-nowrap ${combine}`,
  };

  const renderChildren = (
    <>
      {startIcon && <img src={startIcon} alt="" />}
      <span>{children}</span>
      {endIcon && <img src={endIcon} alt="" />}
    </>
  );

  return to ? (
    <Link onClick={ onButtonClick } {...attributes} to={to}>
      {renderChildren}
    </Link>
  ) : (
    <button {...attributes} type="button"  onClick={ onButtonClick }>
      {renderChildren}
    </button>
  );
}

export default Button;
