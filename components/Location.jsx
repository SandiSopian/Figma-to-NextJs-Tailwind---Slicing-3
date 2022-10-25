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
                    <a href="/bandung/curug-dago" className={router.pathname == "/bandung/curug-dago" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Dago</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/gedung-sate">
                    <div href="/bandung/gedung-sate" className={router.pathname == "/bandung/gedung-sate" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Gedung Sate</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/jalan-braga">
                    <div href="/bandung/jalan-braga" className={router.pathname == "/bandung/jalan-braga" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Jalan Braga</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/kawah-gunung-tangkuban-perahu">
                    <div href="/bandung/kawah-gunung-tangkuban-perahu" className={router.pathname == "/bandung/kawah-gunung-tangkuban-perahu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Gunung Tangkuban Perahu</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/taman-hutan-raya-djuanda">
                    <div href="/bandung/taman-hutan-raya-djuanda" className={router.pathname == "/bandung/taman-hutan-raya-djuanda" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Hutan Raya Djuanda</div>
                    </div>
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
                  <Link href="/bogor/curug-leuwi-hejo">
                    <div href="/bogor/curug-leuwi-hejo" className={router.pathname == "/bogor/curug-leuwi-hejo" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Leuwi Hejo</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/gunung-pancar">
                    <div href="/bogor/gunung-pancar" className={router.pathname == "/bogor/gunung-pancar" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Gunung Pancar</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/penangkaran-rusa-giri-jaya-cariu">
                    <div href="/bogor/penangkaran-rusa-giri-jaya-cariu" className={router.pathname == "/bogor/penangkaran-rusa-giri-jaya-cariu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Penangkaran Rusa Giri Jaya Cariu</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/taman-safari-indonesia">
                    <div href="/bogor/taman-safari-indonesia" className={router.pathname == "/bogor/taman-safari-indonesia" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Safari Indonesia</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/tirta-sanita-ciseeng">
                    <div href="/bogor/tirta-sanita-ciseeng" className={router.pathname == "/bogor/tirta-sanita-ciseeng" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Tirta Sanita Ciseeng</div>
                    </div>
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
                  <Link href="/cianjur/istana-presiden-cipanas">
                    <div href="/cianjur/istana-presiden-cipanas" className={router.pathname == "/cianjur/istana-presiden-cipanas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Istana Presiden Cipanas</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/kebon-raya-cibodas">
                    <div href="/cianjur/kebon-raya-cibodas" className={router.pathname == "/cianjur/kebon-raya-cibodas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kebon Raya Cibodas</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/kebun-agro-inkarla">
                    <div href="/cianjur/kebun-agro-inkarla" className={router.pathname == "/cianjur/kebun-agro-inkarla" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kebun Agro Inkarla</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/taman-bunga-nusantara">
                    <div href="/cianjur/taman-bunga-nusantara" className={router.pathname == "/cianjur/taman-bunga-nusantara" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Bunga Nusantara</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/telaga-biru-cipanas">
                    <div href="/cianjur/telaga-biru-cipanas" className={router.pathname == "/cianjur/telaga-biru-cipanas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Telaga Biru Cipanas</div>
                    </div>
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
                  <Link href="/cirebon/hutan-kera-plangon">
                    <div href="/cirebon/hutan-kera-plangon" className={router.pathname == "/cirebon/hutan-kera-plangon" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Hutan Kera Plangon</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/makam-sunan-gunungjati">
                    <div href="/cirebon/makam-sunan-gunungjati" className={router.pathname == "/cirebon/makam-sunan-gunungjati" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Makam Sunan Gunung Jati</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/setu-patok">
                    <div href="/cirebon/setu-patok" className={router.pathname == "/cirebon/setu-patok" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Setu Patok</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/wisata-goa-sunyaragi">
                    <div href="/cirebon/wisata-goa-sunyaragi" className={router.pathname == "/cirebon/wisata-goa-sunyaragi" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Wisata Goa Sunyaragi</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/wisata-kura-kura-belawa">
                    <div href="/cirebon/wisata-kura-kura-belawa" className={router.pathname == "/cirebon/wisata-kura-kura-belawa" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Wisata Kura-Kura Belawa</div>
                    </div>
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
                  <Link href="/ciwidey/bukit-jamur">
                    <div href="/ciwidey/bukit-jamur" className={router.pathname == "/ciwidey/bukit-jamur" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Bukit Jamur</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/ciwidey-valley-resort-hot-spring-waterpark">
                    <div href="/ciwidey/ciwidey-valley-resort-hot-spring-waterpark" className={router.pathname == "/ciwidey/ciwidey-valley-resort-hot-spring-waterpark" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Ciwidey Valley Resort Hot Spring Waterpark</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/d-riam-riverside">
                    <div href="/ciwidey/d-riam-riverside" className={router.pathname == "/ciwidey/d-riam-riverside" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 D Riam Riverside</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/green-hill-park">
                    <div href="/ciwidey/green-hill-park" className={router.pathname == "/ciwidey/green-hill-park" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Green Hill Park</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/kawah-putih">
                    <div href="/ciwidey/kawah-putih" className={router.pathname == "/ciwidey/kawah-putih" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Putih</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/kawah-rengganis">
                    <div href="/ciwidey/kawah-rengganis" className={router.pathname == "/ciwidey/kawah-rengganis" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Rengganis</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/pemandian-air-panas-ciwalini">
                    <div href="/ciwidey/pemandian-air-panas-ciwalini" className={router.pathname == "/ciwidey/pemandian-air-panas-ciwalini" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pemandian Air Panas Ciwalini</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/perkebunan-teh-rancabali">
                    <div href="/ciwidey/perkebunan-teh-rancabali" className={router.pathname == "/ciwidey/perkebunan-teh-rancabali" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Perkebunan Teh Rancabali</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/rancaupas">
                    <div href="/ciwidey/rancaupas" className={router.pathname == "/ciwidey/rancaupas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Ranca Upas</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/rengganis-suspension-bridge">
                    <div href="/ciwidey/rengganis-suspension-bridge" className={router.pathname == "/ciwidey/rengganis-suspension-bridge" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Rengganis Suspension Bridge</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/situ-patenggang">
                    <div href="/ciwidey/situ-patenggang" className={router.pathname == "/ciwidey/situ-patenggang" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Situ Patenggang</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/taman-kelinci-happy-farm">
                    <div href="/ciwidey/taman-kelinci-happy-farm" className={router.pathname == "/ciwidey/taman-kelinci-happy-farm" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Kelinci Happy Farm</div>
                    </div>
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
                  <Link href="/garut/curug-batu-nyusun">
                    <div href="/garut/curug-batu-nyusun" className={router.pathname == "/garut/curug-batu-nyusun" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Batu Nyusun</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/gunung-papandayan">
                    <div href="/garut/gunung-papandayan" className={router.pathname == "/garut/gunung-papandayan" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Gunung Papandayan</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/kawah-kamojang">
                    <div href="/garut/kawah-kamojang" className={router.pathname == "/garut/kawah-kamojang" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kawah Kamojang</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/kompleks-wisata-cipanas">
                    <div href="/garut/kompleks-wisata-cipanas" className={router.pathname == "/garut/kompleks-wisata-cipanas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Kompleks Wisata Cipanas</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/pantai-rancabuaya">
                    <div href="/garut/pantai-rancabuaya" className={router.pathname == "/garut/pantai-rancabuaya" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pantai Rancabuaya</div>
                    </div>
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
                  <Link href="/pangandaran/cagar-alam-pangandaran">
                    <div href="/pangandaran/cagar-alam-pangandaran" className={router.pathname == "/pangandaran/cagar-alam-pangandaran" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Cagar Alam Pangandaran</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/goa-lanang-selasari">
                    <div href="/pangandaran/goa-lanang-selasari" className={router.pathname == "/pangandaran/goa-lanang-selasari" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Goa Lanang Selasari</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/green-canyon">
                    <div href="/pangandaran/green-canyon" className={router.pathname == "/pangandaran/green-canyon" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Green Canyon</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/konservasi-penyu">
                    <div href="/pangandaran/konservasi-penyu" className={router.pathname == "/pangandaran/konservasi-penyu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Konservasi Penyu</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/pantai-pangandaran">
                    <div href="/pangandaran/pantai-pangandaran" className={router.pathname == "/pangandaran/pantai-pangandaran" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pantai Pangandaran</div>
                    </div>
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
                  <Link href="/purwakarta/curug-cipurut">
                    <div href="/purwakarta/curug-cipurut" className={router.pathname == "/purwakarta/curug-cipurut" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Cipurut</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/pasir-langlang">
                    <div href="/purwakarta/pasir-langlang" className={router.pathname == "/purwakarta/pasir-langlang" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pasir Langlang</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/sumber-air-panas-ciracas">
                    <div href="/purwakarta/sumber-air-panas-ciracas" className={router.pathname == "/purwakarta/sumber-air-panas-ciracas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Sumber Air Panas Ciracas</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/taman-air-mancur-sri-baduga">
                    <div href="/purwakarta/taman-air-mancur-sri-baduga" className={router.pathname == "/purwakarta/taman-air-mancur-sri-baduga" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Taman Air Mancur Sri Baduga</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/waduk-jatiluhur">
                    <div href="/purwakarta/waduk-jatiluhur" className={router.pathname == "/purwakarta/waduk-jatiluhur" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Waduk Jatiluhur</div>
                    </div>
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
                  <Link href="/sukabumi/curug-cimarinjung">
                    <div href="/sukabumi/curug-cimarinjung" className={router.pathname == "/sukabumi/curug-cimarinjung" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Curug Cimarinjung</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/danau-bacan">
                    <div href="/sukabumi/danau-bacan" className={router.pathname == "/sukabumi/danau-bacan" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Danau Bacan</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/pantai-pelabuhan-ratu">
                    <div href="/sukabumi/pantai-pelabuhan-ratu" className={router.pathname == "/sukabumi/pantai-pelabuhan-ratu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pantai Pelabuhan Ratu</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/pemandian-air-panas-cisolok">
                    <div href="/sukabumi/pemandian-air-panas-cisolok" className={router.pathname == "/sukabumi/pemandian-air-panas-cisolok" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Pemandian Air Panas Cisolok</div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/tebing-panenjoan">
                    <div href="/sukabumi/tebing-panenjoan" className={router.pathname == "/sukabumi/tebing-panenjoan" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose hover:cursor-pointer">📌 Tebing Panenjoan</div>
                    </div>
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
