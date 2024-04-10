import React, {Fragment} from "react";
import {Link, To} from "react-router-dom";

export interface LinkItemData {
  title?: string;
  knicktitle?: string;
  knicktitleMobile?: string;
  subtitle?: string;
  icon?: string;
  iconSpacing?: boolean;
  to?: To;
  display?: LinkItemProps[];
}

interface LinkItemProps extends LinkItemData {
  variant?: "navbar" | "drawer";
  changeDisplay?: (data?: LinkItemProps[]) => void;
}

function LinkItem(props: LinkItemProps) {
  const {
    subtitle,
    title,
    knicktitle,
    knicktitleMobile,
    icon,
    iconSpacing,
    variant = "navbar",
    to,
    display,
    changeDisplay,
  } = props;

  const attributes = {
    onClick: () => changeDisplay?.(display),
    className: `flex gap-1 items-center group ${
      variant === "drawer" ? "justify-end" : ""
    }`,
  };

  const renderer = (
    <Fragment>
      {icon && (
        <img
          src={icon}
          className={`block grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 duration-200 ${
            iconSpacing ? "mr-1" : ""
          }`}
          alt=""
        />
      )}
      <span className="text-gray-25 font-bold text-base">
        {title && (
          <span className="group-hover:text-primary-700 duration-200 cursor-pointer">
            {title}
          </span>
        )}
        {knicktitle && (
          <span
            className={`font-normal group-hover:text-primary-700 duration-200 ${
              knicktitleMobile ? "hidden lg:inline-block" : ""
            }`}
          >
            &nbsp;{knicktitle}
          </span>
        )}
        {knicktitleMobile && (
          <span className="font-normal lg:hidden">
            &nbsp;{knicktitleMobile}
          </span>
        )}
      </span>
      {title && !icon && subtitle && (
        <img
          className="grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 duration-200"
          src="/images/Right 145.svg"
          alt=""
        />
      )}
    </Fragment>
  );

  return (
    <div className={`${variant === "drawer" ? "text-right" : ""}`}>
      {to ? (
        <Link to={to} {...attributes}>
          {renderer}
        </Link>
      ) : (
        <div role="button" {...attributes}>
          {renderer}
        </div>
      )}

      {variant !== "drawer" && subtitle && (
        <p className="text-gray-100 text-md leading-6">{subtitle}</p>
      )}
    </div>
  );
}

export default LinkItem;
