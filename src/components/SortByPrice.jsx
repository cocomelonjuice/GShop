import React, { useState } from 'react'
import { productList } from '../ProductData';
import { current } from '@reduxjs/toolkit';
import Home from '../Home';

const SortByPrice = ({item, itemSort}) => {
  //lift state up to share state: 
  //Move the state from the child component to the parent component.
  //Pass the state down to the child components via props. https://www.youtube.com/watch?v=qdkW8VxCau0
  //If the child components need to modify the state, pass down callback functions via props.
  //or using useContext hook/ usereducer ?
  //const[item,itemSort]=useState(productList);
  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  }

  const handleChange = (value) => {
    if(value == 'none'){
        itemSort([...productList])
    } else {
      let toType, toAscending
      switch(value){
        case 'ascending' : toType = true; toAscending = true; break;
        case 'descending' : toType = true; toAscending = false; break;
        case 'high' : toType = false; toAscending = true; break;
        case 'low' : toType = false; toAscending = false; break;
      }
      let current = [...productList]
      current.sort((a, b) => toType ?
             compare(a.name, b.name, toAscending) 
             : 
             compare(a.price, b.price, toAscending))
      itemSort(current)
    }
  }

  return(
    <div className=''>
    <h1 className='mt-20 text-black'>Sort by:</h1>
    <select  onChange={(e) => handleChange(e.target.value)}>
      <option value="none">Default</option>
      <option value="ascending">Alphabetically, A-Z</option>
      <option value="descending">Alphabetically, Z-A</option>
      <option value="high">Low to high</option>
      <option value="low">High to low</option>
    </select>

    {/*{item.map(elem => <p key={elem.name}>{elem.name} {elem.price}</p>)}*/}
    </div>
  )

  /*const[item,itemSort]=useState(productList);

  function handleChange(e){
    //const value = e.target.value; // value of the option dropdown, will be use in swtich case
    const nextList = [...item]; // copy state into another array so that dont mutate state

    //sort ascending-descending
    //logic onClick/option: if attribute of option/ evnt name is asceding/descending ==> call function ascending/descending
    //itemSort(nextList);

    switch(e.target.value){
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
    <div className="">
    <div></div>
    <select className='mt-20' onChange={(e) => handleChange(e.target.value)}>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>g
    </select>
    </div>
  )*/
}

export default SortByPrice