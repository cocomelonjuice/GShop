import React, { useState } from 'react'
import { productList } from '../ProductData';

const SortByPrice = () => {

  const[item,itemSort]=useState(productList);

  function handleClick(e){
    const value = e.target.value; // value of the option dropdown, will be use in swtich case
    const nextList = [...item]; // copy state into another array so that dont mutate state

    //sort ascending-descending
    //logic onClick/option: if attribute of option/ evnt name is asceding/descending ==> call function ascending/descending
    //itemSort(nextList);

    switch(value){
      case "ascending":
        itemSort(nextList.sort((a,b)=>a.price.localeCompare(b.price)))  
        break
      case "descending":
        itemSort(nextList.sort((a,b)=>b.price.localeCompare(a.price)))  
        break  
    }

    console.log(nextList);
  }
  return (
    <div className="border-red-600   ">
    <select className='mt-20'>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
    </div>
  )
}

export default SortByPrice