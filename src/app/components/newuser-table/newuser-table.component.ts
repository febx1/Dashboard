import { Component, Input } from '@angular/core';
import { NewUser } from 'src/app/model/dashboard.model';

@Component({
  selector: 'app-newuser-table',
  templateUrl: './newuser-table.component.html',
  styleUrls: ['./newuser-table.component.scss']
})
export class NewuserTableComponent {
  @Input() newUserList: NewUser[] = [];

  /**
   * gives the class of progress bar according the percentage
   * @param progress
   * @returns
   */
  getBackgroundColorClass(progress: number):string {
    switch (true) {
      case progress > 90:
        return 'excellent';
      case progress > 80:
        return 'best'
      case progress > 50:
        return 'above-average'
      case progress > 40:
        return 'average'
      case progress > 30:
        return 'less-average'
      case progress > 20:
        return 'low'
      default:
        return 'very-low'

    }
  }
}
