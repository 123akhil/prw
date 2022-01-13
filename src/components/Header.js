import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <div className="shadow-md border-b bg-white sticky top-0 z-50">
      <div className="flex items-center bg-white ml-2 p-1 py-2">
        <div>
          {/* HeaderLeft */}
          <h1
            onClick={() => router.push("/")}
            className="text-xl flex items-center font-bold m-2  md:text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 cursor-pointer "
          >
            CASDM
          </h1>
        </div>
        {/* Header Search */}
        <div className="relative ml-5 mr-4 m-2 rounded-md flex flex-grow">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-pink-500 " />
          </div>
          <input
            className="flex-grow bg-gray-50 py-2 px-2 h-full pl-10 sm-text-sm ring-1 ring-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-300 hover:ring-1 hover:ring-pink-300"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* right */}
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer hover:underline"
          >
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative cursor-pointer hover:underline flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-pink-500 text-center rounded-full text-white font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-9 text-black" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
