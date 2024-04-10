import React, {useEffect, useState} from "react";
import LinkItem, {type LinkItemData} from "./LinkItem";

interface DropdownProps {
  setDropdown: (details: LinkItemData[] | null) => void;
  dropdown: LinkItemData[] | null;
  display?: LinkItemData[];
  setDisplay?: (data?: LinkItemData[]) => void;
}

function Dropdown({setDropdown, dropdown, display, setDisplay}: DropdownProps) {
  return (
    <div className="hidden lg:block">
      <div
        onClick={() => setDropdown(null)}
        className="fixed top-0 right-0 bottom-0 left-0 bg-transparent -z-10"
      />
      <div className="bg-gray-900 absolute left-0 right-0">
        <div className="container">
          <div className="border-t-2 border-gray-700 py-8 flex gap-20">
            <div className="flex flex-col gap-4">
              {dropdown?.map((props, index) => (
                <LinkItem changeDisplay={setDisplay} key={index} {...props} />
              ))}
            </div>
            <span className="bg-gray-700 w-[1px]" />
            {display && (
              <div>
                <div
                  className={`grid gap-2 ${
                    (display?.length || 0) > 6
                      ? "grid-cols-3 gap-x-10"
                      : (display?.length || 0) > 3
                      ? "grid-cols-2 gap-x-16"
                      : "grid-cols-1 gap-x-16"
                  }`}
                >
                  {display?.map((props, index) => (
                    <LinkItem key={index} {...props} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
