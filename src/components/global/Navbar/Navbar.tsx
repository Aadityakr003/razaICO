import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Dropdown from "./Dropdown";
import Drawer from "react-modern-drawer";
import Logo from "./Logo";
import Pages from "./Pages";
import { Scrollbars } from "react-custom-scrollbars-2";
import "react-modern-drawer/dist/index.css";
import { LinkItemData } from "./LinkItem";

function Navbar() {
  const [drawer, setDrawer] = useState<boolean>(false);
  const toggleDrawer = () => setDrawer((v) => !v);

  const [display, setDisplay] = useState<LinkItemData[] | undefined>();

  const [dropdown, setDropdown] = useState<LinkItemData[] | null>(null);
  const changeDropdown = (details: LinkItemData[] | null) => {
    setDropdown((prev) => {
      setDisplay(undefined);
      return JSON.stringify(prev) === JSON.stringify(details) ? null : details;
    });
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  return (
    <Fragment>
      <div className="bg-gray-900 relative z-[1020]">
        <nav className="container bg-gray-900 flex gap-14 xl:gap-20 items-center py-5">
          <div className="flex-grow lg:flex-grow-0">
            <Logo />
          </div>
          <div className="hidden lg:block flex-grow">
            <Pages changeDropdown={changeDropdown} dropdown={dropdown} />
          </div>
          <div className="hidden md:block">
            <Button to={"/presale"} endIcon="/images/Right 1.svg">
              PreSale
            </Button>
          </div>
          {/* <div className="hidden md:block">
            <Button to={"/presale"} >Wallet Connect</Button>
          </div> */}
          <div className="lg:hidden">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center"
              onClick={toggleDrawer}
            >
              <img src="/images/Menu Hamburger.svg" alt="" />
            </button>
          </div>
        </nav>
        {Boolean(dropdown) && (
          <Dropdown
            display={display}
            setDisplay={setDisplay}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        )}
      </div>
      <div className="lg:hidden">
        <Drawer
          direction="right"
          style={{ width: 320, zIndex: 1022 }}
          open={drawer}
          onClose={toggleDrawer}
        >
          <Scrollbars style={{ width: 320, height: "100vh" }}>
            <div className="h-screen w-full bg-gray-800 shadow-300 p-10">
              <div className="mb-[120px]">
                <Pages
                  display={display}
                  setDisplay={setDisplay}
                  variant="drawer"
                  changeDropdown={changeDropdown}
                  dropdown={dropdown}
                />
              </div>
              <div className="md:hidden">
                <Button
                  onButtonClick={() => handleDrawerClose()}
                  to={"/presale"}
                  className="w-full justify-center"
                  endIcon="/images/Right 1.svg"
                >
                  PreSale
                </Button>
              </div>
            </div>
          </Scrollbars>
        </Drawer>
      </div>
    </Fragment>
  );
}

export default Navbar;
