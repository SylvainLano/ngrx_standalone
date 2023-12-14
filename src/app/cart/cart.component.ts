import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';
import { Store } from '@ngrx/store';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { addQuantity, subQuantity } from '../store/cart/cartActions';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,CartItemComponent, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartItems$=new Observable<CartModel[]>()
cartItems!:CartModel[]
constructor(private store:Store<{cartReducer:CartModel[]}>){}
ngOnInit(){
  this.cartItems$=this.store.select('cartReducer')
  this.cartItems$.subscribe(data=>{
    this.cartItems=data
  })
}

addQuantity(id:number){
  this.store.dispatch(addQuantity({id:id}))
}

subQuantity(id:number){
  this.store.dispatch(subQuantity({id:id}))
}



}
