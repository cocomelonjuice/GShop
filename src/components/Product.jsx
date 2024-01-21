import { increaseAmount,decreaseAmount,removeItem} from "../features/Slice";
import {useSelector, useDispatch} from "react-redux";

const product = ({item})=>{
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const increase = ()=>{
    dispatch(increaseAmount(item))
  }

  const decrease = ()=>{
    dispatch(decreaseAmount(item))
  }

  const remove = ()=>{
    dispatch(removeItem(item))
  }
  
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

        



    </div>
  )
}

