import React from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import classnames from "classnames";
import Nav from "./Nav";

function SideNavbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      {/* Hamburger Menu */}
      <Disclosure as="nav">
        <Disclosure.Button
          className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
          onClick={() => setOffcanvas(true)}
        >
          <GiHamburgerMenu className="block md:hidden h-6 w-6 z-20" aria-hidden="true" />
        </Disclosure.Button>

        {/* Nav Container */}
        <div className={classnames(offcanvas ? "desktop" : "mobile")}>
          <Nav mode="responsiveSidebar" />
        </div>

        {/* Mobile SideNavbar */}

        <div className={classnames("fixed flex justify-center backdrop-blur z-30 top-0 h-full w-full pt-0 sm:pt-12 transition-all md:hidden duration-200 delay-150", offcanvas ? "left-0" : "-left-full")}>
          <div className="overflow-y-scroll bg-black opacity-80">
            <Nav />
            <img src="/x.svg" className="absolute z-40 top-4 sm:top-12 right-4 sm:right-8 w-8 hover:cursor-pointer" onClick={() => setOffcanvas(false)} />
          </div>
        </div>
      </Disclosure>
    </>
  );
}

export default SideNavbar;
