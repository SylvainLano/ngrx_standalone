import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CartModel } from '../models/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItems=new Observable<CartModel[]>()
  cartItemsCount:number=0
  constructor(private store:Store<{cartReducer:CartModel[]}>, public router: Router){}
  ngOnInit(){
    this.cartItems=this.store.select('cartReducer')
    this.cartItems.subscribe(data=>{
      this.cartItemsCount=data.map(p=>p.quantity)
      .reduce((total, num) => total + num);
    })
  }

}
