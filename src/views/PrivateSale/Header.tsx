import { useState } from "react";
import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import LoadingPopup from "../../components/common/loadingPopup";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingPopupOpen, setLoadingPopupOpen] = useState(false);
  return (
    <>
      <section className="flex md:flex-row flex-col md:gap-0 gap-10 pt-16 pb-6 md:py-28 items-center overflow-hidden mb-24 md:mb-8 lg:mb-0">
        <div className="md:text-left text-center ">
          <h1 className="font-manrope font-extrabold text-7xl mb-1 text-gray-25">
            Kaichain
          </h1>
          <h4 className="font-manrope font-extrabold text-3xl text-gray-25 mb-6">
            The Technology of Flawless Transaction
          </h4>
          <p className="text-gray-100 text-xl mb-16">
            Kaichain is an upcoming blockchain network that overcomes the
            current flaws in major ecosystems, such as higher TPS, lower
            operational costs and environment-friendly transactions and EVM
            compatible.
          </p>
          <div
            className="flex justify-center items-center flex-col md:flex-row md:justify-start gap-8"
            // style={{ justifyContent: "space-between" }}
          >
            <button
              className="flex duration-300 items-center gap-2 whitespace-nowrap  bg-primary-700 text-gray-1000 hover:bg-white rounded-full font-bold text-xl px-7 py-4"
              onClick={() => setIsOpen(true)}
            >
              Buy Now
              <img src="/images/Right 2.svg" />
            </button>
            <a
              href="https://medium.com/@kaichain.net/welcome-to-kaichain-the-technology-of-flawless-transaction-00ddd629a049"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" endIcon="/images/Right 2.svg">
                Presale Announcement
              </Button>
            </a>
          </div>
        </div>
        <div className="">
          <div className="xl:pr-[83px] md:pl-[53px]">
            <img
              className="w-[385px] max-w-none"
              src="/images/image 18.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          setLoadingOpen={(value) => setLoadingPopupOpen(value)}
        />
      )}
      {isLoadingPopupOpen && <LoadingPopup />}
    </>
  );
}

export default Header;
