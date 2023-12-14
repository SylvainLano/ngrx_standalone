import { createReducer } from "@ngrx/store";
import { PhoneModel } from "../../models/phone.model";

const initialState:PhoneModel[]=[
    {id:1,name:'Galaxy S23',description:'s23 description',photoLinks:'https://www.pngall.com/wp-content/uploads/13/Galaxy-S23.png',price:800},
    {id:2,name:'Galaxy S22',description:'s22 description',photoLinks:'https://cdn.revendo.com/thumbnail/3e/b1/3d/1661409560/samsung-galaxy-s22-5g-phantom-black-guenstig-gebraucht-kaufen-1.png_2500x2500.png',price:500},
    {id:3,name:'Galaxy Note 20',description:'galaxy note 10 description',photoLinks:'https://cdn.wccftech.com/wp-content/uploads/2020/07/Galaxy-Note-20-Ultra-609x740.png',price:200},
    {id:4,name:'Google Pixel 7',description:'google pixel 7 description',photoLinks:'https://img.tuttoandroid.net/wp-content/uploads/2020/09/Eir8KvGX0AA8ntx.png',price:400},
    {id:5,name:'Iphone 14',description:'Iphone 14 description',photoLinks:'https://pngimg.com/uploads/iphone_14/iphone_14_PNG9.png',price:3000},
    {id:1,name:'Iphone 12',description:'Iphone 12 description',photoLinks:'https://www.pngall.com/wp-content/uploads/13/Galaxy-S23.png',price:1200}

]


export const phoneReducer=createReducer(
    initialState,
)