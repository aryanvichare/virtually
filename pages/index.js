import Head from "next/head";
import Header from "@/components/landing/Header";
import Highlights from "@/components/landing/Highlights";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className='bg-black text-white'>
      <Head>
        <title>Virtual.ly</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Highlights />
      <Footer />
    </div>
  );
}
