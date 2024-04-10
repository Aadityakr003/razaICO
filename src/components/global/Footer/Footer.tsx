import React from "react";
import {Link} from "react-router-dom";
import Subscribe from "./Subscribe";
import socials from "./socials.json";

const resources = [
  {
    id: 543,
    name: "developer",
    url: "/",
  },
  {
    id: 765,
    name: "Ecosystem",
    url: "/",
  },
  {
    id: 866,
    name: "network",
    url: "/",
  },
  {
    id: 234,
    name: "community",
    url: "/",
  },
];

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container pt-10 pb-8">
        <div className="pt-10 border-t border-gray-25 mb-10">
          <div className="p-6 md:px-10 md:py-8 rounded-b-2xl bg-gray-700 bg-imageOverlySplit shadow-100 items-end flex justify-between">
            <div>
              <h3 className="font-manrope font-extrabold text-2xl text-primary-700">
                GET CONNECTED
              </h3>
              <h2 className="text-gray-25 font-extrabold font-manrope text-3xl mb-3">
                Connect to Kai Chain Community
              </h2>
              <p className="text-gray-100 text-base leading-7">
                Join the discussions and stay up to date with the latest news
                and announcements.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-4">
                {socials.map(({icon, id, url}) => (
                  <a href={url} key={id}>
                    <img src={icon} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:hidden justify-center my-10">
            {socials.map(({icon, id, url}) => (
              <a href={url} key={id}>
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-28">
            <div>
              <div className="mb-6 flex justify-center md:justify-start">
                <Link to="/">
                  <img src="/images/Logo (1).svg" alt="" />
                </Link>
              </div>
              <p className="text-gray-25 text-sm">
                Please note that both this KaiChain website and the
                documentation site will constantly improve over time and is
                still a work-in-progress.
              </p>
            </div>
            <div className="">
              <h4 className="font-bold text-md leading-6 text-primary-700 mb-2">
                Get Updated
              </h4>
              <p className="text-sm text-gray-25 mb-4">
                Subscribe to our newsletter to get the latest market situation
              </p>
              <Subscribe />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-md leading-6 text-primary-700 mb-4">
                Resources
              </h4>
              <div className="flex flex-col gap-4">
                {resources.map(({id, name, url}) => (
                  <Link
                    className="text-gray-25 text-sm leading-[18px]"
                    to={url}
                    key={id}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm">
          Copyright © 2024 | All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
