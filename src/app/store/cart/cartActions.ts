import { createAction, props } from "@ngrx/store";
import { CartModel } from "../../models/cart.model";

export const addNewItemToCart=createAction('[Cart] AddNew',props<{item:CartModel}>())
export const addQuantity=createAction('[Cart] AddQuantity',props<{id:number}>())
export const subQuantity=createAction('[Cart] SubQuantity',props<{id:number}>())