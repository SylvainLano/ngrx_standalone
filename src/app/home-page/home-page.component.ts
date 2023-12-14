import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneModel } from '../models/phone.model';
import { Store } from '@ngrx/store';
import { SinglePhoneCardComponent } from './single-phone-card/single-phone-card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,SinglePhoneCardComponent,HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
 phones$=new Observable<PhoneModel[]>();
 phones!:PhoneModel[]
 constructor(private store : Store<{phoneReducer:PhoneModel[]}>){}
 ngOnInit(){
  this.phones$=this.store.select('phoneReducer')
  this.phones$.subscribe(data=>{
   
    this.phones=data
  })
 }
}
