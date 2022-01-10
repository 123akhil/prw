import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>PRW</title>
      </Head>
      {/* Header */}
      <Header />
      {/* ProductFeed */}
      <main className="max-w-screen-2xl mx-auto">
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
//return it like a props
// GET ... https://fakestoreapi.com/products
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
