import { createSlice} from "@reduxjs/toolkit"
//import { productList } from "../ProductData"

const initialState ={
    choosenItems :[],
    //amount: 0,
    //total: 0
    
    
};

const cartSlice =  createSlice ({
    name: "cart",
    initialState,
    reducers: {

        //check phút 8:00 vidoeo 9/13 cho function add

        add(state,action){

            const isExist = state.choosenItems.find(item=>item.id==action.payload?.id)
            if (isExist){
                isExist.sum+=action.payload?.price;
                isExist.qty+=1;
            }else{
                //state.choosenItems.push(action.payload);
                state.choosenItems.push({...action.payload,
                sum: action.payload?.price,
            qty: 1});
            }

        },
        /* remove(state,action){
            const isExist = state.choosenItems.find(item=>item.id==action.payload.id)
            if(isExist && isExist.qty!=1){
                isExist.qty-=1;
                isExist.sum-=action.payload.price;
            }else{
                state.choosenItems = state.choosenItems.filter((item)=>item.id!=action.payload.id);
            }

        }*/

        remove(state,action){
            state.choosenItems = state.choosenItems.filter((item)=>item.id!=action.payload);
        },
       
  
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