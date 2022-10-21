import Head from "next/head";
import { HutanKP } from "../../components/LocCirebon";

import Layout from "../../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tara Trip Gallery</title>
        <meta name="description" content="Tara Trip Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HutanKP />
      </Layout>
    </>
  );
}
