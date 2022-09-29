import Head from "next/head";
import Image from "next/image";
import SideNavbar from "../components/SideNavbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tara Trip Gallery</title>
        <meta name="description" content="Tara Trip Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />
    </>
  );
}
