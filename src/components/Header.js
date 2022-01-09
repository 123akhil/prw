import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
function Header() {
  return (
    <div className="flex items-center bg-white p-1 flex-grow py-2 shadow-md">
      <div>
        {/* HeaderLeft */}
        <h1 className="text-xl flex items-center font-bold m-2  md:text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
          CASDM
        </h1>
      </div>
      {/* Header Search */}
      <div className="relative m-2 rounded-md flex flex-grow">
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
        <div className="cursor-pointer hover:underline">
          <p>Hello Akhil chaudhary</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
        </div>
        <div className="relative cursor-pointer hover:underline flex items-center">
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-pink-500 text-center rounded-full text-white font-bold">
            2
          </span>
          <ShoppingCartIcon className="h-9 text-black" />
          <p className="hidden md:inline font-extrabold md:text-sm mt-2">
            Basket
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
