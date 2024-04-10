import React from "react";
import {Link} from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img className="hidden md:block" src="/images/Logo.svg" alt="" />
        <img className="md:hidden" src="/images/Logo (2).svg" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
