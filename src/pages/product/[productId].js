import React, { useState } from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";


const ProductDetails = ({
  id,
  title,
  description,
  price,
  category,
  image,
  rating,
}) => {
  const searchVisiblity = useState(true);

  return (
    <div >
      <Header searchVisiblity={searchVisiblity} />
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
