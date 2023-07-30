import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import AllProducts from '@/components/UI/AllProducts';
import Featured from '@/components/UI/Featured';


const HomePage = ({ allProducts }) => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Banner />
        <AllProducts allProducts={allProducts} />
        <Featured />
      </main>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); 
  const res = await fetch("https://next-pc-builder-server.vercel.app/api/v1/products/");
  const data = await res.json();
  // console.log("DATAAA", data);
  return {
    props: {
      allProducts: data.data,
      // allNews: data.data, // When using internal API connected with mongoDB
    },

  };
};