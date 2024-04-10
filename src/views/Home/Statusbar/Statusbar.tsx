import React, {useState} from "react";
import Item from "./Item";
import {Collapse} from "react-collapse";
import ScrollContainer from "react-indiana-drag-scroll";

const items = [
  {
    id: 4234,
    key: "block time",
    value: "3 secs",
  },
  {
    id: 8545,
    key: "current block height",
    value: "12,000+",
  },
  {
    id: 8564,
    key: "total transactions",
    value: "1,000X",
  },
  {
    id: 6965,
    key: "no of deployed contracts",
    value: "110+",
  },
];

// Add self padding
const itemPadding = ["md:px-14", "md:px-14", "md:px-16", "md:px-9"];
let itemsWithPad = items.map((value, index) => ({
  ...value,
  px: itemPadding[index],
}));

function Statusbar() {
  const [option, setOption] = useState<boolean>(false);
  const toggle = () => setOption((v) => !v);

  return (
    <section className="md:bg-primary-700 text-gray-1000 border-y border-gray-1000">
      <div className="container md:hidden relative z-10">
        <div className="border border-gray-1000">
          <div
            onClick={toggle}
            role="button"
            className="flex justify-center p-4 bg-primary-700"
          >
            <img
              className={`duration-200 ${option ? "rotate-180" : ""}`}
              src="/images/Down Circle 1.svg"
              alt=""
            />
          </div>
          <Collapse isOpened={option}>
            <div className="relative">
              <div className="flex flex-col absolute left-0 right-0 md:hidden border-t border-gray-1000">
                {itemsWithPad.map(({id, key, value}) => (
                  <Item key={id} keyId={key} value={value} />
                ))}
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <ScrollContainer>
        <div className="max-w-[1440px] hidden mx-auto md:grid grid-cols-[312px_408px_408px_312px]">
          {itemsWithPad.map(({id, key, value, px}) => (
            <Item key={id} keyId={key} value={value} px={px} />
          ))}
        </div>
      </ScrollContainer>
    </section>
  );
}

export default Statusbar;
