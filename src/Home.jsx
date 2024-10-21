import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { productList } from "./ProductData";
import Footer from "./components/Footer";
import { useState } from "react";
import SortByPrice from "./components/SortByPrice";
import { toast } from "react-hot-toast";

export default function Home() {
  const [item, itemSort] = useState(productList);
  return (
    <div>
      <Navbar />
      <SortByPrice className="mt-20" itemSort={itemSort} item={item} />

      <div className="flex flex-row flex-wrap gap-4 ml-40 mb-16">
        {item.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
