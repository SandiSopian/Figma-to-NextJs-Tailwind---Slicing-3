import Head from "next/head";
import { Gallery2 } from "../components/Gallery";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tara Trip Gallery</title>
        <meta name="description" content="Tara Trip Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Gallery2 />
      </Layout>
    </>
  );
}
