import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Bandung
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/bandung/curug-dago" onClick={() => router.reload()}>
                    {/* move this "   " into "a" for localhost mode */}
                    <a href="/bandung/curug-dago" className={router.pathname == "/bandung/curug-dago" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Dago</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/gedung-sate" onClick={() => router.reload()}>
                    <a href="/bandung/gedung-sate" className={router.pathname == "/bandung/gedung-sate" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Gedung Sate</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/jalan-braga" onClick={() => router.reload()}>
                    <a href="/bandung/jalan-braga" className={router.pathname == "/bandung/jalan-braga" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Jalan Braga</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/kawah-gunung-tangkuban-perahu" onClick={() => router.reload()}>
                    <a href="/bandung/kawah-gunung-tangkuban-perahu" className={router.pathname == "/bandung/kawah-gunung-tangkuban-perahu" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Gunung Tangkuban Perahu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/taman-hutan-raya-djuanda" onClick={() => router.reload()}>
                    <a href="/bandung/taman-hutan-raya-djuanda" className={router.pathname == "/bandung/taman-hutan-raya-djuanda" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Hutan Raya Djuanda</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Bogor */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Bogor
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/bogor/curug-leuwi-hejo" onClick={() => router.reload()}>
                    <a href="/bogor/curug-leuwi-hejo" className={router.pathname == "/bogor/curug-leuwi-hejo" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Leuwi Hejo</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/gunung-pancar" onClick={() => router.reload()}>
                    <a href="/bogor/gunung-pancar" className={router.pathname == "/bogor/gunung-pancar" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Gunung Pancar</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/penangkaran-rusa-giri-jaya-cariu" onClick={() => router.reload()}>
                    <a href="/bogor/penangkaran-rusa-giri-jaya-cariu" className={router.pathname == "/bogor/penangkaran-rusa-giri-jaya-cariu" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Penangkaran Rusa Giri Jaya Cariu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/taman-safari-indonesia" onClick={() => router.reload()}>
                    <a href="/bogor/taman-safari-indonesia" className={router.pathname == "/bogor/taman-safari-indonesia" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Safari Indonesia</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/tirta-sanita-ciseeng" onClick={() => router.reload()}>
                    <a href="/bogor/tirta-sanita-ciseeng" className={router.pathname == "/bogor/tirta-sanita-ciseeng" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Tirta Sanita Ciseeng</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Cianjur */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Cianjur
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/cianjur/istana-presiden-cipanas" onClick={() => router.reload()}>
                    <a href="/cianjur/istana-presiden-cipanas" className={router.pathname == "/cianjur/istana-presiden-cipanas" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Istana Presiden Cipanas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/kebon-raya-cibodas" onClick={() => router.reload()}>
                    <a href="/cianjur/kebon-raya-cibodas" className={router.pathname == "/cianjur/kebon-raya-cibodas" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kebon Raya Cibodas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/kebun-agro-inkarla" onClick={() => router.reload()}>
                    <a href="/cianjur/kebun-agro-inkarla" className={router.pathname == "/cianjur/kebun-agro-inkarla" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kebun Agro Inkarla</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/taman-bunga-nusantara" onClick={() => router.reload()}>
                    <a href="/cianjur/taman-bunga-nusantara" className={router.pathname == "/cianjur/taman-bunga-nusantara" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Bunga Nusantara</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/telaga-biru-cipanas" onClick={() => router.reload()}>
                    <a href="/cianjur/telaga-biru-cipanas" className={router.pathname == "/cianjur/telaga-biru-cipanas" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Telaga Biru Cipanas</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Cirebon */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Cirebon
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/cirebon/hutan-kera-plangon" onClick={() => router.reload()}>
                    <a href="/cirebon/hutan-kera-plangon" className={router.pathname == "/cirebon/hutan-kera-plangon" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Hutan Kera Plangon</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/makam-sunan-gunungjati" onClick={() => router.reload()}>
                    <a href="/cirebon/makam-sunan-gunungjati" className={router.pathname == "/cirebon/makam-sunan-gunungjati" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Makam Sunan Gunung Jati</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/setu-patok" onClick={() => router.reload()}>
                    <a href="/cirebon/setu-patok" className={router.pathname == "/cirebon/setu-patok" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Setu Patok</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/wisata-goa-sunyaragi" onClick={() => router.reload()}>
                    <a href="/cirebon/wisata-goa-sunyaragi" className={router.pathname == "/cirebon/wisata-goa-sunyaragi" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Wisata Goa Sunyaragi</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/wisata-kura-kura-belawa" onClick={() => router.reload()}>
                    <a href="/cirebon/wisata-kura-kura-belawa" className={router.pathname == "/cirebon/wisata-kura-kura-belawa" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Wisata Kura-Kura Belawa</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Ciwidey */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Ciwidey
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/ciwidey/bukit-jamur" onClick={() => router.reload()}>
                    <a href="/ciwidey/bukit-jamur" className={router.pathname == "/ciwidey/bukit-jamur" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Bukit Jamur</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/ciwidey-valley-resort-hot-spring-waterpark" onClick={() => router.reload()}>
                    <a href="/ciwidey/ciwidey-valley-resort-hot-spring-waterpark" className={router.pathname == "/ciwidey/ciwidey-valley-resort-hot-spring-waterpark" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Ciwidey Valley Resort Hot Spring Waterpark</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/d-riam-riverside" onClick={() => router.reload()}>
                    <a href="/ciwidey/d-riam-riverside" className={router.pathname == "/ciwidey/d-riam-riverside" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 D Riam Riverside</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/green-hill-park" onClick={() => router.reload()}>
                    <a href="/ciwidey/green-hill-park" className={router.pathname == "/ciwidey/green-hill-park" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Green Hill Park</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/kawah-putih" onClick={() => router.reload()}>
                    <a href="/ciwidey/kawah-putih" className={router.pathname == "/ciwidey/kawah-putih" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Putih</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/kawah-rengganis" onClick={() => router.reload()}>
                    <a href="/ciwidey/kawah-rengganis" className={router.pathname == "/ciwidey/kawah-rengganis" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Rengganis</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/pemandian-air-panas-ciwalini" onClick={() => router.reload()}>
                    <a href="/ciwidey/pemandian-air-panas-ciwalini" className={router.pathname == "/ciwidey/pemandian-air-panas-ciwalini" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pemandian Air Panas Ciwalini</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/perkebunan-teh-rancabali" onClick={() => router.reload()}>
                    <a href="/ciwidey/perkebunan-teh-rancabali" className={router.pathname == "/ciwidey/perkebunan-teh-rancabali" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Perkebunan Teh Rancabali</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/rancaupas" onClick={() => router.reload()}>
                    <a href="/ciwidey/rancaupas" className={router.pathname == "/ciwidey/rancaupas" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Ranca Upas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/rengganis-suspension-bridge" onClick={() => router.reload()}>
                    <a href="/ciwidey/rengganis-suspension-bridge" className={router.pathname == "/ciwidey/rengganis-suspension-bridge" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Rengganis Suspension Bridge</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/situ-patenggang" onClick={() => router.reload()}>
                    <a href="/ciwidey/situ-patenggang" className={router.pathname == "/ciwidey/situ-patenggang" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Situ Patenggang</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/taman-kelinci-happy-farm" onClick={() => router.reload()}>
                    <a href="/ciwidey/taman-kelinci-happy-farm" className={router.pathname == "/ciwidey/taman-kelinci-happy-farm" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Kelinci Happy Farm</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Garut */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Garut
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/garut/curug-batu-nyusun" onClick={() => router.reload()}>
                    <a href="/garut/curug-batu-nyusun" className={router.pathname == "/garut/curug-batu-nyusun" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Batu Nyusun</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/gunung-papandayan" onClick={() => router.reload()}>
                    <a href="/garut/gunung-papandayan" className={router.pathname == "/garut/gunung-papandayan" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Gunung Papandayan</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/kawah-kamojang" onClick={() => router.reload()}>
                    <a href="/garut/kawah-kamojang" className={router.pathname == "/garut/kawah-kamojang" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Kamojang</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/kompleks-wisata-cipanas" onClick={() => router.reload()}>
                    <a href="/garut/kompleks-wisata-cipanas" className={router.pathname == "/garut/kompleks-wisata-cipanas" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kompleks Wisata Cipanas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/pantai-rancabuaya" onClick={() => router.reload()}>
                    <a href="/garut/pantai-rancabuaya" className={router.pathname == "/garut/pantai-rancabuaya" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pantai Rancabuaya</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Pangandaran */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Pangandaran
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/pangandaran/cagar-alam-pangandaran" onClick={() => router.reload()}>
                    <a href="/pangandaran/cagar-alam-pangandaran" className={router.pathname == "/pangandaran/cagar-alam-pangandaran" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Cagar Alam Pangandaran</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/goa-lanang-selasari" onClick={() => router.reload()}>
                    <a href="/pangandaran/goa-lanang-selasari" className={router.pathname == "/pangandaran/goa-lanang-selasari" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Goa Lanang Selasari</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/green-canyon" onClick={() => router.reload()}>
                    <a href="/pangandaran/green-canyon" className={router.pathname == "/pangandaran/green-canyon" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Green Canyon</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/konservasi-penyu" onClick={() => router.reload()}>
                    <a href="/pangandaran/konservasi-penyu" className={router.pathname == "/pangandaran/konservasi-penyu" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Konservasi Penyu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/pantai-pangandaran" onClick={() => router.reload()}>
                    <a href="/pangandaran/pantai-pangandaran" className={router.pathname == "/pangandaran/pantai-pangandaran" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pantai Pangandaran</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Purwakarta */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Purwakarta
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/purwakarta/curug-cipurut" onClick={() => router.reload()}>
                    <a href="/purwakarta/curug-cipurut" className={router.pathname == "/purwakarta/curug-cipurut" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Cipurut</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/pasir-langlang" onClick={() => router.reload()}>
                    <a href="/purwakarta/pasir-langlang" className={router.pathname == "/purwakarta/pasir-langlang" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pasir Langlang</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/sumber-air-panas-ciracas" onClick={() => router.reload()}>
                    <a href="/purwakarta/sumber-air-panas-ciracas" className={router.pathname == "/purwakarta/sumber-air-panas-ciracas" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Sumber Air Panas Ciracas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/taman-air-mancur-sri-baduga" onClick={() => router.reload()}>
                    <a href="/purwakarta/taman-air-mancur-sri-baduga" className={router.pathname == "/purwakarta/taman-air-mancur-sri-baduga" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Air Mancur Sri Baduga</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/waduk-jatiluhur" onClick={() => router.reload()}>
                    <a href="/purwakarta/waduk-jatiluhur" className={router.pathname == "/purwakarta/waduk-jatiluhur" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Waduk Jatiluhur</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Sukabumi */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Sukabumi
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/sukabumi/curug-cimarinjung" onClick={() => router.reload()}>
                    <a href="/sukabumi/curug-cimarinjung" className={router.pathname == "/sukabumi/curug-cimarinjung" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Cimarinjung</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/danau-bacan" onClick={() => router.reload()}>
                    <a href="/sukabumi/danau-bacan" className={router.pathname == "/sukabumi/danau-bacan" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Danau Bacan</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/pantai-pelabuhan-ratu" onClick={() => router.reload()}>
                    <a href="/sukabumi/pantai-pelabuhan-ratu" className={router.pathname == "/sukabumi/pantai-pelabuhan-ratu" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pantai Pelabuhan Ratu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/pemandian-air-panas-cisolok" onClick={() => router.reload()}>
                    <a href="/sukabumi/pemandian-air-panas-cisolok" className={router.pathname == "/sukabumi/pemandian-air-panas-cisolok" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pemandian Air Panas Cisolok</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/tebing-panenjoan" onClick={() => router.reload()}>
                    <a href="/sukabumi/tebing-panenjoan" className={router.pathname == "/sukabumi/tebing-panenjoan" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Tebing Panenjoan</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}

export default Location;
