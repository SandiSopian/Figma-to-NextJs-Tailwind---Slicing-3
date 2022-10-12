import React from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Sidebar navigation
function Location() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-3 my-4 border-b border-gray-100 pb-4">
        {/* Bandung */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/bandung">
                  <a className={router.pathname == "/bandung" ? "active" : ""}>
                    <div className="block px-4 py-2 text-sm text-bold text-lg text-gray-800 group-hover:text-white group-hover:bg-gray-900">Bandung</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Garut */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/garut">
                  <a className={router.pathname == "/garut" ? "active" : ""}>
                    <div className="block px-4 py-2 text-sm text-bold text-lg text-gray-800 group-hover:text-white group-hover:bg-gray-900">Garut</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
      </div>
    </>
  );
}

export default Location;
