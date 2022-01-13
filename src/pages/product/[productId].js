import React from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { useRef } from "react";

const ProductDetails = ({
  id,
  title,
  description,
  price,
  category,
  image,
  rating,
}) => {
  const topPageRef = useRef(null);

  const scrollToTop = () => {
    topPageRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={topPageRef} >
      <Header />
      <ProductCard
        id={id}
        title={title}
        description={description}
        price={price}
        category={category}
        image={image}
        rating={rating}
      />
    </div>
  );
};

export default ProductDetails;

// Fetch data at build time
export async function getServerSideProps(context) {
  const { productId } = context.params;
  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  ).then((res) => res.json());
  const { id, title, description, price, category, image, rating } = product;
  return {
    props: {
      id,
      title,
      description,
      price,
      category,
      image,
      rating,
    },
  };
}
