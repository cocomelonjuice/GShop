import { createSlice} from "@reduxjs/toolkit"
//import { productList } from "../ProductData"

const initialState ={
    choosenItems :[],
    amount: 0,
    total: 0
};

const cartSlice =  createSlice ({
    name: "cart",
    initialState,
    reducers: {

        add(state,action){
            state.choosenItems.push(action.payload);
        },
        remove(state,action){
            return state.choosenItems.filter((item)=>item.id!=action.payload);
        }
        /*increaseAmount: (state, {payload})=>{
            const item = state.products.find (item=>item.name===payload.name);
            item.amount++;
        },

        decreaseAmount: (state, {payload})=>{
            const item = state.products.find (item=>item.name===payload.name);
            item.amount--;
        },

        removeItem: (state, {payload})=>{
            state.products=state.products.filter (item=>item.name!=payload.name)
        },

        updateTotal : (state)=>{
            let amount = 0;
            let total = 0;
            state.products.forEach (item=>{
                amount +=item.amount;
                total+= item.amount*item.price
            });
            state.amount =  amount;
            state.total = total;

        }*/
    }

})

export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;