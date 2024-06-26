import React, {useState} from 'react';
import { productList } from '../ProductData';
//cần intergrate SearchBar component này vào Navbar( thay thế hardcoded searchbar đang ở trên Navbar)
//SearchBar có dạng dropdown list ( drop down từ thanh search, không cần hiển thị list filter này ở component khác ?)
/*const Searchbar = () => {
  const [search,setSearch] = useState('');
  console.log(search);
  return (
    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search for your drinks"></input>
      <div>
        {productList.filter((item)=>{
          return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
        }).map((item)=>{
          <div key={item.id}>
            <li>{item.name}</li>
            <li>{item.price}</li>
          </div>
        })}
  </div>
    </div>
  )
}

/*export function searchResult() {
  productList.filter((item)=>{
    return search.toLowerCase()===""?item:item.name.toLowerCase().includes(search);
  }).map((item)=>{
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  })
}
export default Searchbar;*/

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(productList, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <div><SearchBar query={query} onChange={handleChange}  />
        {query!=="" && (
        <List items={results}/>)}
      </div>
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      <input value={query} onChange={onChange} placeholder='Search for drinks' className='w-80 border-2 border-black rounded mt-2.5 h-10 text-black p-1'/>
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
    <table className=' shadow-lg rounded-md bg-white text-black min-w-80'>
      <tbody>
        {items.map((food) => (
          <tr className='hover:shadow-lg' key={food.id}>
            <td>{food.name}</td>
            <td>{food.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 