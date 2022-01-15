import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Currency from "react-currency-formatter";

function ProductCard({
  id,
  title,
  description,
  price,
  category,
  image,
  rating,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      price,
      category,
      image,
      rating,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className=" ml-8 mt-10 mr-8 lg:m-20 md:grid md:grid-cols-12 pb-10">
      <div className="md:col-span-4">
        <Image
          alt=""
          className="cursor-pointer"
          src={image}
          height={400}
          width={400}
          objectFit="contain"
        />
      </div>
      <div className="md:col-span-6 lg:mr-14">
        <div className="mt-10">
          <h4 className="my-3 text-2xl">{title}</h4>
          <div className="flex items-center pb-4 border-b">
            <StarIcon className="h-5 text-yellow-500" />
            <p className="text-gray-600">{rating.rate}</p>
          </div>

          <p className="my-2">{description}</p>
        </div>
      </div>

      <div className="  mb-5 md:col-span-2 md:border-2 md:border-gray-300 md:p-2 md:rounded-md">
        <div className="flex items-center justify-center md:flex-col p-4">
          <div className="flex items-center justify-center md:flex-col mb-4">
            <p className="mb-2 mx-4 font-bold">
              Buy Now:{"   "}
              <span className="text-red-700">
                <Currency quantity={price} currency="INR" />
              </span>
            </p>
            <div className="flex flex-col mt-4 justify-center">
              <p className="text-xs sm:text-sm text-gray-400 sm:mb-2">
                Please check the final price of the product during the purchase
                process, as the VAT rate corresponding to your delivery address
                will only be calculated at that time.{" "}
                <span className="cursor-pointer text-blue-500 hover:text-blue-700">
                  Check Details
                </span>
              </p>
            </div>
          </div>
          <button onClick={addItemToBasket} className="px-4 button">
            Add to Basket
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <h1>Reviews</h1>
      </div>
    </div>
  );
}

export default ProductCard;
