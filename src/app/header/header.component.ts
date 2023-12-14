import { Component } from '@angular/core';
import { CartModel } from '../models/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItems=new Observable<CartModel[]>()
  cartItemsCount:number=0
  constructor(private store:Store<{cartReducer:CartModel[]}>){}
  ngOnInit(){
    this.cartItems=this.store.select('cartReducer')
    this.cartItems.subscribe(data=>{
      this.cartItemsCount=data.length
    })
  }

}
