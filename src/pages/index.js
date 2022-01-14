import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductList = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newProductList);
    } else {
      setSearchResults(products);
    }
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>PRW</title>
      </Head>
      {/* Header */}
      <Header
        product={products}
        term={searchTerm}
        searchKeyword={searchHandler}
      />
      {/* ProductFeed */}
      <main className="max-w-screen-2xl mx-auto">
        <ProductFeed
          products={searchTerm.length < 1 ? products : searchResults}
        />
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
