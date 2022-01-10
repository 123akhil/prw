import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

function Product({ id, title, price, description, category, image, rating }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md ">
      <p className="absolute top-2 right-3 text-sm italic text-gray-400">
        {category}
      </p>
      <Image alt="" src={image} height={200} width={200} objectFit="contain" />
      <h3 className="my-3" >{title}</h3>
      <div className="flex items-center">
        <StarIcon className="h-5 text-yellow-500" />
        <p>{rating.rate}</p>
      </div>
      <p className="text-xs my-2 line-clamp-2" >{description}</p>
      <div>
        <Currency className="mb-5" quantity={price} currency="INR" />
      </div>
      <button className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-r from-indigo-500 to-pink-500 border border-pink-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-500">Add to Basket</button>
    </div>
  );
}

export default Product;
