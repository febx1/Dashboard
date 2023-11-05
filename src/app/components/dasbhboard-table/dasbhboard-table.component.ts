import { Component, Input } from '@angular/core';
import { PopupModalData, RecentOrder } from 'src/app/model/dashboard.model';

@Component({
  selector: 'app-dasbhboard-table',
  templateUrl: './dasbhboard-table.component.html',
  styleUrls: ['./dasbhboard-table.component.scss']
})
export class DasbhboardTableComponent {
  @Input() recentOrderList: RecentOrder[] = [];

  showModal = false;
  modalInfo!:PopupModalData;


  /**
   * returns the class as per the status
   * @param status
   * @returns
   */
  getStatusClass(status: string) {
    return {
      'paid': status === 'Paid',
      'failed': status === 'Failed',
      'pending': status === 'Pending',
    };
  }

  /**
   * upon click of a row in table the modal is set to visible
   * @param selectedItem
   */
  onRowClick(selectedItem: RecentOrder): void {
    this.modalInfo ={
      customerName:selectedItem.name,
      product:selectedItem.product,

    } ;
    this.showModal = true;
  }


/**
 * upon click of okay button on modal parent component hides the modal component
 */
  hideModal():void{
    this.showModal=false;
  }
}
