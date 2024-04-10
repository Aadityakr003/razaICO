import React from "react";

import "./modal.css";

interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

const InstallMetamaskPopup: React.FC<ModalProps> = ({ setIsOpen }) => {
  return (
    <>
      <div className={"centered "}>
        <div className={"modal bg-[#000000]"}>
          <div className="modalContent gap-2 ">
            <div className="flex items-center justify-center py-10">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="py-1 w-[130px] h-[130px]">
                  <img src="/images/MetaMask_Fox.svg.webp" alt="" />
                </div>
                <div>
                  <p className="font-bold text-white">
                    Install Metamask Wallet
                  </p>
                  <p className="text-sm text-white">
                    To interact with this application, please install Metamask
                    wallet.
                  </p>
                  
                </div>
                <a
                    href="https://metamask.io/download.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-bold text-primary-700"
                  >
                    Download Metamask
                  </a>
              </div>
            </div>
          </div>

          {/* </form> */}
          <div className={"walletActions"}>
            <div className={"actionsContainer"}>
              <button className={"cancelBtn"} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallMetamaskPopup;
