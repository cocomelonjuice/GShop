import mainLogo from "../assets/image/ShopG_image.PNG";
import { Link } from "react-router-dom";
import {
  TfiAlignJustify,
  TfiSearch,
  TfiUser,
  TfiShoppingCartFull,
} from "react-icons/tfi";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { store } from "../redux/ReduxStore";
import LoginForm from "../authentication/LoginForm";
import DropdownUser from "./DropdownUser";
import FilterableList from "./Searchbar";

export default function Navbar() {
  const { choosenItems } = useSelector((state) => state.cart);
  const [isOpen, setOpen] = useState(false);
  const [isClick, setClick] = useState(false);

  return (
    <div className="fixed top-0 w-screen left-0 right-0 flex flex-row justify-evenly bg-blue-800 text-white">
      <Link to="/">
        <button className="w-12 h-12 mt-1 ">
          <img src={mainLogo} />
        </button>
      </Link>

      <button
        className="flex flex-col mr-24 mt-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        <TfiAlignJustify size={24} className="m-auto" />
        <div className="content-center text-md ">Menu</div>
        {isOpen && <Dropdown />}
      </button>

      <div className=" flex flex-row relative justify-evenly h-8 gap-2 mr-20">
        <FilterableList></FilterableList>
        <button className="mt-5 absolute right-0 top-0 mr-2  text-black font-bold   w-5 h-5 content-center p-0.5">
          <TfiSearch />
        </button>
      </div>

      <div onClick={() => setClick((prev) => !prev)} className="mt-3">
        <TfiUser size={24} />
        {isClick && <DropdownUser />}
      </div>

      <Link to="/Cart">
        <div className="relative  mt-3 ">
          <TfiShoppingCartFull size={28} />
          {choosenItems?.length > 0 && (
            <div className="absolute  text-xs flex justify-center items-center animate-bounce -top-1 left-6 rounded-full w-5 h-5 bg-red-600 p-2.5 ">
              {choosenItems.length}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
