import React, {Fragment} from "react";
import LinkItem, {LinkItemData} from "./LinkItem";
import pages from "./pages.json";

interface PagesProps {
  changeDropdown?: (details: LinkItemData[] | null) => void;
  dropdown?: LinkItemData[] | null;
  variant?: "navbar" | "drawer";
  display?: LinkItemData[];
  setDisplay?: (data?: LinkItemData[]) => void;
}

function Pages(props: PagesProps) {
  const {
    changeDropdown,
    dropdown,
    variant = "navbar",
    display,
    setDisplay,
  } = props;

  return (
    <ul
      className={`flex gap-8 xl:gap-10 list-none ${
        variant === "drawer" ? "flex-col items-end" : "flex-row items-center"
      }`}
    >
      {pages.map(({id, name, dropdown: drop}) => (
        <Fragment key={id}>
          <li
            onClick={() => changeDropdown?.(drop)}
            role="button"
            className="flex gap-1 items-center group dropdown-button"
          >
            <span className="font-bold text-lg text-gray-25 group-hover:text-primary-700 duration-300">
              {name}
            </span>
            <img
              className={`duration-200 dropdown-icon ${
                JSON.stringify(dropdown) === JSON.stringify(drop)
                  ? "rotate-180"
                  : ""
              }`}
              src="/images/Down 2.svg"
              alt=""
            />
          </li>
          {variant === "drawer" &&
            JSON.stringify(dropdown) === JSON.stringify(drop) && (
              <li className="">
                {dropdown && (
                  <div className="flex flex-col gap-4">
                    {dropdown.map((props, index) => (
                      <LinkItem
                        changeDisplay={setDisplay}
                        variant={variant}
                        key={index}
                        {...props}
                      />
                    ))}
                  </div>
                )}
                {display && (
                  <div
                    className={`flex flex-col gap-4 mt-6 ${
                      display?.length || 0 > 6 ? "" : ""
                    }`}
                  >
                    {display.map((props, index) => (
                      <LinkItem variant={variant} key={index} {...props} />
                    ))}
                  </div>
                )}
              </li>
            )}
        </Fragment>
      ))}
    </ul>
  );
}

export default Pages;
