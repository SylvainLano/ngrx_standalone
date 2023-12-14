import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PhoneModel } from '../models/phone.model';
import { CartModel } from '../models/cart.model';
import { addNewItemToCart } from '../store/cart/cartActions';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-phone-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent implements OnInit {
  allPhoness$=new Observable<PhoneModel[]>();
  phone!:PhoneModel | undefined
  id=''
  constructor(private activatedRoute:ActivatedRoute,private store:Store<{phoneReducer:PhoneModel[],cartReducer:CartModel[]}>){}
  ngOnInit(): void {
    this.allPhoness$=this.store.select('phoneReducer');
    this.id=this.activatedRoute.snapshot.params['id']
     this.allPhoness$.subscribe(data=>{
      this.phone=data.find((phone)=>phone.id.toString()==this.id)
      })
    
  
  }

  addToCart(){
    const item={
      id:this.phone?.id,
      name:this.phone?.name,
      quantity:1,
      price:this.phone?.price,
      photoLinks:this.phone?.photoLinks
    }
    this.store.dispatch(addNewItemToCart({item:item}))
  }

}
