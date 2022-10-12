import { CgProfile } from "react-icons/cg";
import { BsTelephone, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Location from "../components/Location";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start items-center">
      {/* Brand Title */}
      <h1 className="text-6xl text-center cursor-pointer font-semibold border-b pb-4 w-full ">Tara Trip</h1>

      {/* Nav Sub Menu */}

      <div className="my-4 pb-4">
        <div className="flex mb-2 justify-start items-center gap-4 px-5  m-auto">
          <h3 className="text-sm uppercase opacity-50">Beautiful West Java Tourist Place</h3>
        </div>
      </div>

      <div className="my-4 border-b border-black pb-4">
        <Link href="/about">
          <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <a className={router.pathname == "/about" ? "active" : ""}>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-bold">About</h3>
              </div>
            </a>
          </div>
        </Link>

        <Link href="/contact">
          <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BsTelephone className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-bold">Contact</h3>
              </div>
            </a>
          </div>
        </Link>
      </div>

      {/* Locations */}
      <Location />

      {/* Social Media */}
      <div className=" mb-12">
        <div className="text-base text-slate-400 mb-2">Follow Us</div>
        <div className="flex gap-4">
          <BsTwitter />
          <BsInstagram />
          <BsYoutube />
        </div>
      </div>
    </div>
  );
}
