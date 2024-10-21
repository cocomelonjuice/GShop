import { productList } from "../ProductData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "./Product";

export default function Tea() {
  const listTea = productList.filter((item) => item.type == "Tea");
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row flex-wrap gap-4 ml-40 mb-2 mt-36">
        {listTea.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
      <div className="fixed w-full mb-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
