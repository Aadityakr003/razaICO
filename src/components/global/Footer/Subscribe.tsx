import React from "react";
import {Link} from "react-router-dom";
import Button from "../../common/Button/Button";

function Subscribe() {
  return (
    <div>
      <span className="text-gray-600 text-md font-mulish block mb-1.5">
        Email
      </span>
      <div className="rounded-full px-3.5 bg-gray-25 shadow-200 flex gap-2 items-center mb-1">
        <label htmlFor="subscribe">
          <img src="/images/mail.svg" alt="" />
        </label>
        <input
          type="email"
          id="subscribe"
          placeholder="admin@kaichain.net"
          className="placeholder:text-gray-450 text-gray-1000 text-base flex-grow max-w-none min-w-0 py-2"
        />
        <Link to="/">
          <img src="/images/Help icon.svg" alt="" />
        </Link>
      </div>
      <div className="flex justify-end">
        <Button variant="text" size="small" endIcon="/images/Right 1534.svg">
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}

export default Subscribe;
