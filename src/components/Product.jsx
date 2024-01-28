import React from "react";
import { add } from "../features/Slice";
import {useSelector, useDispatch} from "react-redux";

const Product = ({item})=>{
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(add(item))
  }

  /*const decrease = ()=>{
    dispatch(decreaseAmount(item))
  }

  const remove = ()=>{
    dispatch(removeItem(item))
  }*/
  
  return (
    <div>
        <div>
            <img src={item.image} />
        </div>

        <div>
            <p>{item.name}</p>
        </div>
        
        <div>
            <p>{item.price}</p>
        </div>

        <button onClick={addToCart}>Add to Cart</button>

        {/*<button>Remove</button>
        <button>+</button>
        <button>-</button>*/}

    </div>
  )
}

export default Product;

