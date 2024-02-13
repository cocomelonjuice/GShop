import React, {useState} from 'react';
import { productList } from '../ProductData';


//cần intergrate SearchBar component này vào Navbar( thay thế hardcoded searchbar đang ở trên Navbar)
//SearchBar có dạng dropdown list ( drop down từ thanh search, không cần hiển thị list filter này ở component khác ?)
const Searchbar = () => {
  const [search,setSearch] = useState('');
  console.log(search);
  return (

    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search for your drinks"></input>
      <div>
        {productList.filter((item)=>{
          return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
        }).map((item)=>{
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        })}
  </div>
    </div>

  )
}

/*export function searchResult() {
  productList.filter((item)=>{
    return search.toLowerCase()===""?item:item.toLowerCase().includes(search);
  }).map((item)=>{
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  })
}*/

export default Searchbar;
