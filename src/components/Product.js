import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from "next/router";

function Product({ id, title, price, description, category, image, rating }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    //sending the product as an action to the Redux Store(the basket slice)
    dispatch(addToBasket(product));
  };
  const goToProduct = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md ">
      <p className="absolute top-2 right-3 text-sm italic text-gray-400">
        {category}
      </p>
      <Image alt="" src={image} height={200} width={200} objectFit="contain" />
      <h3
        onClick={goToProduct}
        className="my-3 hover:text-blue-500 cursor-pointer"
      >
        {title}
      </h3>
      <div className="flex items-center">
        <StarIcon className="h-5 text-yellow-500" />
        <p>{rating.rate}</p>
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        <Currency className="mb-5" quantity={price} currency="INR" />
      </div>
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
