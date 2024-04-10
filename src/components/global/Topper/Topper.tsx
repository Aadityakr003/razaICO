import React from "react";
import {Link} from "react-router-dom";

function Topper() {
  return (
    <div className="bg-primaryGradient relative z-40 px-4">
      <div className="flex flex-wrap container text-center gap-x-4 py-2 text-md leading-6 text-gray-1000 justify-center">
        <div>
          <p className="">
            Molestie risus nulla faucibus mauris nullam tristique sodales sem.
            Faucibus nisl faucibus velit cursus donec.
          </p>
        </div>
        <div>
          <Link to="/" className="font-bold flex items-center gap-1">
            <span>Vulputate feugiat eget quisque.</span>
            <img src="/images/Right 1.svg" alt="" />
          </Link>
        </div>
      </div>

     

    </div>
  );
}

export default Topper;
