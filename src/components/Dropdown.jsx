import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <>
      <div className="absolute border-solid  border-b-8 border-x-transparent border-x-8 border-t-0 border-gray-400 mt-12 mr-96 "></div>
      <div className="absolute border-2 border-gray-400 w-32 mt-14 mr-80  shadow-2xl rounded-lg rounded-tl-none text-black bg-white">
        <Link to="/Tea">
          <ul className="m-0  hover:bg-blue-400 hover:border-blue-400">Tea</ul>
        </Link>
        <Link to="/Coffee">
          <ul className="m-0  hover:bg-blue-400 hover:border-blue-400">
            Coffee
          </ul>
        </Link>

        <Link to="/Juice">
          <ul className="m-0  hover:bg-blue-400 hover:border-blue-400">
            Juice
          </ul>
        </Link>

        <Link to="/Bakery">
          <ul className="m-0  hover:bg-blue-400 hover:border-blue-400">
            Bakery
          </ul>
        </Link>

        <Link to="/Dessert">
          <ul className="m-0  hover:bg-blue-400 hover:border-blue-400">
            Dessert
          </ul>
        </Link>
      </div>
    </>
  );
}
