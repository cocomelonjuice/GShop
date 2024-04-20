import { createSlice} from "@reduxjs/toolkit"
import { productList } from "../ProductData"
import { useEffect } from "react";


const items=localStorage.getItem('choosenItems')!==null?JSON.parse(localStorage.getItem('choosenItems')):[];
const cartTotalQuantity=localStorage.getItem('cartTotalQuantity')!==null?JSON.parse(localStorage.getItem('cartTotalQuantity')):[];
const cartTotalAmount=localStorage.getItem('cartTotalAmount')!==null?JSON.parse(localStorage.getItem('cartTotalAmount')):[];

/*const items=localStorage.getItem('choosenItems')!=="undefined"?JSON.parse(localStorage.getItem('choosenItems')):[];
const cartTotalQuantity=localStorage.getItem('cartTotalQuantity')!=="undefined"?JSON.parse(localStorage.getItem('cartTotalQuantity')):[];
const cartTotalAmount=localStorage.getItem('cartTotalAmount')!=="undefined"?JSON.parse(localStorage.getItem('cartTotalAmount')):[];*/

const setItemFunc = (item, cartTotalQuantity, cartTotalAmount)=>{
  localStorage.setItem('choosenItems', JSON.stringify(item));
  localStorage.setItem('cartTotalQuantity', JSON.stringify(cartTotalQuantity));
  localStorage.setItem('cartTotalAmount', JSON.stringify(cartTotalAmount));
}

const initialState ={
    choosenItems : items, //[]
    //cartTotalQuantity:0,
    //cartTotalAmount:0,
};

const cartSlice =  createSlice ({
    name: "cart",
    initialState,
    reducers: {

        add(state,action){
            const itemIndex = state.choosenItems.findIndex((item)=>item.id==action.payload.id);

            if (itemIndex>=0){
                state.choosenItems[itemIndex]={
                    ...state.choosenItems[itemIndex],
                    cartQuantity: state.choosenItems[itemIndex].cartQuantity+1,
                }
            }else{
                const tempProduct = {...action.payload, cartQuantity:1};
                state.choosenItems.push(tempProduct);
            }
            setItemFunc(state.choosenItems.map((item)=>item), state.cartTotalAmount,state.cartTotalQuantity);
        },

        decreaseCart(state, action) {
            const itemIndex = state.choosenItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.choosenItems[itemIndex].cartQuantity > 1) {
              state.choosenItems[itemIndex].cartQuantity -= 1;
      
            } else if (state.choosenItems[itemIndex].cartQuantity === 1) {
              const nextCartItems = state.choosenItems.filter(
                (item) => item.id !== action.payload.id
              );
              state.choosenItems = nextCartItems;
            }
            setItemFunc(state.choosenItems.map((item)=>item), state.cartTotalAmount,state.cartTotalQuantity);
          },

          removeFromCart(state, action) {
            state.choosenItems.map((cartItem) => {
              if (cartItem.id === action.payload.id) {
                const nextCartItems = state.choosenItems.filter(
                  (item) => item.id !== cartItem.id
                );
      
                state.choosenItems = nextCartItems;
              }
              return state;
            });
            setItemFunc(state.choosenItems.map((item)=>item), state.cartTotalAmount,state.cartTotalQuantity);
          },

          getTotals(state, action) {
            let { total, quantity } = state.choosenItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

            setItemFunc(state.choosenItems.map((item)=>item), state.cartTotalAmount,state.cartTotalQuantity);
          },
    }
})
export const {add, decreaseCart, removeFromCart, getTotals} =cartSlice.actions;
export default cartSlice.reducer;