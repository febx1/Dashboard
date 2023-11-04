import { Component, Input } from '@angular/core';
import { TopCard } from 'src/app/model/dashboard.model';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent {
@Input() cardData:TopCard[]=[];


}
