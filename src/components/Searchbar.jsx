import React, { useState } from "react";
import { productList } from "../ProductData";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(productList, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <div>
        <SearchBar query={query} onChange={handleChange} />
        {query !== "" && <List items={results} />}
      </div>
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      <input
        value={query}
        onChange={onChange}
        placeholder="Search for drinks"
        className="w-80 border-2 border-black rounded mt-2.5 h-10 text-black p-1"
      />
    </label>
  );
}

function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

function List({ items }) {
  return (
    <table className=" shadow-lg rounded-md bg-white text-black min-w-80">
      <tbody>
        {items.map((food) => (
          <tr className="hover:shadow-lg" key={food.id}>
            <td>{food.name}</td>
            <td>{food.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
