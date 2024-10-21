import React, { useState } from "react";
import { productList } from "../ProductData";
import { current } from "@reduxjs/toolkit";
import Home from "../Home";

const SortByPrice = ({ item, itemSort }) => {
  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };

  const handleChange = (value) => {
    if (value == "none") {
      itemSort([...productList]);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let current = [...productList];
      current.sort((a, b) =>
        toType
          ? compare(a.name, b.name, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      itemSort(current);
    }
  };

  return (
    <div className="mb-8 border-gray-200 max-w-max min-h-16 mt-20 mx-auto">
      <h1 className="mt-2 text-black">Sort by</h1>
      <select
        className="border-2 mb-0 rounded-md"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="none">Default</option>
        <option value="high">Lowest to Highest</option>
        <option value="low">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default SortByPrice;
