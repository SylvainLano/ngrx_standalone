import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
@Input() item!:CartModel
@Output() sendQToAdd=new EventEmitter<number>()
@Output() sendQToSub=new EventEmitter<number>()


addQ(){
  this.sendQToAdd.emit(this.item.id)
}

subQ(){
  this.sendQToSub.emit(this.item.id)
}

}
