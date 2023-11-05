import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TopCardsComponent } from './components/top-cards/top-cards.component';
import { DasbhboardTableComponent } from './components/dasbhboard-table/dasbhboard-table.component';
import { RecentOrdersModalComponent } from './components/dasbhboard-table/recent-orders-modal/recent-orders-modal.component';
import { NewuserTableComponent } from './components/newuser-table/newuser-table.component';
import { DashboardChartsComponent } from './components/dashboard-charts/dashboard-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    HeaderComponent,
    TopCardsComponent,
    DasbhboardTableComponent,
    RecentOrdersModalComponent,
    NewuserTableComponent,
    DashboardChartsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
