import React from "react";

export interface LintingProps {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  thumb: string;
  lists?: string[];
}

function Linting({items}: {items: LintingProps[]}) {
  return (
    <section className="flex flex-col md:gap-10">
      {items.map(({content, id, thumb, title, subtitle, lists}) => (
        <div key={id} className="bg-gray-900 group min-h-[536px]">
          <div className="container flex items-center flex-col md:flex-row md:group-even:flex-row-reverse justify-between z-0 relative group-odd:gap-0 gap-16">
            <div className="flex flex-col gap-6 z-10 relative">
              <div className="flex flex-col gap-1 text-gray-25">
                <h2 className="font-manrope font-extrabold text-6xl">
                  {title}
                </h2>
                {subtitle && (
                  <h5 className="font-manrope font-extrabold text-3xl">
                    {subtitle}
                  </h5>
                )}
              </div>
              <p className="text-gray-100 text-lg">{content}</p>
              {lists && (
                <div className="flex flex-col gap-3 md:gap-4">
                  {lists.map((value, index) => (
                    <div
                      key={index}
                      className="flex gap-4 md:gap-6 items-center"
                    >
                      <img src="/images/trade.svg" alt="" />
                      <span className="text-gray-100 text-lg">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className={`gradientLayer after:rotate-180 md:after:rotate-0 ${
                lists ? "after:rotate-180" : ""
              }`}
            >
              <img
                src={thumb}
                className="lg:max-w-none md:max-w-[300px]"
                alt={title}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Linting;
