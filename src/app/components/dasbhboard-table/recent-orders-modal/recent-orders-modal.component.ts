import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopupModalData } from 'src/app/model/dashboard.model';

@Component({
  selector: 'app-recent-orders-modal',
  templateUrl: './recent-orders-modal.component.html',
  styleUrls: ['./recent-orders-modal.component.scss']
})
export class RecentOrdersModalComponent {
  @Input() customerInfo!: PopupModalData;
  @Output() closeModalEvent = new EventEmitter();

  /**
   * on click of okay button , signals the parent component to hide the modal
   */
  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
