import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { DashboardData } from './model/dashboard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _service:DashboardService){}

  dashboardData!:DashboardData;
  ngOnInit(): void {
   this._service.getDashboardInfo().subscribe((response:DashboardData)=>{
    this.dashboardData=response;
   })
  }

}
