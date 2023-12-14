import { Component, Input } from '@angular/core';
import { PhoneModel } from '../../models/phone.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-phone-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './single-phone-card.component.html',
  styleUrl: './single-phone-card.component.css'
})
export class SinglePhoneCardComponent {
@Input() phone!:PhoneModel
}
