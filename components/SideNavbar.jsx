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
          <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
        </Disclosure.Button>

        {/* Nav Container */}
        <div className={classnames(offcanvas ? "desktop" : "mobile")}>
          <Nav mode="responsiveSidebar" />
        </div>

        {/* Mobile SideNavbar */}
        <div className={classnames("absolute bg-white z-30 top-0 h-full w-full transition-all p-10 md:hidden duration-200", offcanvas ? "left-0" : "-left-full")}>
          <Nav />
          <img src="/x.svg" className="absolute z-40 top-8 right-8 w-8 hover:cursor-pointer" onClick={() => setOffcanvas(false)} />
        </div>
      </Disclosure>
    </>
  );
}

export default SideNavbar;
