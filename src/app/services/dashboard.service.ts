import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardData } from '../model/dashboard.model';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient: HttpClient) { }
  getDashboardInfo(): Observable<DashboardData> {
    return <Observable<DashboardData>>this._httpClient.get('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
