import Head from "next/head";
import Gallery from "../components/Gallery";
import SideNavbar from "../components/SideNavbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tara Trip Gallery</title>
        <meta name="description" content="Tara Trip Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-y-scroll">
        <div className="block md:fixed">
          <SideNavbar />
        </div>

        <div className="flex flex-row sm:flex-none absolute inset-x-0 top-0 md:-top-12 lg:-top-16 md:left-60 lg:left-54 xl:left-60 bg-transparent">
          <Gallery />
        </div>
      </div>
    </>
  );
}
