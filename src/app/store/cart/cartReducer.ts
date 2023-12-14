import { createReducer, on } from "@ngrx/store";
import { CartModel } from "../../models/cart.model";
import { addNewItemToCart, addQuantity, subQuantity } from "./cartActions";

const initialState: CartModel[] = []


export const cartReducer = createReducer(
    initialState,
    on(addNewItemToCart,(state,action)=>{
      if(state.find((item)=>item.id===action.item.id)){
         return [...state.map((item)=>(item.id===action.item.id?{...item,quantity:item?.quantity+1}:item))]
      }else{
         return [...state,action.item]
      }
    }),
    on(addQuantity,(state,action)=>{
       return state.map((item)=>(item.id===action.id?{...item,quantity:item?.quantity+1}:item))
    }),
    on(subQuantity,(state,action)=>{
        return state.map((item)=>(item.id===action.id?item.quantity>1?{...item,quantity:item?.quantity-1}:item:item))
     })
)