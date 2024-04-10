import React from "react";

interface ItemsProps {
  keyId: string;
  value: string;
  px?: string;
}

function Item({keyId, px = "px-8", value}: ItemsProps) {
  return (
    <div
      className={`flex border-b md:border-b-0 last:border-b-0 bg-primary-700 md:border-r first:border-l-0 last:border-r-0 border-gray-1000  py-4 md:py-8 ${px}`}
    >
      <div className="min-h-[48px] flex-grow flex items-center justify-between gap-10">
        <span className="text-md uppercase">{keyId}</span>
        <span className="font-manrope font-medium text-4xl whitespace-nowrap">
          {value}
        </span>
      </div>
    </div>
  );
}

export default Item;
