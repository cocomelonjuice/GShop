import { productList } from "../ProductData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "./Product";

export default function Bakery() {
  const listBakery = productList.filter((item) => item.type == "Bakery");
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row flex-wrap gap-4 ml-40 mb-2 mt-36">
        {listBakery.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
      <div className="fixed w-full mb-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
